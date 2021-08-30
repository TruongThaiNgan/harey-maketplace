import React from 'react';

import Banner from '@Component/Banner/Banner';
import BestSeller from '@Component/BestSeller';
import Category from '@Component/Category/Category';
import HotDeal from '@Component/HotDeal';
import ProductList from '@Component/ProductList';
import Trending from '@Component/Trending';

import classes from './Home.module.scss';

interface HomeProps {
  template?: string;
}
const lastChanceList = [
  { id: 1, name: 'Last Chance 1' },
  { id: 2, name: 'Last Chance 2' },
  { id: 3, name: 'Last Chance 3' },
  { id: 4, name: 'Last Chance 4' },
];
const latestList = [
  { id: 1, name: 'Latest 1' },
  { id: 2, name: 'Latest 2' },
  { id: 3, name: 'Latest 3' },
  { id: 4, name: 'Latest 4' },
  { id: 5, name: 'Latest 5' },
  { id: 6, name: 'Latest 6' },
];
const viewedList = [
  { id: 1, name: 'Viewed 1' },
  { id: 2, name: 'Viewed 2' },
  { id: 3, name: 'Viewed 3' },
  { id: 4, name: 'Viewed 4' },
  { id: 5, name: 'Viewed 5' },
  { id: 6, name: 'Viewed 6' },
];

const brandList = [
  { id: 1, name: 'MASTER STUDY' },
  { id: 2, name: 'homepress' },
  { id: 3, name: 'consulting' },
  { id: 4, name: 'motor' },
];
const Home: React.FC<HomeProps> = ({ template }) => {
  const temp = 0;
  return (
    <div className={classes.homeContainer}>
      <div className={classes.category}>
        <div className={classes.sideBar}>
          <Category />
        </div>

        <div className={classes.banner}>
          <Banner />
        </div>
      </div>

      <div className={classes.imageList}>
        <div className={classes.image}>Image1</div>
        <div className={classes.image}>Image2</div>
      </div>

      <div className={classes.trending}>
        <Trending />
      </div>

      <div className={classes.lastChance}>
        <div className={classes.lastChanceTitle}>
          <strong>Last</strong> chance to buy
        </div>
        <ProductList list={lastChanceList} />
      </div>

      <div className={classes.bestSeller}>
        <BestSeller />
      </div>

      <div className={classes.latestProduct}>
        <div className={classes.latestTitle}>
          <strong>Latest</strong> Products
        </div>
        <div className={classes.productLatestList}>
          <ProductList amountItemPerRow={6} list={latestList} />
        </div>
      </div>

      <div className={classes.imageList}>
        <div className={classes.image}>Image 1</div>
        <div className={classes.image}>Image 2</div>
      </div>

      <div className={classes.hotDeal}>
        <HotDeal />
      </div>

      <div className={classes.viewed}>
        <div className={classes.viewedTitle}>Recently Viewed</div>
        <div className={classes.listProduct}>
          <ProductList list={viewedList} amountItemPerRow={8} />
        </div>
      </div>

      <div className={classes.donors}>
        <div className={classes.listProduct}>
          <ProductList list={brandList} />
        </div>
      </div>
    </div>
  );
};

Home.defaultProps = {};
export default Home;
