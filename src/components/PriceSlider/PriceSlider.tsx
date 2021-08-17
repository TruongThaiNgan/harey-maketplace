import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

import classes from './PriceSlider.module.scss';

interface PriceSliderProps {
  template?: string;
}
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
const PriceSlider: React.FC<PriceSliderProps> = ({ template }) => {
  const [value, setValue] = useState<number[]>([59, 1499]);
  const handleChange = (event: React.ChangeEvent<unknown>, newValue: number | number[]): void => {
    setValue(newValue as number[]);
  };
  return (
    <div className={classes.priceSlider}>
      <div className={classes.title}>Price</div>
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
        <button type="button">FILTER</button>
        <span>
          Price: <strong>{`$${value[0]}`}</strong> — <strong>{`$${value[1]}`}</strong>
        </span>
      </div>
    </div>
  );
};

PriceSlider.defaultProps = {};
export default PriceSlider;
