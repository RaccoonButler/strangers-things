export const logIn = (token) => {
  sessionStorage.setItem('token', token);
};

export const logOut = () => {
  sessionStorage.removeItem('token');
};

export const isLoggedIn = () => {
  const token = sessionStorage.getItem('token');
  return !!token;
};

export const makeHeaders = () => {
  const token = sessionStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
};
