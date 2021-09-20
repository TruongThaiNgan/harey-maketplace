import * as Yup from 'yup';

import { BillForm, CheckoutInput } from './interfaces';

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('first name is required'),
  lastName: Yup.string().required('last name is required'),
  streetAddress: Yup.string().required('street address is required'),
  phone: Yup.string()
    .required('phone number is required')
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, 'phone number invalid'),
  city: Yup.string().required('town city is required'),
  email: Yup.string().required('email is required').email('email invalid'),
});

export const initialValues: BillForm = {
  firstName: '',
  lastName: '',
  companyName: '',
  country: 'VN',
  streetAddress: '',
  postCode: '',
  city: '',
  phone: '',
  email: '',
};
export const listInput: CheckoutInput[] = [
  {
    title: 'first name',
    required: true,
    name: 'firstName',
  },
  {
    title: 'last name',
    required: true,
    name: 'lastName',
  },
  {
    title: 'company name(optional)',
    required: false,
    name: 'companyName',
  },
  {
    title: 'country',
    required: true,
    name: 'country',
  },
  {
    title: 'street address',
    required: true,
    name: 'streetAddress',
  },
  {
    title: 'postcode/zip (optional)',
    required: false,
    name: 'postCode',
  },
  {
    title: 'town/city',
    required: true,
    name: 'city',
  },
  {
    title: 'phone',
    required: true,
    name: 'phone',
  },
  {
    title: 'email address',
    required: true,
    name: 'email',
  },
];
