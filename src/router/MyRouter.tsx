import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

import PrivateRoute from '@Component/PrivateRoute';
import withGetData from '@Hoc/withGetData';
import ResetPassword from '@Component/ResetPassword';

const Login = React.lazy(() => import('@Page/Login'));
const About = React.lazy(() => import('@Page/About'));
const Cart = React.lazy(() => import('@Component/Cart'));
const ProductPage = React.lazy(() => import('@Page/ProductPage'));
const Checkout = React.lazy(() => import('@Component/Checkout'));
const SendEmailReset = React.lazy(() => import('@Component/SendEmailReset'));
const Home = React.lazy(() => import('@Page/Home'));
const MyAccount = React.lazy(() => import('@Component/MyAccount'));

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
    exact: true,
    component: withGetData('product'),
  },
  {
    path: '/product-category/accessories',
    exact: true,
    component: withGetData('accessories'),
  },
  {
    path: '/product-category/computers',
    exact: true,
    component: withGetData('computers'),
  },
  {
    path: '/product-category/cameras-photos',
    exact: true,
    component: withGetData('camerasPhotos'),
  },
  {
    path: '/product-category/console-games',
    exact: true,
    component: withGetData('consoleGame'),
  },
  {
    path: '/product-category/gadgets',
    exact: true,
    component: withGetData('gadgets'),
  },
  {
    path: '/product-category/mobiles-tablets',
    exact: true,
    component: withGetData('mobilesTablets'),
  },
  {
    path: '/product-category/tools-storage',
    exact: true,
    component: withGetData('toolsStorage'),
  },
  {
    path: '/product-category/tvs-audio',
    exact: true,
    component: withGetData('tvAudio'),
  },
  {
    path: '/product-category/gadgets/watches',
    exact: true,
    component: withGetData('watches'),
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
