import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { useAppSelector } from '@Store/hooks';
import { getAuth } from '@Slice/selector';

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  // Hook states
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
