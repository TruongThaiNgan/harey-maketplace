import classNames from 'classnames';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { SearchItemProps } from './interfaces';
import classes from './SearchItem.module.scss';

const SearchItem: React.FC<SearchItemProps> = ({ categories, image1, title }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const onEnter = (): void => {
    setIsHover(true);
  };
  const onLeave = (): void => {
    setIsHover(false);
  };
  return (
    <div className={classNames(classes.searchItemContainer)} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <NavLink to={`/product/${title.toLowerCase().replace(/ /g, '-')}`} className={classes.link}>
        <div className={classes.left}>
          <img src={image1} alt={title} className={classes.image} />
        </div>
        <div className={classNames(classes.right, isHover && classes.background)}>
          <span className={classes.title}>{title}</span>
          <span className={classes.categories}>{categories.toLowerCase()}</span>
        </div>
      </NavLink>
    </div>
  );
};

SearchItem.defaultProps = {};
export default SearchItem;
