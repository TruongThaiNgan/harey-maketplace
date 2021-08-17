import React from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ShuffleIcon from '@material-ui/icons/Shuffle';

import classes from './ToolBar.module.scss';

interface ToolBarProps {
  template?: string;
}

const ToolBar: React.FC<ToolBarProps> = ({ template }) => {
  const temp = 0;
  return (
    <div className={classes.toolbar}>
      <div className={classes.left}>
        <select name="sort" id="sort" className={classes.sort}>
          <option value="Default sorting">Default sorting</option>
          <option value="Sort by popylarity">Sort by popylarity</option>
          <option value="Sort by average rating">Sort by average rating</option>
          <option value="Sort by latest">Sort by latest</option>
          <option value="Sort by price: low to high">Sort by price: low to high</option>
          <option value="Sort by price: high to low">Sort by price: high to low</option>
        </select>
        <button type="button" className={classes.button}>
          <ShuffleIcon />
          Compare
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
          <option value="Show 5">Show 5</option>
          <option value="Show 12">Show 12</option>
          <option value="Show 15">Show 15</option>
          <option value="Show 20">Show 20</option>
        </select>
      </div>
    </div>
  );
};

ToolBar.defaultProps = {};
export default ToolBar;
