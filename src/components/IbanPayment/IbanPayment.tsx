import { IbanElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useCallback, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { shallowEqual } from 'react-redux';

import axios from '@Service/axios';
import Modal from '@Component/Modal';
import { useAppDispatch, useAppSelector } from '@Store/hooks';
import { emptyCart, getCartList } from '@Slice/cartSlice';
import { calculateTotal } from '@Util/convert';

import { IbanPaymentProps } from './interfaces';
import classes from './IbanPayment.module.scss';

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
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [error, setError] = useState<string>('Processing');
  const [block, setBlock] = useState<boolean>(false);
  const cartList = useAppSelector(getCartList, shallowEqual);
  const totalPrice = cartList.reduce((total, { price, amount }) => total + calculateTotal(price, amount), 0);
  const totalAmount = cartList.reduce((total, { amount }) => total + amount, 0);
  const onSubmitIban = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if (!stripe || !elements) {
        return;
      }
      setShowModal(true);
      setBlock(true);
      const ibanElement = elements.getElement(IbanElement);
      console.log(value.email);

      const payment = await axios.post('/payment/iban-payment', {
        email: value.email,
        amount: totalPrice * 100,
        description: `${totalAmount} products:${cartList.map((item) => `${item.title}:${item.amount}`).join(', ')}`,
      });
      const { error: confirmError } = await stripe.confirmSepaDebitPayment(payment.data.clientSecret, {
        payment_method: {
          sepa_debit: ibanElement!,
          billing_details: {
            address: {
              city: value.city,
              country: value.country,
              postal_code: value.postCode,
            },
            email: value.email,
            name: `${value.firstName} ${value.lastName}`,
            phone: value.phone,
          },
        },
      });
      if (confirmError) {
        setBlock(false);
        setError('Confirm Error');
      } else {
        setBlock(false);
        setError(
          'Request was sent, payment process will take several minutes, we will sent mail for you when process finish',
        );
        dispatch(emptyCart());
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [elements, stripe, value],
  );
  return (
    <div className={classes.IbanPaymentContainer}>
      <div className={classes.card}>
        <IbanElement options={IBAN_ELEMENT_OPTIONS} />
      </div>
      <button type="button" className={classes.button} onClick={onSubmitIban} disabled={disabled}>
        Pay
      </button>
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
  );
};

IbanPayment.defaultProps = {};
export default IbanPayment;
