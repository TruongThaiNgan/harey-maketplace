import React, { useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';

import { getIdCartList, getCartList, removeToCart, updateAmountItemCart } from '@Slice/cartSlice';
import { useAppDispatch, useAppSelector } from '@Store/hooks';
import { fetchProductList } from '@Slice/pageSlice';
import { calculateTotal, calculateTotalAndConvert, convertMoney } from '@Util/convert';
import SelectCountry from '@Component/SelectCountry';
import ButtonShop from '@Component/ButtonShop';
import CustomLink from '@Component/CustomLink';

import classes from './Cart.module.scss';

const Cart: React.FC = () => {
  // Hook states
  const cartList = useAppSelector(getCartList, shallowEqual);
  const cart = useAppSelector(getIdCartList, shallowEqual);
  const [country, setCountry] = useState<string>('VN');
  const dispatch = useAppDispatch();

  // Hook effects
  useEffect(() => {
    dispatch(fetchProductList(cart));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Renderers
  const totalPrice = cartList
    ? cartList.reduce((total, { price, amount }) => total + calculateTotal(price, amount), 0)
    : 0;

  return (
    <div className={classes.cartContainer}>
      <div className={classes.center}>
        {cartList.length === 0 ? (
          <div>Loading</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th style={{ width: '20%' }}> </th>
                <th style={{ width: '20%' }}>product</th>
                <th style={{ width: '20%' }}>price</th>
                <th style={{ width: '15%' }}>quantity</th>
                <th style={{ width: '20%' }}>total</th>
                <th style={{ width: '5%' }}> </th>
              </tr>
            </thead>
            <tbody>
              {cartList.map(({ amount, id, image1, price, title }) => (
                <tr key={id + title}>
                  <td>
                    <img src={image1} alt="" />
                  </td>
                  <td>
                    <span className={classes.title}>{title}</span>
                  </td>
                  <td>
                    <span className={classes.price}>{price}</span>
                  </td>
                  <td>
                    <input
                      type="number"
                      value={amount}
                      className={classes.amount}
                      min={1}
                      step={1}
                      onChange={(event) => {
                        dispatch(updateAmountItemCart({ id, amount: +event.target.value }));
                      }}
                    />
                  </td>
                  <td>
                    <span className={classes.total}>{calculateTotalAndConvert(price, amount)}</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={classes.cancel}
                      onClick={() => {
                        dispatch(removeToCart({ id }));
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className={classes.checkout}>
        <div className={classes.shipping}>
          <div className={classes.nav}>
            <button type="button">estimate shipping</button>
            <button type="button">coupon code</button>
          </div>
          <div className={classes.content}>
            <span>Free shipping</span>
            <span>
              Estimate for <strong>1,1 Vietnam.</strong>
            </span>
            <div className={classes.select}>
              <SelectCountry value={country} onChange={setCountry} />
            </div>
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Postcode/ ZIP" />
            <div className={classes.button}>
              <ButtonShop
                text="Update"
                style={{
                  height: '2.5rem',
                  width: '8rem',
                  fontWeight: 'normal',
                  letterSpacing: '0.1rem',
                  fontSize: '0.9rem',
                }}
              />
            </div>
          </div>
        </div>

        <div className={classes.subTotal}>
          <div className={classes.row}>
            <span>subtotal</span>
            <span className={classes.totalPrice}>{convertMoney(totalPrice)}</span>
          </div>
          <div className={classes.separate} />
          <div className={classes.row}>
            <span>total</span>
            <span className={classes.totalPrice}>{convertMoney(totalPrice)}</span>
          </div>
          <div className={classes.separate} />
        </div>
      </div>
      <div className={classes.listButton}>
        <button type="button" className={classes.shopping}>
          <CustomLink to="/shop">continue shopping</CustomLink>
        </button>

        <button type="button" className={classes.proceed}>
          <CustomLink to="/checkout">proceed to checkout</CustomLink>
        </button>
      </div>
    </div>
  );
};

Cart.defaultProps = {};
export default Cart;
