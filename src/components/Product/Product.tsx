import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ShuffleOutlinedIcon from '@material-ui/icons/ShuffleOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import TimerCountdown from '@Component/TimerCountdown';

import { ProductProps } from './interfaces';
import classes from './Product.module.scss';

const listButton = [
  { id: 1, icon: <ShoppingCartOutlinedIcon />, toolTip: 'product.addToCart' },
  { id: 2, icon: <FavoriteBorderOutlinedIcon />, toolTip: 'product.addToWishList' },
  { id: 3, icon: <ShuffleOutlinedIcon />, toolTip: 'product.addToCompare' },
  { id: 4, icon: <VisibilityOutlinedIcon />, toolTip: 'product.quickView' },
];
const Product: React.FC<ProductProps> = ({ image1, image2, title, price, oldPrice, timeCountdown, row }) => {
  const [t] = useTranslation();
  const [image, setImage] = useState<string>(image1);
  const [isShowListButton, setIsShowListButton] = useState<boolean>(false);
  const onMouseEnter = (): void => {
    setIsShowListButton(true);
    setImage(image2);
  };
  const onMouseLeave = (): void => {
    setIsShowListButton(false);
    setImage(image1);
  };
  return (
    <div className={classes.productContainer} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <NavLink to={`/product/${title.toLowerCase().replace(/ /g, '-')}`} className={row ? classes.row : classes.col}>
        <img src={image} alt="origin" />

        {timeCountdown && (
          <div className={classes.timer}>
            <TimerCountdown />
          </div>
        )}

        <div className={classes.box}>
          <div className={classes.title}>{title}</div>
          <div className={classes.price}>
            <span>{oldPrice}</span>
            {price}
          </div>
        </div>
      </NavLink>
      {oldPrice && <div className={classes.sale}>{t('product.sale')}</div>}

      {isShowListButton && (
        <div className={classes.button}>
          {listButton.map((item) => (
            <button type="button" key={item.id} title={t(item.toolTip)}>
              {item.icon}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

Product.defaultProps = { timeCountdown: false };
export default Product;
