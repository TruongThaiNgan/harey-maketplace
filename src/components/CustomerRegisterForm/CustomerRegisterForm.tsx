import { useFormik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { postCustomer } from '@Service/customer';
import { updateAuth } from '@Slice/userSlice';
import { useAppDispatch } from '@Store/hooks';
import { setToken } from '@Util/localStorageService';

import classes from './CustomerRegisterForm.module.scss';
import { initialValues, loginInputList, validationSchema } from './Constants';

const LoginForm: React.FC = () => {
  // Hook states
  const [t] = useTranslation();
  const dispatch = useAppDispatch();
  const { values, handleChange, errors, touched, handleSubmit } = useFormik({
    initialValues,
    onSubmit: async () => {
      try {
        const res = await postCustomer({ email: values.email, password: values.password });
        setToken(res.data.accessToken);
        dispatch(updateAuth({ auth: true }));
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema,
    validateOnChange: false,
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

        <div className={classes.button}>
          <div>
            <button type="submit" className={classes.submit}>
              {t('login.register')}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

LoginForm.defaultProps = {};
export default LoginForm;
