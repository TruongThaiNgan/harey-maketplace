import React from 'react';

import { ButtonShopProps } from './interfaces';
import classes from './ButtonShop.module.scss';

const ButtonShop: React.FC<ButtonShopProps> = ({ text }) => (
  // Hook states

  // Hook effects

  // Constants

  // Action handlers

  // Renderers

  <div className={classes.buttonShopContainer}>
    <button type="button">{text}</button>
  </div>
);
ButtonShop.defaultProps = {
  text: 'Shop Now',
};
export default ButtonShop;
