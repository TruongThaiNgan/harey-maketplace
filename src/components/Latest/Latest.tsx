import React, { useRef, useState } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import Product from '@Component/Product';

import { LatestProps } from './interfaces';
import classes from './Latest.module.scss';

const latestList = [
  {
    id: 2,
    title: 'AA Laptop Air',
    oldPrice: '$899.00',
    price: '$849.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/06/mcbook-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/06/macbook-1-799x799-270x270.png',
  },
  {
    id: 4,
    title: 'AA Smartphone XS',
    oldPrice: '$1,100.00',
    price: '$1,059.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/iphone-xs-gols-1-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/iphone-xs-silver-1-599x599-270x270.png',
  },
  {
    id: 15,
    title: 'AD QLed TV UltraHD Curved',
    price: '$2,199.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/%D0%91%D0%B5%D0%B7-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1-270x270.jpg',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/flower-curved-799x799-270x270.png',
  },
  {
    id: 22,
    title: 'Amazfit SmartWatch',
    oldPrice: '$174.00',
    price: '$144.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/amazfit_equator_rose_gold_closed_loop-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/amazfit_moonbeam_white_open_clasp-999x999-270x270.png',
  },
  {
    id: 49,
    title: 'Game Console Controller',
    oldPrice: '$75.00',
    price: '$60.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/playstation-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/joystick-599x599-270x270.png',
  },
  {
    id: 98,
    title: 'White Solo 2 Wireless',
    price: '$129.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/H4_CharcoalGrey_1000x1000-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/H4_1000x1000_vapour-999x999-270x270.png',
  },
  {
    id: 86,
    title: 'Smartphone Note 7',
    price: '$199.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/mi7-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/honorr-599x599-270x270.jpg',
  },
  {
    id: 23,
    title: 'Apple Watch',
    oldPrice: '$399.00',
    price: '$300.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/white-watch-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/amazfit_bip_smartwatch_white_cloud_front-999x999-270x270.png',
  },
  {
    id: 92,
    title: 'Smartwatch Fronier',
    oldPrice: '$239.00',
    price: '$200.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/galaxy-watch-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/galaxy-fi-799x799-270x270.jpg',
  },
  {
    id: 94,
    title: 'Smartwatch sport edition',
    price: '$129.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/sport-watcxh-270x270.jpg',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/amazing-galaxy-watch-799x799-270x270.jpg',
  },
  {
    id: 91,
    title: 'Smartwatch classic edition',
    oldPrice: '$215.00',
    price: '$189.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/SAM-WATCH-270x270.jpg',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/sport-watcxh-799x799-270x270.jpg',
  },
  {
    id: 89,
    title: 'Smartwatch 4 series',
    oldPrice: '$199.00',
    price: '$149.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/iwatch-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/frontier-799x799-270x270.jpg',
  },
];
const Latest: React.FC<LatestProps> = () => {
  // Hook states
  const ref = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState<number>(0);

  // Hook effects

  // Constants

  // Action handlers
  const clickHandle = (direction: 'left' | 'right'): void => {
    const { width } = ref.current!.getBoundingClientRect();
    if (direction === 'left') {
      ref.current!.style.transform = `translateX(${(-width / 12) * (index - 1)}px)`;
      setIndex((preIndex) => preIndex - 1);
    }
    if (direction === 'right') {
      ref.current!.style.transform = `translateX(${(-width / 12) * (index + 1)}px)`;
      setIndex((preIndex) => preIndex + 1);
    }
  };

  // Renderers

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
        {latestList.map(({ id, ...rest }) => (
          <div className={classes.productItem} key={id}>
            <Product {...rest} />
          </div>
        ))}
      </div>
    </div>
  );
};

Latest.defaultProps = {};
export default Latest;
