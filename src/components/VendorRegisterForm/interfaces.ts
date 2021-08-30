export type RegisterFormProps = Record<string, never>;
export interface RegisterInput {
  title: string;
  name: 'email' | 'firstName' | 'lastName' | 'shopName' | 'shopUrl' | 'phoneNumber' | 'password' | 'confirmPassword';
}
