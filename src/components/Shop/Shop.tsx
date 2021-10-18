import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import ShopWrapper from '@Component/ShopWrapper';

import ShopRouter from '../../router/ShopRouter';

import classes from './Shop.module.scss';

const Shop: React.FC = () => {
  const location = useLocation();
  const queries = queryString.parse(location.search);
  const [page, setPage] = useState<number>(+queries.page! || 1);
  const [limit, setLimit] = useState<number>(+queries.limit! || 5);
  console.log(limit);
  const [sort, setSort] = useState<string>('toolBar.default');
  return (
    <div className={classes.shopContainer}>
      <ShopWrapper limit={limit} sort={sort} setLimit={setLimit} setSort={setSort}>
        <ShopRouter limit={limit} page={page} setPage={setPage} sort={sort} />
      </ShopWrapper>
    </div>
  );
};

Shop.defaultProps = {};
export default Shop;
