export const setToken = (accessToken: string): void => {
  localStorage.setItem('accessToken', accessToken);
};
export const getAccessToken = (): string => localStorage.getItem('accessToken') || '';
