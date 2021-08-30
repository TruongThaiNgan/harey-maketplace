import React, { useEffect } from 'react';
import { shallowEqual } from 'react-redux';

import BestSellerSection from '@Component/BestSellerSection';
import HotDeal from '@Component/HotDeal';
import Latest from '@Component/Latest';
import ReviewSection from '@Component/ReviewSection';
import TrendingSection from '@Component/TrendingSection';
import Viewed from '@Component/Viewed';
import { fetchHomePage, getProductInHome } from '@Slice/pageSlice';
import { useAppDispatch, useAppSelector } from '@Store/hooks';

import { donorList } from './constants';
import classes from './Home.module.scss';

const viewedList = [
  {
    id: 22,
    title: 'Amazfit SmartWatch',
    oldPrice: '$174.00',
    price: '$144.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/amazfit_equator_rose_gold_closed_loop-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/amazfit_moonbeam_white_open_clasp-999x999-270x270.png',
  },
  {
    id: 23,
    title: 'Apple Watch',
    oldPrice: '$399.00',
    price: '$300.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/white-watch-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/amazfit_bip_smartwatch_white_cloud_front-999x999-270x270.png',
  },
  {
    id: 92,
    title: 'Smartwatch Fronier',
    oldPrice: '$239.00',
    price: '$200.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/galaxy-watch-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/galaxy-fi-799x799-270x270.jpg',
  },
  {
    id: 91,
    title: 'Smartwatch classic edition',
    oldPrice: '$215.00',
    price: '$189.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/SAM-WATCH-270x270.jpg',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/sport-watcxh-799x799-270x270.jpg',
  },
  {
    id: 89,
    title: 'Smartwatch 4 series',
    oldPrice: '$199.00',
    price: '$149.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/iwatch-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/frontier-799x799-270x270.jpg',
  },
  {
    id: 88,
    title: 'Smartwatch 2.0 LTE Wifi',
    oldPrice: '$149.00',
    price: '$129.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/watch-red-2-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/frontred-watch-799x799-270x270.png',
  },
];
const Home: React.FC = () => {
  const dispath = useAppDispatch();
  const { bestSellerList, hotDealList, lastChanceList, trendingList } = useAppSelector(getProductInHome, shallowEqual);

  useEffect(() => {
    dispath(fetchHomePage());
  }, [dispath]);
  return (
    <div className={classes.homeContainer}>
      <ReviewSection />
      <TrendingSection lastChanceList={lastChanceList} trendingList={trendingList} />
      <BestSellerSection bestSellerList={bestSellerList} />

      <div className={classes.latestProduct}>
        <Latest />
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
        <div className={classes.viewed}>
          <Viewed viewedList={viewedList} />
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
