import AppsIcon from '@material-ui/icons/Apps';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { showOptionList, sortOptionList } from './constants';
import { ToolBarProps } from './interfaces';
import classes from './ToolBar.module.scss';

const ToolBar: React.FC<ToolBarProps> = ({ onChangeLimit, limit, onChangeSort, sort }) => {
  // Hook states
  const [t] = useTranslation();

  const onChangeSortItem = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    onChangeSort(event.target.value);
  };
  const onChangeShow = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    onChangeLimit(+event.target.value);
  };
  return (
    <div className={classes.toolbar}>
      <div className={classes.left}>
        <select name="sort" id="sort" className={classes.sort} onChange={onChangeSortItem} value={sort}>
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
        <select name="show" id="show" className={classes.show} onChange={onChangeShow} value={limit}>
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
