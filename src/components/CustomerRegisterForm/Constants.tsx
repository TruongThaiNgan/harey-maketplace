import * as Yup from 'yup';

import { CustomerRegisterInput } from './interfaces';

export const loginInputList: CustomerRegisterInput[] = [
  { title: 'login.email', type: 'text', name: 'email' },
  { title: 'login.password', type: 'password', name: 'password' },
  { title: 'login.confirmPassword', type: 'password', name: 'confirmPassword' },
];
export const validationSchema = Yup.object().shape({
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
export const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
};
