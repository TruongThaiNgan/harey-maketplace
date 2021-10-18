import React from 'react';

import Banner from '@Component/Banner';
import SideBar from '@Component/SideBar';
import ToolBar from '@Component/ToolBar';

import classes from './ShopWrapper.module.scss';

interface ShopWrapperProps {
  limit: number;
  sort: string;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

const ShopWrapper: React.FC<ShopWrapperProps> = ({ children, limit, setLimit, setSort, sort }) => (
  <div className={classes.shopContainer}>
    <div className={classes.sideBar}>
      <SideBar />
    </div>
    <div className={classes.displayBar}>
      <Banner />
      <div className={classes.toolBar} />
      <ToolBar onChangeLimit={setLimit} limit={limit} onChangeSort={setSort} sort={sort} />
      {children}
    </div>
  </div>
);
ShopWrapper.defaultProps = {};
export default ShopWrapper;
