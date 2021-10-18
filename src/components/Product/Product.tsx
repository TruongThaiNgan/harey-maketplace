import Snackbar from '@material-ui/core/Snackbar';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ShuffleOutlinedIcon from '@material-ui/icons/ShuffleOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { useAppDispatch } from '@Store/hooks';
import { addToCart } from '@Slice/cartSlice';
import TimerCountdown from '@Component/TimerCountdown';

import { ProductProps } from './interfaces';
import classes from './Product.module.scss';

const Product: React.FC<ProductProps> = ({ image1, image2, title, price, oldPrice, timeCountdown, row, id }) => {
  // Hook states
  const [t] = useTranslation();
  const [image, setImage] = useState<string>(image1);
  const [isShowListButton, setIsShowListButton] = useState<boolean>(false);
  const [isOpenSnackBar, setIsOpenSnackBar] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  // Action handlers
  const onMouseEnter = (): void => {
    setIsShowListButton(true);
    setImage(image2);
  };
  const onMouseLeave = (): void => {
    setIsShowListButton(false);
    setImage(image1);
  };

  const handleClick = (): void => {
    setIsOpenSnackBar(true);
  };

  const handleClose = useCallback(() => {
    setIsOpenSnackBar(false);
  }, []);

  // Renderers
  const listButton = [
    {
      id: 1,
      icon: <ShoppingCartOutlinedIcon />,
      toolTip: 'product.addToCart',
      onClick: () => {
        handleClick();
        dispatch(addToCart({ id }));
      },
    },
    { id: 2, icon: <FavoriteBorderOutlinedIcon />, toolTip: 'product.addToWishList' },
    { id: 3, icon: <ShuffleOutlinedIcon />, toolTip: 'product.addToCompare' },
    { id: 4, icon: <VisibilityOutlinedIcon />, toolTip: 'product.quickView' },
  ];

  return (
    <div className={classes.productContainer} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <NavLink to={`/product/${title.toLowerCase().replace(/ /g, '-')}`} className={row ? classes.row : classes.col}>
        {!row ? (
          <div className={classes.imageContainer}>
            <img src={image} alt="origin" className={classes.image} />
          </div>
        ) : (
          <img src={image} alt="origin" />
        )}

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
          {listButton.map(({ icon, toolTip, onClick, id: idButton }) => (
            <button type="button" key={idButton} title={t(toolTip)} onClick={onClick}>
              {icon}
            </button>
          ))}
        </div>
      )}

      <div className={classes.snackbar}>
        <Snackbar
          style={{ width: '10rem' }}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={isOpenSnackBar}
          onClose={handleClose}
          message="Added to cart"
          autoHideDuration={2000}
        />
      </div>
    </div>
  );
};

Product.defaultProps = { timeCountdown: false };
export default Product;
