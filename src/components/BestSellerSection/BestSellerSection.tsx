import React from 'react';

import BestSeller from '@Component/BestSeller/BestSeller';

import { BestSellerSectionProps } from './interfaces';
import classes from './BestSellerSection.module.scss';

const BestSellerSection: React.FC<BestSellerSectionProps> = ({ bestSellerList }) => (
  // Hook states

  // Hook effects

  // Constants

  // Action handlers

  // Renderers

  <div className={classes.bestSellerSectionContainer}>
    <div className={classes.center}>
      <BestSeller bestSellerList={bestSellerList} />
    </div>
  </div>
);
BestSellerSection.defaultProps = {};
export default BestSellerSection;
