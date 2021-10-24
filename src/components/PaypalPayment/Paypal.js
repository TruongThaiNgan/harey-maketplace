/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component } from 'react';
import { IbanElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useCallback, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { shallowEqual } from 'react-redux';
import { loadScript } from "@paypal/paypal-js";

// import axios from '@Service/axios';
// import Modal from '@Component/Modal';
// import { useAppDispatch, useAppSelector } from '@Store/hooks';
// import { emptyCart, getCartList } from '@Slice/cartSlice';
// import { calculateTotal } from '@Util/convert';


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
class IbanPayment extends Component{
    
  abc = async(id)=>{
    loadScript({ "client-id": "AaGbGzEjDCfCBAMGETN670ViBvc9E4M3sPteYuONSn4p8Cm-4k41pJzjobqNz_joOSjsqD3N6Cmuc5a5" })
    .then((paypal) => {
        paypal
            .Buttons()
            .render(`#${id}`)
            .catch((error) => {
                console.error("failed to render the PayPal Buttons", error);
            });
    })
    .catch((error) => {
        console.error("failed to load the PayPal JS SDK script", error);
    });
  }


  render(){
    this.abc("buttonPaypal")
    return (
        <div className={classes.IbanPaymentContainer}>
          <div className={classes.card} id="buttonPaypal" />
          <button type="button" className={classes.button}>
            Pay
          </button>
          {/* <Modal
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
          </Modal> */}
        </div>
      );
  }
};

export default IbanPayment;
