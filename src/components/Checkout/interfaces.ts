export interface CheckoutInput {
  title: string;
  name:
    | 'firstName'
    | 'lastName'
    | 'companyName'
    | 'country'
    | 'streetAddress'
    | 'postCode'
    | 'city'
    | 'phone'
    | 'email';
  required: boolean;
}

export type BillForm = {
  firstName: string;
  lastName: string;
  companyName: string;
  country: string;
  streetAddress: string;
  postCode: string;
  city: string;
  phone: string;
  email: string;
};
