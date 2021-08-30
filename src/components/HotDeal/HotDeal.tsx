import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';
import SmartphoneOutlinedIcon from '@material-ui/icons/SmartphoneOutlined';
import SpeakerOutlinedIcon from '@material-ui/icons/SpeakerOutlined';
import WatchOutlinedIcon from '@material-ui/icons/WatchOutlined';
import React from 'react';

import ProductList from '@Component/ProductList';

import classes from './HotDeal.module.scss';
import { HotDealProps } from './interfaces';

const hotDealList = [
  { id: 1, name: 'Hot Deal 1' },
  { id: 2, name: 'Hot Deal 2' },
  { id: 3, name: 'Hot Deal 3' },
  { id: 4, name: 'Hot Deal 4' },
  { id: 5, name: 'Hot Deal 5' },
  { id: 6, name: 'Hot Deal 6' },
];

const iconList = [
  { title: 'Watches', icon: <WatchOutlinedIcon /> },
  { title: 'Speakers', icon: <SpeakerOutlinedIcon /> },
  { title: 'Computers', icon: <ComputerOutlinedIcon /> },
  { title: 'Smartphones', icon: <SmartphoneOutlinedIcon /> },
  { title: 'Cameras', icon: <CameraAltOutlinedIcon /> },
  { title: 'Headphone', icon: <HeadsetOutlinedIcon /> },
];
const HotDeal: React.FC<HotDealProps> = () => {
  // Hook states

  // Hook effects

  // Constants

  // Action handlers

  // Renderers

  const temp = 0;
  return (
    <div className={classes.hotDealContainer}>
      <div className={classes.hotDealTitle}>
        <strong>Hot Deals</strong>
      </div>

      <div className={classes.hotDealContent}>
        <div className={classes.hotDealNav}>
          {iconList.map(({ title, icon }) => (
            <div key={title}>
              {title}
              <button type="button">{icon}</button>
            </div>
          ))}
        </div>

        <div className={classes.listProduct}>
          <ProductList list={hotDealList} />
        </div>
      </div>
    </div>
  );
};

HotDeal.defaultProps = {};
export default HotDeal;
