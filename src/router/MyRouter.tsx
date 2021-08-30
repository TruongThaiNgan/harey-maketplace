import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from '@Component/PrivateRoute/PrivateRoute';
import Login from '@Page/Login';
import Shop from '@Page/Shop/Shop';
import Home from '@Page/Home/Home';
import DropBox from '@Component/DropBox';
import ShopMenu from '@Component/ShopMenu';
import ElementsMenu from '@Component/ElementsMenu';
import About from '@Page/About';

interface routerProps {}

const routeList = [
  {
    path: '/shop',
    exact: false,
    component: <Shop />,
  },
  {
    path: '/login',
    exact: false,
    component: <Login />,
  },
  {
    path: '/about',
    exact: false,
    component: <About />,
  },
  {
    path: '/contact',
    exact: false,
    component: <div>Contact us</div>,
  },
  {
    path: '/comming',
    exact: false,
    component: <div>Comming Soon</div>,
  },
  {
    path: '/pages',
    exact: false,
    component: <div>Pages</div>,
  },
  {
    path: '/element',
    exact: false,
    component: <div>Element</div>,
  },
  {
    path: '/',
    exact: true,
    component: <Home />,
  },
  {
    path: '*',
    exact: false,
    component: <div>404</div>,
  },
];
const privateRouteList = [
  {
    path: '/secrect',
    exact: false,
    component: <div>secrect</div>,
  },
  {
    path: '/account',
    exact: false,
    component: <div>account</div>,
  },
  {
    path: '/bank',
    exact: false,
    component: <div>bank</div>,
  },
];
const MyRouter: React.FC<routerProps> = () => (
  <Switch>
    {privateRouteList.map(({ path, component, exact }) => (
      <PrivateRoute key={path} path={path} exact={exact}>
        {component}
      </PrivateRoute>
    ))}
    {routeList.map(({ path, component, exact }) => (
      <Route key={path} path={path} exact={exact}>
        {component}
      </Route>
    ))}
  </Switch>
);

MyRouter.defaultProps = {};
export default MyRouter;
