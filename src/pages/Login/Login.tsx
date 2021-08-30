import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';

import CustomerRegisterForm from '@Component/CustomerRegisterForm';
import LoginForm from '@Component/LoginForm';
import VendorRegisterForm from '@Component/VendorRegisterForm';
import { getAuth } from '@Slice/userSlice';
import { useAppSelector } from '@Store/hooks';

import { LocationState } from './interfaces';
import classes from './Login.module.scss';

const listRegister = [
  {
    name: 'customer',
    check: false,
  },
  {
    name: 'vendor',
    check: true,
  },
];

const Login: React.FC = () => {
  const [t] = useTranslation();
  const [isVendor, setIsVendor] = useState<boolean>(false);
  const auth = useAppSelector(getAuth);
  const history = useHistory();
  const location = useLocation<LocationState>();
  const { from } = location.state || { from: { pathname: '/' } };

  // Hook effects

  useEffect(() => {
    if (auth === true) history.replace(from);
  }, [auth, from, history]);

  return (
    <div className={classes.loginContainer}>
      <div className={classes.block}>
        <div className={classes.form}>
          <h1>{t('login.loginTitle')}</h1>
          <LoginForm />
        </div>

        <div className={classes.form}>
          <h1>{t('login.registerTitle')}</h1>
          {isVendor ? <VendorRegisterForm /> : <CustomerRegisterForm />}
          <div className={classes.radioGroup}>
            {listRegister.map(({ name, check }) => (
              <label htmlFor={name} key={name}>
                <input
                  type="radio"
                  name={name}
                  checked={isVendor === check}
                  onChange={() => setIsVendor((preState) => !preState)}
                />
                I am a {name}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Login.defaultProps = {};
export default Login;
