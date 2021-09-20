import React, { useState } from 'react';

import Product from '@Component/Product';

import classes from './BestSeller.module.scss';
import { BestSellerProps } from './interfaces';
import { listIcon } from './constants';

const BestSeller: React.FC<BestSellerProps> = ({ bestSellerList }) => {
  // Hook states
  const [index, setIndex] = useState<number>(1);
  return (
    <div className={classes.bestSellerContainer}>
      <div className={classes.bestSellerBar}>
        <div className={classes.bestSellerHeader}>Bestseller</div>

        <div className={classes.listIcon}>
          {listIcon.map(({ id, icon }) => (
            <button
              type="button"
              key={id}
              className={id === index ? classes.active : undefined}
              onClick={() => setIndex(id)}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>

      <div className={classes.seller}>
        <div className={classes.mainSeller}>{bestSellerList && <Product timeCountdown {...bestSellerList[0]} />}</div>
        <div className={classes.product}>
          <div className={classes.top}>
            {bestSellerList?.slice(1, 3).map(({ id, ...rest }) => (
              <div key={id}>
                <Product key={id} id={id} {...rest} row />
              </div>
            ))}
          </div>
          <div className={classes.bottom}>
            {bestSellerList?.slice(3).map(({ id, ...rest }) => (
              <div key={id}>
                <Product id={id} {...rest} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
BestSeller.defaultProps = {};
export default React.memo(BestSeller);
