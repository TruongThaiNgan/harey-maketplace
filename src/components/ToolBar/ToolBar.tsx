import React from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import { useTranslation } from 'react-i18next';

import classes from './ToolBar.module.scss';

interface ToolBarProps {
  template?: string;
}
const sortOptionList = [
  'toolBar.default',
  'toolBar.popularity',
  'toolBar.rating',
  'toolBar.latest',
  'toolBar.priceIncrease',
  'toolBar.priceDecrease',
];

const showOptionList = [5, 12, 15, 20];

const ToolBar: React.FC<ToolBarProps> = ({ template }) => {
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
        <select name="show" id="show" className={classes.show}>
          {showOptionList.map((item) => (
            <option value={item}>{`${t('toolBar.show')} ${item}`} </option>
          ))}
        </select>
      </div>
    </div>
  );
};

ToolBar.defaultProps = {};
export default ToolBar;
