import { CircularProgress } from '@material-ui/core';
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from '@Component/PrivateRoute';
import ResetPassword from '@Component/ResetPassword';
import Shop from '@Component/Shop';

const Login = React.lazy(() => import('@Page/Login'));
const About = React.lazy(() => import('@Page/About'));
const Cart = React.lazy(() => import('@Component/Cart'));
const ProductPage = React.lazy(() => import('@Page/ProductPage'));
const Checkout = React.lazy(() => import('@Component/Checkout'));
const SendEmailReset = React.lazy(() => import('@Component/SendEmailReset'));
const Home = React.lazy(() => import('@Page/Home'));
const MyAccount = React.lazy(() => import('@Component/MyAccount'));
const SearchPage = React.lazy(() => import('@Page/Search'));

const routeList = [
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
    path: '/cart',
    exact: false,
    component: <Cart />,
  },
  {
    path: '/contact',
    exact: false,
    component: <div>Contact us</div>,
  },
  {
    path: '/coming',
    exact: false,
    component: <div>Coming Soon</div>,
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
    path: '/wishlist',
    exact: false,
    component: <div>wishlist</div>,
  },
  {
    path: '/compare',
    exact: false,
    component: <div>compare</div>,
  },
  {
    path: '/product/:name',
    exact: false,
    component: <ProductPage />,
  },
  {
    path: '/shop',
    exact: false,
    component: <Shop />,
  },
  {
    path: '/search',
    exact: true,
    component: <SearchPage />,
  },
  {
    path: '/checkout',
    exact: true,
    component: <Checkout />,
  },
  {
    path: '/send-mail-reset',
    exact: true,
    component: <SendEmailReset />,
  },
  {
    path: '/reset-password',
    exact: true,
    component: <ResetPassword />,
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
    path: '/secret',
    exact: false,
    component: <div>secret</div>,
  },
  {
    path: '/my-account',
    exact: false,
    component: <MyAccount />,
  },
  {
    path: '/bank',
    exact: false,
    component: <div>bank</div>,
  },
];
const MyRouter: React.FC = () => (
  <Suspense fallback={<CircularProgress />}>
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
  </Suspense>
);

MyRouter.defaultProps = {};
export default MyRouter;
