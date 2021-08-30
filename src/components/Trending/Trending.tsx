import React from 'react';

import ProductList from '@Component/ProductList';

import { TrendingProps } from './interfaces';
import classes from './Trending.module.scss';

const listNav = [
  { title: 'Latest Products' },
  { title: 'Mobile & Tablets' },
  { title: 'Computers & Accessories' },
  { title: 'Accesories' },
];

const productList = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
  { id: 4, name: 'Product 4' },
  { id: 5, name: 'Product 5' },
  { id: 6, name: 'Product 6' },
];
const Trending: React.FC<TrendingProps> = () => {
  // Hook states

  // Hook effects

  // Constants

  // Action handlers

  // Renderers
  const temp = 0;
  return (
    <div className={classes.trendingContainer}>
      <div className={classes.trendingDeal}>
        <div className={classes.trendingTitle}>Trending deals</div>

        <div className={classes.nav}>
          {listNav.map(({ title }) => (
            <div key={title}>{title}</div>
          ))}
        </div>
        <ProductList list={productList} />
        {/* <div className={classes.listProduct}>
          <div className={classes.product}>Product</div>
          <div className={classes.product}>Product</div>
          <div className={classes.product}>Product</div>
          <div className={classes.product}>Product</div>
          <div className={classes.product}>Product</div>
        </div> */}
      </div>

      <div className={classes.dealOfDay}>
        <div className={classes.dealTitle}>Deal of the Day</div>
        <div className={classes.imageProduct}>Image</div>
        <div className={classes.dealSubTitle}>Sony</div>
        <div className={classes.dealProductName}>White Solo 5 Wireless</div>
        <div className={classes.price}>$129.00</div>
      </div>
    </div>
  );
};

Trending.defaultProps = {};
export default Trending;
