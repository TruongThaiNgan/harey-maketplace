import React, { useState } from 'react';

import { LastChanceProductProps } from './interfaces';
import classes from './LastChanceProduct.module.scss';

const LastChanceProduct: React.FC<LastChanceProductProps> = ({ image1, image2, price, title, oldPrice }) => {
  // Hook states
  const [image, setImage] = useState<string>(image1);
  // Action handlers
  const mouseEnterHandle = (): void => setImage(image2);
  const mouseLeaveHandle = (): void => setImage(image1);

  return (
    <div className={classes.lastChanceProductContainer} onMouseEnter={mouseEnterHandle} onMouseLeave={mouseLeaveHandle}>
      <div className={classes.image}>
        <img src={image} alt={title} />
      </div>
      <div className={classes.content}>
        <div className={classes.title}>{title}</div>
        <div className={classes.price}>
          <span className={classes.oldPrice}>{oldPrice}</span>
          <span className={classes.newPrice}>{price}</span>
        </div>
      </div>
    </div>
  );
};

LastChanceProduct.defaultProps = {};
export default React.memo(LastChanceProduct);
