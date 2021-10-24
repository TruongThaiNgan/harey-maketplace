import React, { useState } from 'react';

import CardPayment from '@Component/CardPayment';
import IbanPayment from '@Component/IbanPayment';
import LaterPayment from '@Component/LaterPayment';
import PaypalPayment from '@Component/PaypalPayment';

import { PaymentProps } from './interfaces';
import classes from './Payment.module.scss';

const listButton = [
  {
    id: 1,
    title: 'Card Payment',
  },
  {
    id: 2,
    title: 'Iban Payment',
  },
  {
    id: 3,
    title: 'Paypal',
  },
  {
    id: 4,
    title: 'Payment Later',
  },
];

const Payment: React.FC<PaymentProps> = ({ value, disabled }) => {
  const [index, setIndex] = useState<number>(1);
  return (
    <div className={classes.paymentContainer}>
      <div className={classes.nav}>
        {listButton.map(({ id, title }) => (
          <button
            key={id}
            type="button"
            onClick={() => {
              setIndex(id);
            }}
            className={index === id ? classes.active : undefined}
          >
            {title}
          </button>
        ))}
      </div>
      {index === 1 && <CardPayment value={value} disabled={disabled} />}
      {index === 2 && <IbanPayment value={value} disabled={disabled} />}
      {index === 3 && <PaypalPayment value={value} disabled={disabled} />}
      {/* {index === 3 && <PaypalPayment/>} */}
      {index === 4 && <LaterPayment />}
    </div>
  );
};

Payment.defaultProps = {};

export default Payment;
