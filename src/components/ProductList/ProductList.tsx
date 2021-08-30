import React from 'react';

import Product from '@Component/Product/Product';

import { ProductListProps } from './interfaces';
import classes from './ProductList.module.scss';

const ProductList: React.FC<ProductListProps> = ({ amountItemPerRow, list }) => (
  // Hook states

  // Hook effects

  // Constants

  // Action handlers

  // Renderers

  <div className={classes.productListContainer}>
    {list.map(({ id, ...rest }) => (
      <div className={classes.product} key={id} style={{ flexBasis: `${100 / amountItemPerRow!}%` }}>
        <Product {...rest} timeCountdown />
      </div>
    ))}
  </div>
);
ProductList.defaultProps = { amountItemPerRow: 4 };
export default ProductList;
