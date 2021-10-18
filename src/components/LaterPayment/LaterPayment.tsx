import { useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Redirect } from 'react-router-dom';
import { shallowEqual } from 'react-redux';

import { createInvoice, createSetupIntent } from '@Service/payment/payment';
import { getAuth, getListPaymentIDFromStore } from '@Slice/selector';
import { fetchListCardPaymentID } from '@Slice/userSlice';
import { useAppDispatch, useAppSelector } from '@Store/hooks';
import { emptyCart, getCartList } from '@Slice/cartSlice';
import { calculateTotal } from '@Util/convert';

import classes from './LaterPayment.module.scss';

const LaterPayment: React.FC = () => {
  // Hook states
  const stripe = useStripe();
  const auth = useAppSelector(getAuth);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const listPaymentID = useAppSelector(getListPaymentIDFromStore);
  const cartList = useAppSelector(getCartList, shallowEqual);
  const totalPrice = cartList.reduce((total, { price, amount }) => total + calculateTotal(price, amount), 0);
  const totalAmount = cartList.reduce((total, { amount }) => total + amount, 0);
  // Hook effects
  useEffect(() => {
    dispatch(fetchListCardPaymentID());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Action handlers
  const addPaymentMethod = async (paymentMethodID: string): Promise<void> => {
    try {
      const intent = await createSetupIntent();
      if (intent.status !== 200) {
        alert('create fail');
        return;
      }
      if (!stripe) return;
      const { error: confirmError } = await stripe.confirmCardSetup(intent.data.clientSecret, {
        payment_method: paymentMethodID,
      });
      if (confirmError) {
        alert('error');
      } else {
        const invoice = await createInvoice({
          paymentMethodID,
          amount: totalPrice * 100,
          description: `${totalAmount} products:${cartList.map((item) => `${item.title}:${item.amount}`).join(', ')}`,
        });
        if (invoice.data.message === 'create invoice') {
          dispatch(emptyCart());
          alert('create invoice success');
        } else alert('create invoice fail');
      }
    } catch (error) {
      console.log(error);
    }
  };
  // Renderers

  const redirect = <Redirect to={{ pathname: '/login', state: { from: location } }} />;
  const content = (
    <div>
      <div>Please choose 1 card</div>
      <div className={classes.card}>
        {listPaymentID.length === 0 ? (
          <div>Add 1 payment card</div>
        ) : (
          listPaymentID.map(({ paymentMethodID, last4 }) => (
            <div className={classes.row} key={paymentMethodID}>
              {`**** **** **** ${last4}`}
              <button type="button" onClick={() => addPaymentMethod(paymentMethodID)}>
                select
              </button>
            </div>
          ))
        )}
      </div>
      <button type="button">click</button>
    </div>
  );

  return <div className={classes.laterPaymentContainer}>{auth ? content : redirect}</div>;
};

LaterPayment.defaultProps = {};
export default LaterPayment;
