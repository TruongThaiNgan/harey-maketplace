import * as Yup from 'yup';

import { RegisterInput } from './interfaces';

export const registerInputList: RegisterInput[] = [
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

export const initialValues = {
  email: '',
  firstName: '',
  lastName: '',
  shopName: '',
  shopUrl: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
};

export const validationSchema = Yup.object().shape({
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
