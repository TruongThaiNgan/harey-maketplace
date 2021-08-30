import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { getAuth } from '@Slice/userSlice';
import { useAppSelector } from '@Store/hooks';

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const auth = useAppSelector(getAuth);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (rest.path === '/login' && auth) return <Redirect to={{ pathname: '/' }} />;
        const redirect = <Redirect to={{ pathname: '/login', state: { from: location } }} />;
        return auth ? children : redirect;
      }}
    />
  );
};

export default PrivateRoute;
