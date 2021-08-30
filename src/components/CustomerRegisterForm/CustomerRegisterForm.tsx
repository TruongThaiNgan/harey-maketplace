import { useFormik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { useAppDispatch, useAppSelector } from '@Store/hooks';
import { getAuth } from '@Slice/userSlice';
import useCreateCustomerMutation from '@Mutation/useCreateCustomerMutation';

import classes from './CustomerRegisterForm.module.scss';
import { CustomerRegisterFormProps, LoginInput } from './interfaces';

const loginInputList: LoginInput[] = [
  { title: 'login.email', type: 'text', name: 'email' },
  { title: 'login.password', type: 'password', name: 'password' },
  { title: 'login.confirmPassword', type: 'password', name: 'confirmPassword' },
];
const validationSchema = Yup.object().shape({
  email: Yup.string().required('login.error.emailRequired').email('login.error.emailInvalid'),
  password: Yup.string()
    .required('login.error.passwordRequired')
    .min(8, 'login.error.minPassword')
    .max(15, 'login.error.maxPassword')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/, 'login.error.passwordInvalid'),
  confirmPassword: Yup.string()
    .required('login.error.confirmPasswordRequired')
    .oneOf([Yup.ref('password'), null], 'login.error.equalPassword'),
});
const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
};
const LoginForm: React.FC<CustomerRegisterFormProps> = () => {
  // Hook states
  const [t] = useTranslation();
  const { isLoading, mutate } = useCreateCustomerMutation({
    onSuccess: ({ data }) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
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
    mutate({ email: values.email, password: values.password });
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
