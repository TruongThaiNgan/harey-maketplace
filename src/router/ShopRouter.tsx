import { CircularProgress } from '@material-ui/core';
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { TypePage } from '@Slice/interfaces';
import PageLoad from '@Component/PageLoad/PageLoad';

interface IRoute {
  path: string;
  exact: boolean;
  type: TypePage;
}

const routeList: IRoute[] = [
  {
    path: '/shop',
    exact: true,
    type: 'product',
  },
  {
    path: '/shop/accessories',
    exact: true,
    type: 'accessories',
  },
  {
    path: '/shop/computers',
    exact: true,
    type: 'computers',
  },
  {
    path: '/shop/cameras-photos',
    exact: true,
    type: 'camerasPhotos',
  },
  {
    path: '/shop/console-games',
    exact: true,
    type: 'consoleGame',
  },
  {
    path: '/shop/gadgets',
    exact: true,
    type: 'gadgets',
  },
  {
    path: '/shop/mobiles-tablets',
    exact: true,
    type: 'mobilesTablets',
  },
  {
    path: '/shop/tools-storage',
    exact: true,
    type: 'toolsStorage',
  },
  {
    path: '/shop/tvs-audio',
    exact: true,
    type: 'tvAudio',
  },
  {
    path: '/shop/gadgets/watches',
    exact: true,
    type: 'watches',
  },
];

export interface ShopRouterProps {
  limit: number;
  page: number;
  sort?: string;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const ShopRouter: React.FC<ShopRouterProps> = ({ ...rest }) => (
  <Suspense fallback={<CircularProgress />}>
    <Switch>
      {routeList.map(({ path, type, exact }) => (
        <Route key={path} path={path} exact={exact}>
          <PageLoad type={type} {...rest} />
        </Route>
      ))}
    </Switch>
  </Suspense>
);

export default ShopRouter;
