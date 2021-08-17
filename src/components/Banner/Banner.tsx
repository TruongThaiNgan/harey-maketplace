import React from 'react';

import classes from './Banner.module.scss';

interface BannerProps {
  template?: string;
}

const Banner: React.FC<BannerProps> = ({ template }) => {
  const temp = 0;
  return (
    <div className={classes.banner}>
      <div className={classes.text}>
        <div className={classes.title}>Looking for more?</div>
        <div className={classes.content}>
          <strong>Get $100</strong> Voucher for Laptops
        </div>
        <div className={classes.button}>
          <button type="button">SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

Banner.defaultProps = {};
export default Banner;
