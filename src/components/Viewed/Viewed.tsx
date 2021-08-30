import React from 'react';

import Product from '@Component/Product';

import { ViewedProps } from './interfaces';
import classes from './Viewed.module.scss';

const Viewed: React.FC<ViewedProps> = ({ viewedList }) => (
  // Hook states

  // Hook effects

  // Constants

  // Action handlers

  // Renderers

  <div className={classes.viewedContainer}>
    <div className={classes.viewedTitle}>Recently Viewed</div>
    <div className={classes.viewedList}>
      {viewedList.map(({ id, ...rest }) => (
        <div className={classes.viewedItem} key={id}>
          <Product {...rest} />
        </div>
      ))}
    </div>
  </div>
);
Viewed.defaultProps = {};
export default Viewed;
