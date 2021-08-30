export interface RegisterFormProps {}
export interface RegisterInput {
  title: string;
  name: 'email' | 'firstName' | 'lastName' | 'shopName' | 'shopUrl' | 'phoneNumber' | 'password' | 'confirmPassword';
}
