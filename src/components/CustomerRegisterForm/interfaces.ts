export interface CustomerRegisterInput {
  title: string;
  type: 'text' | 'password';
  name: 'email' | 'password' | 'confirmPassword';
}
