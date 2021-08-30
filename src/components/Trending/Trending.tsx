import React, { useState } from 'react';

import Product from '@Component/Product';
import TimerCountdown from '@Component/TimerCountdown';

import { TrendingProps } from './interfaces';
import classes from './Trending.module.scss';

const listNav = [
  { id: 1, title: 'Latest Products' },
  { id: 2, title: 'Mobile & Tablets' },
  { id: 3, title: 'Computers & Accessories' },
  { id: 4, title: 'Accesories' },
];

const Trending: React.FC<TrendingProps> = ({ trendingList }) => {
  // Hook states
  const [index, setIndex] = useState<number>(1);

  // Hook effects

  // Constants

  // Action handlers

  // Renderers
  return (
    <div className={classes.trendingContainer}>
      <div className={classes.trendingDeal}>
        <div className={classes.trendingTitle}>Trending deals</div>

        <div className={classes.nav}>
          {listNav.map(({ id, title }) => (
            <button
              type="button"
              key={title}
              className={id === index ? classes.active : undefined}
              onClick={() => setIndex(id)}
            >
              {title}
            </button>
          ))}
        </div>

        <div className={classes.productContainer}>
          {trendingList?.map(({ id, ...rest }) => (
            <div className={classes.productItem} key={id}>
              <Product {...rest} timeCountdown />
            </div>
          ))}
        </div>
      </div>

      <div className={classes.dealOfDay}>
        <div className={classes.dealTitle}>Deal of day</div>
        <div className={classes.countdown}>
          <TimerCountdown />
        </div>
        <div className={classes.dealProduct}>
          <img
            src="https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/iphone-xs-gols-1-599x599-410x530.png"
            alt="main"
          />
        </div>
        <div className={classes.price}>
          <div className={classes.title}>AA Smartphone XS</div>
          <div className={classes.oldPrice}>$1,100.00</div>
          <div className={classes.newPrice}>$1,059.00</div>
        </div>
      </div>
    </div>
  );
};
Trending.defaultProps = {};
export default Trending;
