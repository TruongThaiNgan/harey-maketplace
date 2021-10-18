import CircularProgress from '@material-ui/core/CircularProgress';
import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useCallback, useState } from 'react';
import { shallowEqual } from 'react-redux';

import Modal from '@Component/Modal';
import axios from '@Service/axios';
import { emptyCart, getCartList } from '@Slice/cartSlice';
import { ErrStripe } from '@Slice/interfaces';
import { useAppDispatch, useAppSelector } from '@Store/hooks';
import { calculateTotal } from '@Util/convert';

import classes from './CardPayment.module.scss';
import { CardPaymentProps } from './interfaces';

const CardPayment: React.FC<CardPaymentProps> = ({ value, disabled }) => {
  // Hook states
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [error, setError] = useState<string>('Error');
  const [block, setBlock] = useState<boolean>(false);
  const cartList = useAppSelector(getCartList, shallowEqual);
  const totalPrice = cartList.reduce((total, { price, amount }) => total + calculateTotal(price, amount), 0);
  const totalAmount = cartList.reduce((total, { amount }) => total + amount, 0);
  // Action handlers
  const onSubmitCard = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if (!stripe || !elements) {
        return;
      }

      setShowModal(true);
      setBlock(true);
      setError('create payment');
      const cardNumberElement = elements.getElement(CardNumberElement);

      const { error: createError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardNumberElement!,
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
      });

      if (createError) {
        setError('create error');
        setBlock(false);
      } else {
        try {
          const payment = await axios.post('/payment/card-payment', {
            id: paymentMethod!.id,
            amount: totalPrice,
            description: `${totalAmount} products:${cartList.map((item) => `${item.title}:${item.amount}`).join(', ')}`,
          });
          setError('send data backend ');
          if (payment.data.actionRequired) {
            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(payment.data.clientSecret);
            if (confirmError) {
              setBlock(false);
              setError('confirm error');
            } else if (paymentIntent?.status === 'succeeded') {
              setError('verifying');
              const check = await axios.get(`/payment/check/${payment.data.id}`);
              if (check.status === 200) {
                dispatch(emptyCart());
                setError('payment success');
              }
            }
          } else {
            if (payment.data.status === 400) setError(payment.data.message);
            else {
              dispatch(emptyCart());
              setError('payment success');
            }
          }
        } catch (err: unknown) {
          setError((err as ErrStripe)?.message);
        } finally {
          setBlock(false);
        }
      }
    },
    [
      cartList,
      dispatch,
      elements,
      stripe,
      totalAmount,
      totalPrice,
      value.city,
      value.country,
      value.email,
      value.firstName,
      value.lastName,
      value.phone,
      value.postCode,
    ],
  );
  // Renderers
  return (
    <div className={classes.cardContainer}>
      <div style={{ marginBottom: '0.5rem', width: '100%' }}>Card Information</div>
      <div className={classes.cardNumber}>
        <CardNumberElement
          options={{
            showIcon: true,
            iconStyle: 'default',
            placeholder: '4242-4242-4242-4242',
            style: {
              base: {
                fontSize: '16px',
              },
            },
          }}
        />
      </div>
      <div className={classes.subInfo}>
        <div className={classes.elementLeft}>
          <CardExpiryElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                },
              },
            }}
          />
        </div>
        <div className={classes.elementRight}>
          <CardCvcElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                },
              },
            }}
          />
        </div>
      </div>
      <button type="submit" onClick={onSubmitCard} className={classes.submit} disabled={disabled}>
        pay
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

CardPayment.defaultProps = {};
export default CardPayment;
