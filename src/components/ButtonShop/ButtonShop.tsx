/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import classNames from 'classnames';

import { ButtonShopProps } from './interfaces';
import classes from './ButtonShop.module.scss';

const ButtonShop: React.FC<ButtonShopProps> = ({ text, style, className }) => (
  <div className={classes.buttonShopContainer}>
    <button type="button" style={style} className={classNames(classes.button, className)}>
      {text}
    </button>
  </div>
);
ButtonShop.defaultProps = {
  text: 'Shop Now',
};
export default React.memo(ButtonShop);
