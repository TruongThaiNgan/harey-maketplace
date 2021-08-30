export type LoginFormProps = Record<string, never>;
export interface LoginInput {
  title: string;
  type: 'text' | 'password';
  name: 'email' | 'password';
}
