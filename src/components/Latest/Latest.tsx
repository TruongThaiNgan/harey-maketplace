import React, { useRef, useState } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import Product from '@Component/Product';

import { LatestProps } from './interfaces';
import classes from './Latest.module.scss';

const Latest: React.FC<LatestProps> = ({ latestList }) => {
  // Hook states
  const ref = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState<number>(0);

  // Action handlers
  const clickHandle = (direction: 'left' | 'right'): void => {
    // const { width } = ref.current!.getBoundingClientRect();
    const width = 3000;
    if (direction === 'left') {
      ref.current!.style.transform = `translateX(${(-width / 12) * (index - 1)}px)`;
      setIndex((preIndex) => preIndex - 1);
    }
    if (direction === 'right') {
      ref.current!.style.transform = `translateX(${(-width / 12) * (index + 1)}px)`;
      setIndex((preIndex) => preIndex + 1);
    }
  };

  return (
    <div className={classes.latestContainer}>
      <div className={classes.latestTitle}>
        <span>
          <strong>Latest</strong> Products
        </span>
        <div className={classes.buttonControl}>
          <button type="button" onClick={() => clickHandle('left')} disabled={index === 0}>
            <ArrowBackIosIcon />
          </button>
          <button type="button" onClick={() => clickHandle('right')} disabled={index === 6}>
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
      <div className={classes.productLatestList} ref={ref}>
        {latestList?.map(({ id, ...rest }) => (
          <div className={classes.productItem} key={id}>
            <Product id={id} {...rest} />
          </div>
        ))}
      </div>
    </div>
  );
};

Latest.defaultProps = {};
export default Latest;
