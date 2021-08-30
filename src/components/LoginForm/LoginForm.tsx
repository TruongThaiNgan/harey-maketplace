import { useFormik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import Facebook from '@Component/Facebook';

import { LoginFormProps, LoginInput } from './interfaces';
import classes from './LoginForm.module.scss';

const loginInputList: LoginInput[] = [
  { title: 'login.name', type: 'text', name: 'email' },
  { title: 'login.password', type: 'password', name: 'password' },
];
const validationSchema = Yup.object().shape({
  email: Yup.string().required('loginForm.errors.userNameRequired'),
  password: Yup.string().required('loginForm.errors.passwordRequired'),
});
const initialValues = {
  email: '',
  password: '',
};
const LoginForm: React.FC<LoginFormProps> = () => {
  // Hook states
  const [t] = useTranslation();
  const { values, handleChange, errors, touched } = useFormik({
    initialValues,
    onSubmit: () => {
      console.log('sending');
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: true,
  });
  // Hook effects

  // Constants

  // Action handlers
  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
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

        <div className={classes.button}>
          <div>
            <button type="submit" className={classes.submit}>
              {t('login.login')}
            </button>
            <span>{t('login.lost')}</span>
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
