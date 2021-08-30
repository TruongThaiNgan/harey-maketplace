import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import WatchOutlinedIcon from '@material-ui/icons/WatchOutlined';
import React, { useState } from 'react';

import Product from '@Component/Product';

import classes from './BestSeller.module.scss';
import { BestSellerProps } from './interfaces';

const listIcon = [
  { id: 1, icon: <EventNoteOutlinedIcon /> },
  { id: 2, icon: <TrendingUpOutlinedIcon /> },
  { id: 3, icon: <CameraAltOutlinedIcon /> },
  { id: 4, icon: <WatchOutlinedIcon /> },
  { id: 5, icon: <HeadsetOutlinedIcon /> },
];

const BestSeller: React.FC<BestSellerProps> = ({ bestSellerList }) => {
  // Hook states
  const [index, setIndex] = useState<number>(1);

  // Hook effects

  // Constants

  // Action handlers

  // Renderers

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
                <Product key={id} {...rest} row />
              </div>
            ))}
          </div>
          <div className={classes.bottom}>
            {bestSellerList?.slice(3).map(({ id, ...rest }) => (
              <div key={id}>
                <Product {...rest} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
BestSeller.defaultProps = {};
export default BestSeller;
