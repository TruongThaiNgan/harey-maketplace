import React from 'react';
import { useTranslation } from 'react-i18next';

import Category from '@Component/Category/Category';
import PriceSlider from '@Component/PriceSlider/PriceSlider';

import classes from './SideBar.module.scss';
import { brandList, colorList, topRateList } from './constants';

const SideBar: React.FC = () => {
  const [t] = useTranslation();
  return (
    <div className={classes.sideBar}>
      <Category />

      <div className={classes.brand}>
        <div className={classes.title}>{t('sideBar.brands')}</div>
        <ul>
          {brandList.map((item) => (
            <li key={item.id} className={classes.brandItem}>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={classes.color}>
        <div className={classes.title}>{t('sideBar.color')}</div>
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
        <div className={classes.title}>{t('sideBar.topRateProducts')}</div>
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
