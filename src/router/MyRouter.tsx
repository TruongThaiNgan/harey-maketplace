import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from '@Component/PrivateRoute/PrivateRoute';
import withGetData from '@Hoc/withGetData';
import About from '@Page/About';
import Home from '@Page/Home/Home';
import Login from '@Page/Login';
import ProductPage from '@Page/ProductPage/ProductPage';
import {
  fetchPageAccessories,
  fetchPageProduct,
  getNumberAccessories,
  getNumberProduct,
  getPageAccessoriesData,
  getPageProductData,
} from '@Slice/pageSlice';

const routeList = [
  {
    path: '/shop',
    exact: true,
    component: withGetData(fetchPageProduct, getPageProductData, getNumberProduct),
  },
  {
    path: '/product-category/accessories',
    exact: true,
    component: withGetData(fetchPageAccessories, getPageAccessoriesData, getNumberAccessories),
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
    path: '/cart',
    exact: false,
    component: <div>cart</div>,
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
    path: '/product/:name',
    exact: false,
    component: <ProductPage />,
  },
  {
    path: '/product-category/cameras-photos',
    exact: true,
    component: <div>cameras-photos</div>,
  },
  {
    path: '/product-category/computers',
    exact: true,
    component: <div>computers</div>,
  },
  {
    path: '/product-category/console-games',
    exact: true,
    component: <div>console-games</div>,
  },
  {
    path: '/product-category/gadgets',
    exact: true,
    component: <div>gadgets</div>,
  },
  {
    path: '/product-category/mobiles-tablets',
    exact: true,
    component: <div>mobiles-tablets</div>,
  },
  {
    path: '/product-category/tools-storage',
    exact: true,
    component: <div>tools-storage</div>,
  },
  {
    path: '/product-category/tvs-audio',
    exact: true,
    component: <div>tvs-audio</div>,
  },
  {
    path: '/product-category/gadgets/watches',
    exact: true,
    component: <div>watches</div>,
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
const MyRouter: React.FC = () => (
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
