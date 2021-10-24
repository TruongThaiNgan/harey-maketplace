import { IbanElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useCallback, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { PayPalButtons, PayPalScriptProvider, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { CircularProgress } from '@material-ui/core';

import Modal from '@Component/Modal';
import axios from '@Service/axios';
import { useAppDispatch, useAppSelector } from '@Store/hooks';
import { emptyCart, getCartList } from '@Slice/cartSlice';
import { calculateTotal } from '@Util/convert';

import { IbanPaymentProps } from './interfaces';
import classes from './PaypalPayment.module.scss';

const IBAN_STYLE = {
  base: {
    color: '#707070',
    fontSize: '16px',
    '::placeholder': {
      color: '#707070',
    },
    ':-webkit-autofill': {
      color: '#707070',
    },
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a',
    ':-webkit-autofill': {
      color: '#fa755a',
    },
  },
};
const IBAN_ELEMENT_OPTIONS = {
  supportedCountries: ['SEPA'],
  placeholderCountry: 'DE',
  style: IBAN_STYLE,
};
const IbanPayment: React.FC<IbanPaymentProps> = ({ value, disabled }) => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [error, setError] = useState<string>('Error');
  const [block, setBlock] = useState<boolean>(false);
  const cartList = useAppSelector(getCartList, shallowEqual);
  const totalPrice = cartList.reduce((total, { price, amount }) => total + calculateTotal(price, amount), 0);

  const detailsPaypal = cartList.map((item) => {
    return {
      name: item.title,
      quantity: `${item.amount}`,
      unit_amount: {
        value: item.price.slice(1),
        currency_code: 'USD',
      },
    };
  });

  return (
    <div className={classes.IbanPaymentContainer}>
      <div className={classes.card}>
        <PayPalScriptProvider options={{ 'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID || 'test' }}>
          <PayPalButtons
            style={{ layout: 'horizontal' }}
            onApprove={async (data, actions) => {
              const orderCapture = await actions.order.capture();
              const { status } = orderCapture;
              if (orderCapture && status === 'COMPLETED') {
                dispatch(emptyCart());
                setError('payment success');
                setBlock(false);
                setShowModal(true);
              }
            }}
            createOrder={(data, actions) =>
              actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: `${totalPrice}`,
                      currency_code: 'USD',
                      breakdown: {
                        item_total: {
                          value: `${totalPrice}`,
                          currency_code: 'USD',
                        },
                      },
                    },
                    items: detailsPaypal,
                  },
                ],
              })
            }
          />
        </PayPalScriptProvider>
        <Modal
          show={showModal}
          closeModal={() => {
            setShowModal(false);
          }}
        >
          <div className={classes.modal}>
            <div className={classes.error}>{error}</div>
            <div className={classes.error}>{block && <CircularProgress size="5rem" />}</div>
            <div className={classes.error}>
              <button
                type="button"
                className={classes.submit}
                style={{ width: '50%' }}
                onClick={() => {
                  setShowModal(false);
                }}
                disabled={block}
              >
                OK
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

IbanPayment.defaultProps = {};
export default IbanPayment;
