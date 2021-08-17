import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React, { useState } from 'react';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShuffleOutlinedIcon from '@material-ui/icons/ShuffleOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

import classes from './Product.module.scss';

interface ProductProps {
  originImage: string;
  hoverImage: string;
  title: string;
  price: string;
  isSale?: boolean;
}

const listButton = [
  { id: 1, icon: <ShoppingCartOutlinedIcon />, toolTip: 'Add to cart' },
  { id: 2, icon: <FavoriteBorderOutlinedIcon />, toolTip: 'Add to wishlist' },
  { id: 3, icon: <ShuffleOutlinedIcon />, toolTip: 'Add to compare' },
  { id: 4, icon: <VisibilityOutlinedIcon />, toolTip: 'Quick view' },
];
const Product: React.FC<ProductProps> = ({ originImage, hoverImage, title, price, isSale }) => {
  const [image, setImage] = useState<string>(originImage);
  const [isShowListButton, setIsShowListButton] = useState<boolean>(false);
  const onMouseEnter = (): void => {
    setIsShowListButton(true);
    setImage(hoverImage);
  };
  const onMouseLeave = (): void => {
    setIsShowListButton(false);
    setImage(originImage);
  };
  return (
    <div className={classes.product} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <img src={image} alt="origin" />
      <div className={classes.title}>{title}</div>
      <div className={classes.price}>{price}</div>
      {isSale && <div className={classes.sale}>Sale!</div>}
      {isShowListButton && (
        <div className={classes.button}>
          {listButton.map((item) => (
            <button type="button" key={item.id} title={item.toolTip}>
              {item.icon}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

Product.defaultProps = { isSale: false };
export default Product;
