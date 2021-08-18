import React from 'react';
import { useTranslation } from 'react-i18next';

import Category from '@Component/Category/Category';
import PriceSlider from '@Component/PriceSlider/PriceSlider';

import classes from './SideBar.module.scss';

interface SideBarProps {
  template?: string;
}

const brandList = [
  { id: 1, title: 'Acer' },
  { id: 2, title: 'Apple' },
  { id: 3, title: 'Asus' },
  { id: 4, title: 'Beats' },
  { id: 5, title: 'Canon' },
  { id: 6, title: 'Logitech' },
  { id: 7, title: 'Microlab' },
  { id: 8, title: 'Samsung' },
  { id: 9, title: 'Sony' },
  { id: 10, title: 'Xiaomi' },
];

const colorList = [
  { id: 1, title: 'sideBar.black' },
  { id: 2, title: 'sideBar.blue' },
  { id: 3, title: 'sideBar.gray' },
  { id: 4, title: 'sideBar.green' },
  { id: 5, title: 'sideBar.red' },
  { id: 6, title: 'sideBar.yellow' },
];

const topRateList = [
  {
    id: 1,
    title: 'White Solo 2 Wireless',
    oldPrice: null,
    newPrice: '129.00',
    image:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/H4_CharcoalGrey_1000x1000-270x270.png',
  },
  {
    id: 2,
    title: 'Game Console Controller',
    oldPrice: '75.00',
    newPrice: '60.00',
    image: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/playstation-270x270.jpg',
  },
  {
    id: 3,
    title: 'Smartwatch Waterproof',
    oldPrice: null,
    newPrice: '725.00',
    image: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/blakc-watch-270x270.png',
  },
];

const SideBar: React.FC<SideBarProps> = ({ template }) => {
  const [t] = useTranslation();
  const temp = 0;
  return (
    <div className={classes.sideBar}>
      <Category />

      <div className={classes.brand}>
        <div>{t('sideBar.brands')}</div>
        <ul>
          {brandList.map((item) => (
            <li key={item.id}>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={classes.color}>
        <div>{t('sideBar.color')}</div>
        <ul>
          {colorList.map((item) => (
            <li key={item.id}>
              <div className={classes.check}>✓</div>
              <span>{t(item.title)}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={classes.price}>
        <PriceSlider />
      </div>

      <div className={classes.topRate}>
        <div className={classes.titleTopRate}>{t('sideBar.topRateProducts')}</div>
        {topRateList.map((item) => (
          <div className={classes.product} key={item.id}>
            <div className={classes.info}>
              <span className={classes.title}>{item.title}</span>
              <span className={classes.money}>{item.newPrice}</span>
            </div>

            <div className={classes.imgProduct}>
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

SideBar.defaultProps = {};
export default SideBar;
