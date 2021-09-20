import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';

import { initialValues, listInput, validationSchema } from '@Component/Checkout/constants';
import SelectCountry from '@Component/SelectCountry';
import { LOG_OUT } from '@Constant/auth';
import { createInfoPayment, createPaymentMethod, getInfoPayment } from '@Service/payment/payment';
import { getListPaymentIDFromStore } from '@Slice/selector';
import { fetchListCardPaymentID } from '@Slice/userSlice';
import { useAppDispatch, useAppSelector } from '@Store/hooks';

import classes from './MyAccount.module.scss';

const style = {
  base: {
    fontSize: '16px',
  },
};

const MyAccount: React.FC = () => {
  // Hook states
  const dispatch = useAppDispatch();
  const [index, setIndex] = useState<number>(1);
  const stripe = useStripe();
  const elements = useElements();
  const [hasInfo, setHasInfo] = useState<boolean>(false);
  const listPaymentID = useAppSelector(getListPaymentIDFromStore);
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: async () => {
      try {
        const info = await createInfoPayment(values);
        if (info.status !== 200) alert('create info fail');
        setHasInfo(true);
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
  });

  // Hook effects
  useEffect(() => {
    const fetchInfo = async (): Promise<void> => {
      try {
        const infoPayment = await getInfoPayment();
        if (infoPayment.data.status !== 200 || !infoPayment.data.info) {
          alert('get info fail');
          return;
        }
        if (Object.keys(infoPayment.data.info).length !== 0) setHasInfo(true);
        else setHasInfo(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchInfo();
  }, []);

  useEffect(() => {
    dispatch(fetchListCardPaymentID());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Constants
  const onClick = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const cardNumberElement = elements.getElement(CardNumberElement);
    const { error: createError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardNumberElement!,
    });
    if (createError) {
      alert('create error');
      return;
    }
    if (!paymentMethod) {
      alert('get payment method fail');
      return;
    }
    const newPaymentMethod = await createPaymentMethod({
      paymentID: paymentMethod.id,
    });
    if (newPaymentMethod.data.status !== 200) {
      alert('create fail');
      return;
    }
    setHasInfo(true);
    alert('Add card success');
  };

  // Action handlers

  // Renderers
  const form = (
    <div className={classes.billDetails}>
      <div className={classes.billTitle}>Billing details</div>
      <div className={classes.form}>
        {listInput.map(({ required, title, name }) => (
          <label htmlFor={title} key={title}>
            <span>
              {title}
              {required && <span className={classes.asterisk}> * </span>}
            </span>
            {name === 'country' ? (
              <div className={classes.select}>
                <SelectCountry value={values[name]} onChange={handleChange} />
              </div>
            ) : (
              <input type="text" name={name} value={values[name]} onChange={handleChange} />
            )}
          </label>
        ))}
      </div>
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        submit
      </button>
    </div>
  );

  return (
    <div className={classes.myAccountContainer}>
      <div className={classes.sideBar}>
        <div className={classes.sideBarRow}>
          <button
            type="button"
            onClick={() => {
              setIndex(1);
            }}
          >
            manage payment account
          </button>
        </div>
        <div className={classes.sideBarRow}>
          <button
            type="button"
            onClick={() => {
              setIndex(2);
            }}
          >
            Add payment card
          </button>
        </div>
        <div className={classes.sideBarRow}>
          <button
            type="button"
            onClick={() => {
              dispatch({ type: LOG_OUT });
            }}
          >
            log out
          </button>
        </div>
      </div>
      <div className={classes.content}>
        {index === 1 && (
          <div>
            <div style={{ marginBottom: '1rem', textTransform: 'uppercase' }}>List card payment</div>
            {listPaymentID.map(({ paymentMethodID, last4 }, number) => (
              <div className={classes.row} key={paymentMethodID}>
                <span>{`card ${number}:`}</span> {`**** **** **** ${last4}`}
              </div>
            ))}
          </div>
        )}
        {index === 2 &&
          (hasInfo ? (
            <div className={classes.cardContainer}>
              <div style={{ marginBottom: '0.5rem', width: '100%' }}>Card Information</div>
              <div className={classes.cardNumber}>
                <CardNumberElement
                  options={{
                    showIcon: true,
                    iconStyle: 'default',
                    placeholder: '4242-4242-4242-4242',
                    style,
                  }}
                />
              </div>
              <div className={classes.subInfo}>
                <div className={classes.elementLeft}>
                  <CardExpiryElement
                    options={{
                      style,
                    }}
                  />
                </div>
                <div className={classes.elementRight}>
                  <CardCvcElement
                    options={{
                      style,
                    }}
                  />
                </div>
              </div>
              <button type="submit" onClick={onClick} className={classes.submit}>
                Add payment card
              </button>
            </div>
          ) : (
            <div>
              Please update info
              {form}
            </div>
          ))}
      </div>
    </div>
  );
};

MyAccount.defaultProps = {};
export default MyAccount;
