import React from 'react';

import Product from '@Component/Product';
import Trending from '@Component/Trending';

import { TrendingSectionProps } from './interfaces';
import classes from './TrendingSection.module.scss';

const TrendingSection: React.FC<TrendingSectionProps> = ({ lastChanceList, trendingList }) => (
  // Hook states

  // Hook effects

  // Constants

  // Action handlers

  // Renderers

  <div className={classes.trendingSectionContainer}>
    <div className={classes.center}>
      <div className={classes.trending}>
        <Trending trendingList={trendingList} />
      </div>

      <div className={classes.lastChance}>
        <div className={classes.lastChanceTitle}>
          <strong>Last</strong> chance to buy
        </div>

        <div className={classes.productList}>
          {lastChanceList?.map(({ id, ...rest }) => (
            <div className={classes.product} key={id}>
              <Product {...rest} row />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
TrendingSection.defaultProps = {};
export default TrendingSection;
