export interface LoginInput {
  title: string;
  type: 'text' | 'password';
  name: 'email' | 'password';
}

export interface LocationState {
  from: {
    pathname: string;
  };
}
