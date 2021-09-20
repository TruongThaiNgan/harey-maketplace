import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './PriceSlider.module.scss';

const valuetext = (value: number): string => `$${value}`;
const AirbnbSlider = withStyles({
  root: {
    color: 'rgba(89,91,212,1)',
    height: 3,
    padding: '13px 0',
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -13,
    '&:focus, &:hover, &$active': { boxShadow: '#ccc 0 2px 3px 1px' },
    '& .bar': {
      height: 6,
      width: 6,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
      borderRadius: '50%',
    },
  },
  active: {},
  track: { height: 3 },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
  },
})(Slider);
const AirbnbThumbComponent: React.FC = ({ ...res }) => (
  <span {...res}>
    <span className="bar" />
  </span>
);
const PriceSlider: React.FC = () => {
  // Hook states
  const [t] = useTranslation();
  const [value, setValue] = useState<number[]>([59, 1499]);
  // Action handlers
  const handleChange = useCallback((event: React.ChangeEvent<unknown>, newValue: number | number[]) => {
    setValue(newValue as number[]);
  }, []);

  return (
    <div className={classes.priceSlider}>
      <div className={classes.title}>{t('sideBar.price')}</div>
      <AirbnbSlider
        ThumbComponent={AirbnbThumbComponent}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={59}
        max={1499}
      />
      <div className={classes.price}>
        <button type="button">{t('sideBar.filter')}</button>
        <span>
          {t('sideBar.price')}: <strong>{`$${value[0]}`}</strong> — <strong>{`$${value[1]}`}</strong>
        </span>
      </div>
    </div>
  );
};

PriceSlider.defaultProps = {};
export default PriceSlider;
