import React from 'react';

import Product from '@Component/Product';
import Trending from '@Component/Trending';

import { TrendingSectionProps } from './interfaces';
import classes from './TrendingSection.module.scss';

const TrendingSection: React.FC<TrendingSectionProps> = ({ lastChanceList }) => (
  <div className={classes.trendingSectionContainer}>
    <div className={classes.center}>
      <div className={classes.trending}>
        <Trending />
      </div>

      <div className={classes.lastChance}>
        <div className={classes.lastChanceTitle}>
          <strong>Last</strong> chance to buy
        </div>

        <div className={classes.productList}>
          {lastChanceList?.map(({ id, ...rest }) => (
            <div className={classes.product} key={id}>
              <Product id={id} {...rest} row />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
TrendingSection.defaultProps = {};
export default React.memo(TrendingSection);
