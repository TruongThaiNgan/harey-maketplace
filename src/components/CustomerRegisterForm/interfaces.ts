export interface LoginInput {
  title: string;
  type: 'text' | 'password';
  name: 'email' | 'password' | 'confirmPassword';
}
