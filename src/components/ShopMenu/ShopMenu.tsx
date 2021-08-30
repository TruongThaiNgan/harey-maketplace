import React from 'react';

import TableMenu from '@Component/TableMenu';

import { ShopMenuProps } from './interfaces';
import classes from './ShopMenu.module.scss';
import { productsList, productTypesList, shopPagesList, woocommerceList } from './constansts';

const ShopMenu: React.FC<ShopMenuProps> = ({ style }) => {
  // Hook states

  // Hook effects

  // Constants

  // Action handlers

  // Renderers

  const temp = 0;
  return (
    <div className={classes.shopMenuContainer} style={style}>
      <div className={classes.block}>
        <TableMenu list={shopPagesList} />
        <TableMenu list={woocommerceList} />
      </div>
      <div className={classes.block}>
        <TableMenu list={productsList} />
        <TableMenu list={productTypesList} />
      </div>
      <div className={classes.product}>
        <div className={classes.image}>Image</div>
      </div>
    </div>
  );
};

ShopMenu.defaultProps = {};
export default ShopMenu;
