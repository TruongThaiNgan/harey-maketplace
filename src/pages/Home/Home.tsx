import React, { useEffect } from 'react';
import { shallowEqual } from 'react-redux';

import BestSellerSection from '@Component/BestSellerSection';
import HotDeal from '@Component/HotDeal';
import Latest from '@Component/Latest';
import ReviewSection from '@Component/ReviewSection';
import TrendingSection from '@Component/TrendingSection';
import { fetchHomePage } from '@Slice/pageSlice';
import { useAppDispatch, useAppSelector } from '@Store/hooks';
import { getProductInHome } from '@Slice/selector';

import { donorList } from './constants';
import classes from './Home.module.scss';

const Home: React.FC = () => {
  // Hook states
  const dispatch = useAppDispatch();
  const { bestSellerList, hotDealList, lastChanceList, latestList } = useAppSelector(getProductInHome, shallowEqual);

  // Hook effects
  useEffect(() => {
    dispatch(fetchHomePage());
  }, [dispatch]);

  return (
    <div className={classes.homeContainer}>
      <ReviewSection />
      <TrendingSection lastChanceList={lastChanceList} />
      <BestSellerSection bestSellerList={bestSellerList} />

      <div className={classes.latestProduct}>
        <Latest latestList={latestList} />
      </div>

      <div className={classes.center}>
        <div className={classes.imageList}>
          <div className={classes.image}>
            <img
              src="https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/06/shutterstock_146498354-719x314.jpg"
              alt="img1"
            />
          </div>
          <div className={classes.image}>
            <img
              src="https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/06/shutterstock_14649835-1-719x314.jpg"
              alt="img2"
            />
          </div>
        </div>
      </div>

      <div className={classes.center}>
        <div className={classes.hotDeal}>
          <HotDeal hotDealList={hotDealList} />
        </div>
      </div>

      <div className={classes.center}>
        <div className={classes.donors}>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {donorList.map((image) => (
              <img src={image} alt="" style={{ flexBasis: '20%' }} key={image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Home.defaultProps = {};
export default Home;
