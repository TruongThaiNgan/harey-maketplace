import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import queryString from 'query-string';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

import { setToken } from '@Util/localStorageService';
import axios from '@Service/axios';

import classes from './ResetPassword.module.scss';

export const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required('login.error.passwordRequired')
    .min(8, 'login.error.minPassword')
    .max(15, 'login.error.maxPassword')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/, 'login.error.passwordInvalid'),
  confirmPassword: Yup.string()
    .required('login.error.confirmPasswordRequired')
    .oneOf([Yup.ref('password'), null], 'login.error.equalPassword'),
});
export const initialValues = {
  password: '',
  confirmPassword: '',
};

const ResetPassword: React.FC = () => {
  const location = useLocation();
  const [t] = useTranslation();
  const history = useHistory();
  const { token } = queryString.parse(location.search);
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues,
    onSubmit: async () => {
      const res = await axios.put('/auth/reset-password', { password: values.password });
      alert(res.data.message);
      history.push('/login');
    },
    validationSchema,
    validateOnChange: true,
  });

  useEffect(() => {
    if (token) setToken(token as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updatePassword = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    handleSubmit();
  };
  return (
    <div className={classes.resetPasswordContainer}>
      <label htmlFor="newPassword">
        <span>New password:</span>
        <input type="password" name="password" value={values.password} onChange={handleChange} />
        {errors.password && <span>{t(errors.password)}</span>}
      </label>
      <label htmlFor="confirmPassword">
        <span>Confirm password:</span>
        <input type="password" name="confirmPassword" value={values.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <span>{t(errors.confirmPassword)}</span>}
      </label>
      <button type="submit" onClick={updatePassword}>
        confirm
      </button>
    </div>
  );
};

ResetPassword.defaultProps = {};
export default ResetPassword;
