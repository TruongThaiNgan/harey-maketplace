import classNames from 'classnames';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { shallowEqual } from 'react-redux';

import Payment from '@Component/Payment/Payment';
import SelectCountry from '@Component/SelectCountry';
import { getCartList } from '@Slice/cartSlice';
import { useAppSelector } from '@Store/hooks';
import { calculateTotal, calculateTotalAndConvert, convertMoney } from '@Util/convert';

import classes from './Checkout.module.scss';
import { initialValues, listInput, validationSchema } from './constants';

const Checkout: React.FC = () => {
  // Hook states
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const cartList = useAppSelector(getCartList, shallowEqual);
  const { values, handleChange, isValid, dirty } = useFormik({
    initialValues,
    onSubmit: () => {
      console.log('sending');
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
  });

  // Renderers
  const totalPrice = cartList.reduce((total, { price, amount }) => total + calculateTotal(price, amount), 0);
  const totalAmount = cartList.reduce((total, { amount }) => total + amount, 0);

  const detail = (
    <div className={classes.detail}>
      <div className={classes.record}>
        <span className={classes.header}>Product</span>
        <span className={classes.header}>Total</span>
      </div>
      {cartList.map(({ amount, title, price, id }) => (
        <div className={classes.record} key={id}>
          <span>
            {title} <strong>× {amount}</strong>
            <div>Vendor: StylemixThemes Store</div>
          </span>
          <span>{calculateTotalAndConvert(price, amount)}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className={classes.checkoutContainer}>
      <div className={classes.center}>
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
        </div>

        <div className={classes.cardDetails}>
          <div className={classes.row}>
            <div className={classes.left}>{totalAmount} items</div>
            <div className={classes.right}>
              <button
                type="button"
                className={classes.showDetail}
                onClick={() => {
                  setShowDetail((prev) => !prev);
                }}
              >
                {showDetail ? 'Hide' : 'Show'} Detail
              </button>
            </div>
          </div>
          {showDetail && <div className={classes.row}>{detail}</div>}
          <div className={classes.separate} />
          <div className={classes.row}>
            <div className={classes.left}>subtotal</div>
            <div className={classNames(classes.right, classes.subTotal)}>{convertMoney(totalPrice)}</div>
          </div>
          <div className={classes.separate} />
          <div className={classes.row}>
            <div className={classes.left}>shipping</div>
            <div className={classes.right}>Free shipping</div>
          </div>
          <div className={classes.separate} />
          <div className={classes.row}>
            <div className={classes.left}>total</div>
            <div className={classNames(classes.right, classes.total)}>{convertMoney(totalPrice)}</div>
          </div>
          <div style={{ paddingLeft: '3rem', width: '100%' }}>
            <Payment value={values} disabled={!(isValid && dirty)} />
          </div>
        </div>
      </div>
    </div>
  );
};

Checkout.defaultProps = {};
export default Checkout;
