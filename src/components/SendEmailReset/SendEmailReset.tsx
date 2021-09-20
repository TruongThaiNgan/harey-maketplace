import React, { useState } from 'react';

import axios from '@Service/axios';

import classes from './SendEmailReset.module.scss';

const SendEmailReset: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const sendEmail = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
    event.preventDefault();
    try {
      setMessage('is loading');
      const res = await axios.post('/auth/access-token', {
        email,
      });
      if (res.data.status !== 200) setMessage('fail');
      setMessage('suceess');
    } catch (error) {
      setMessage("can't send request");
      console.log(error);
    }
  };
  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };
  return (
    <div className={classes.resetPasswordContainer}>
      <label htmlFor="email">
        <span>Your email:</span>
        <input type="text" id="email" onChange={onChangeEmail} />
      </label>
      <button type="button" onClick={sendEmail} disabled={!email || !!message}>
        send
      </button>
      {message && <span>{message}</span>}
    </div>
  );
};

SendEmailReset.defaultProps = {};
export default SendEmailReset;
