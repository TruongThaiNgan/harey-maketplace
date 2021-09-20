import * as Yup from 'yup';

import { LoginInput } from './interfaces';

export const loginInputList: LoginInput[] = [
  { title: 'login.name', type: 'text', name: 'email' },
  { title: 'login.password', type: 'password', name: 'password' },
];

export const validationSchema = Yup.object().shape({
  email: Yup.string().required('loginForm.errors.userNameRequired'),
  password: Yup.string().required('loginForm.errors.passwordRequired'),
});

export const initialValues = {
  email: '',
  password: '',
};
