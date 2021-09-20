import React, { useState } from 'react';
import classNames from 'classnames';

import Product from '@Component/Product';

import classes from './HotDeal.module.scss';
import { HotDealProps } from './interfaces';
import { iconList } from './constants';

const HotDeal: React.FC<HotDealProps> = ({ hotDealList }) => {
  // Hook states
  const [index, setIndex] = useState<number>(1);

  return (
    <div className={classes.hotDealContainer}>
      <div className={classes.hotDealTitle}>
        <strong>Hot Deals</strong>
      </div>

      <div className={classes.hotDealContent}>
        <div className={classes.hotDealNav}>
          {iconList.map(({ title, icon, id }) => (
            <button
              type="button"
              key={title}
              className={classNames(classes.iconNav, id === index ? classes.active : undefined)}
              onClick={() => setIndex(id)}
            >
              <span>{title}</span>
              {icon}
            </button>
          ))}
        </div>

        <div className={classes.listProduct}>
          {hotDealList?.map(({ id, ...rest }) => (
            <div className={classes.productItem} key={id}>
              <Product id={id} {...rest} row />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
HotDeal.defaultProps = {};
export default HotDeal;
