import { useFormik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { RegisterFormProps, RegisterInput } from './interfaces';
import classes from './VendorRegisterForm.module.scss';

const registerInputList: RegisterInput[] = [
  {
    title: 'login.address',
    name: 'email',
  },
  {
    title: 'login.firstName',
    name: 'firstName',
  },
  {
    title: 'login.lastName',
    name: 'lastName',
  },
  {
    title: 'login.shopName',
    name: 'shopName',
  },
  {
    title: 'login.url',
    name: 'shopUrl',
  },
  {
    title: 'login.phone',
    name: 'phoneNumber',
  },
  {
    title: 'login.password',
    name: 'password',
  },
  {
    title: 'login.confirmPassword',
    name: 'confirmPassword',
  },
];

const initialValues = {
  email: '',
  firstName: '',
  lastName: '',
  shopName: '',
  shopUrl: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
};
const validationSchema = Yup.object().shape({
  email: Yup.string().required('login.error.emailRequired').email('login.error.emailInvalid'),
  firstName: Yup.string().required('login.error.firstNameRequired'),
  lastName: Yup.string().required('login.error.lastNameRequired'),
  shopName: Yup.string().required('login.error.shopNameRequired'),
  shopUrl: Yup.string()
    .required('login.error.shopUrlRequired')
    .matches(
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
      'login.error.urlInvalid',
    ),
  phoneNumber: Yup.string()
    .required('login.error.phoneRequired')
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, 'login.error.phoneInvalid'),
  password: Yup.string()
    .required('login.error.passwordRequired')
    .min(8, 'login.error.minPassword')
    .max(15, 'login.error.maxPassword')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/, 'login.error.passwordInvalid'),
  confirmPassword: Yup.string()
    .required('login.error.confirmPasswordRequired')
    .oneOf([Yup.ref('password'), null], 'login.error.equalPassword'),
});
const VendorRegisterForm: React.FC<RegisterFormProps> = () => {
  // Hook states
  const [t] = useTranslation();
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
    initialValues,
    onSubmit: () => {
      console.log('submit');
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
    handleSubmit();
  };

  // Renderers
  return (
    <div className={classes.registerFormContainer}>
      <form onSubmit={submitHandler} className={classes.form}>
        {registerInputList.map(({ title, name }) => (
          <React.Fragment key={title}>
            <label htmlFor="Name" className={classes.row}>
              <span>
                {t(title)} <span className={classes.asterisk}>*</span>
              </span>
              <input type="text" name={name} value={values[name]} onChange={handleChange} onBlur={handleBlur} />
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

VendorRegisterForm.defaultProps = {};
export default VendorRegisterForm;
