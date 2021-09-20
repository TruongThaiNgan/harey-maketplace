import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import Product from '@Component/Product';
import TimerCountdown from '@Component/TimerCountdown';
import { fetchTrendingList } from '@Slice/pageSlice';
import { useAppDispatch, useAppSelector } from '@Store/hooks';
import { getPageProductStatus, getTrendingList } from '@Slice/selector';

import { TrendingProps } from './interfaces';
import classes from './Trending.module.scss';
import { listNav } from './constants';

const Trending: React.FC<TrendingProps> = () => {
  // Hook states
  const [index, setIndex] = useState<number>(1);
  const isLoading = useAppSelector(getPageProductStatus) === 'loading';
  const trendingList = useAppSelector(getTrendingList);
  const dispatch = useAppDispatch();

  // Hook effects
  useEffect(() => {
    dispatch(fetchTrendingList(listNav[index - 1].type));
  }, [dispatch, index]);
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
          {isLoading ? (
            <div className={classes.loading}>
              <CircularProgress />
            </div>
          ) : (
            trendingList?.map(({ id, ...rest }) => (
              <div className={classes.productItem} key={id}>
                <Product id={id} {...rest} timeCountdown />
              </div>
            ))
          )}
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
