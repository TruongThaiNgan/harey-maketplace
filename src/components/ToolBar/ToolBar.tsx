import AppsIcon from '@material-ui/icons/Apps';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './ToolBar.module.scss';

const sortOptionList = [
  'toolBar.default',
  'toolBar.popularity',
  'toolBar.rating',
  'toolBar.latest',
  'toolBar.priceIncrease',
  'toolBar.priceDecrease',
];

const showOptionList = [5, 12, 15, 20];

interface ToolBarProps {
  onChangeLimit: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
}

const ToolBar: React.FC<ToolBarProps> = ({ onChangeLimit, limit }) => {
  const [t] = useTranslation();
  return (
    <div className={classes.toolbar}>
      <div className={classes.left}>
        <select name="sort" id="sort" className={classes.sort}>
          {sortOptionList.map((item) => (
            <option key={item} value={item}>
              {t(item)}
            </option>
          ))}
        </select>
        <button type="button" className={classes.button}>
          {t('toolBar.compare')}
        </button>
      </div>
      <div className={classes.right}>
        <button type="button">
          <AppsIcon />
        </button>
        <button type="button">
          <DehazeIcon />
        </button>
        <button type="button">
          <ViewModuleIcon />
        </button>
        <select
          name="show"
          id="show"
          className={classes.show}
          onChange={(event) => {
            console.log(event.target.value);
            onChangeLimit(+event.target.value);
          }}
          value={limit}
        >
          {showOptionList.map((item) => (
            <option key={item} value={item}>
              {`${t('toolBar.show')} ${item}`}{' '}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

ToolBar.defaultProps = {};
export default ToolBar;
