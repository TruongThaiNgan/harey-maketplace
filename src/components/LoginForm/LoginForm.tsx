import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Facebook from '@Component/Facebook';
import { postAuth } from '@Service/auth';
import { updateAuth } from '@Slice/userSlice';
import { useAppDispatch } from '@Store/hooks';
import { setToken } from '@Util/localStorageService';
import CustomLink from '@Component/CustomLink';

import { initialValues, loginInputList, validationSchema } from './constants';
import { LoginFormProps } from './interfaces';
import classes from './LoginForm.module.scss';

const LoginForm: React.FC<LoginFormProps> = () => {
  // Hook states
  const [t] = useTranslation();
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string>('');
  const { values, handleChange, errors, touched, handleSubmit } = useFormik({
    initialValues,
    onSubmit: () => {
      postAuth(values)
        .then((res) => {
          const { status, accessToken, message } = res.data;
          setToken(accessToken);
          if (status === '200' && message === 'Log in success') dispatch(updateAuth({ auth: true }));
          else setError('Email or password not correct');
        })
        .catch((err) => {
          setError('some thing wrong');
          console.log(err);
        });
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
  });

  // Action handlers
  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    handleSubmit();
  };

  // Renderers
  return (
    <div className={classes.loginFormContainer}>
      <form onSubmit={submitHandler}>
        {loginInputList.map(({ title, type, name }) => (
          <React.Fragment key={title}>
            <label htmlFor="Name" className={classes.row}>
              <span>
                {t(title)} <span className={classes.asterisk}>*</span>
              </span>
              <input type={type} name={name} value={values[name]} onChange={handleChange} />
            </label>
            {errors[name] && touched[name] && (
              <div className={classes.error}>
                <div>
                  <span>{t(errors[name] as string)}</span>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}

        <span>{error}</span>
        <div className={classes.button}>
          <div>
            <button type="submit" className={classes.submit}>
              {t('login.login')}
            </button>
            <span>
              <CustomLink to="/send-mail-reset">{t('login.lost')}</CustomLink>
            </span>
          </div>
        </div>
      </form>

      <div className={classes.error}>
        <div>
          <Facebook />
        </div>
      </div>
    </div>
  );
};

LoginForm.defaultProps = {};
export default LoginForm;
