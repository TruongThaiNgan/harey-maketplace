import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';
import SmartphoneOutlinedIcon from '@material-ui/icons/SmartphoneOutlined';
import SpeakerOutlinedIcon from '@material-ui/icons/SpeakerOutlined';
import WatchOutlinedIcon from '@material-ui/icons/WatchOutlined';
import React, { useState } from 'react';
import classNames from 'classnames';

import Product from '@Component/Product';

import classes from './HotDeal.module.scss';
import { HotDealProps } from './interfaces';

const iconList = [
  { id: 1, title: 'Watches', icon: <WatchOutlinedIcon /> },
  { id: 2, title: 'Speakers', icon: <SpeakerOutlinedIcon /> },
  { id: 3, title: 'Computers', icon: <ComputerOutlinedIcon /> },
  { id: 4, title: 'Smartphones', icon: <SmartphoneOutlinedIcon /> },
  { id: 5, title: 'Cameras', icon: <CameraAltOutlinedIcon /> },
  { id: 6, title: 'Headphone', icon: <HeadsetOutlinedIcon /> },
];
const HotDeal: React.FC<HotDealProps> = ({ hotDealList }) => {
  // Hook states
  const [index, setIndex] = useState<number>(1);

  // Hook effects

  // Constants

  // Action handlers

  // Renderers

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
              <Product {...rest} row />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
HotDeal.defaultProps = {};
export default HotDeal;
