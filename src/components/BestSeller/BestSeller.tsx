import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import WatchOutlinedIcon from '@material-ui/icons/WatchOutlined';
import React from 'react';

import ProductList from '@Component/ProductList';

import classes from './BestSeller.module.scss';
import { BestSellerProps } from './interfaces';

const listIcon = [
  { id: 1, icon: <EventNoteOutlinedIcon /> },
  { id: 2, icon: <TrendingUpOutlinedIcon /> },
  { id: 3, icon: <CameraAltOutlinedIcon /> },
  { id: 4, icon: <WatchOutlinedIcon /> },
  { id: 5, icon: <HeadsetOutlinedIcon /> },
];

const bestSellerList1 = [
  { id: 1, name: 'best seller 1' },
  { id: 2, name: 'best seller 2' },
];
const bestSellerList2 = [
  { id: 1, name: 'best seller 3' },
  { id: 2, name: 'best seller 4' },
  { id: 3, name: 'best seller 5' },
  { id: 4, name: 'best seller 6' },
];

const BestSeller: React.FC<BestSellerProps> = () => {
  // Hook states

  // Hook effects

  // Constants

  // Action handlers

  // Renderers

  const temp = 0;
  return (
    <div className={classes.bestSellerContainer}>
      <div className={classes.bestSellerBar}>
        <div className={classes.bestSellerHeader}>Bestseller</div>

        <div className={classes.listIcon}>
          {listIcon.map(({ id, icon }) => (
            <button type="button" key={id}>
              {icon}
            </button>
          ))}
        </div>
      </div>

      <div className={classes.seller}>
        <div className={classes.mainSeller}>Main Product</div>
        <div className={classes.product}>
          <ProductList list={bestSellerList1} amountItemPerRow={2} />
          <ProductList list={bestSellerList2} />
        </div>
      </div>
    </div>
  );
};

BestSeller.defaultProps = {};
export default BestSeller;
