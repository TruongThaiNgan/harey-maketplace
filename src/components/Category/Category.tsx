import React from 'react';
import SelectAllOutlinedIcon from '@material-ui/icons/SelectAllOutlined';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';
import MobileScreenShareOutlinedIcon from '@material-ui/icons/MobileScreenShareOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import TvOutlinedIcon from '@material-ui/icons/TvOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

import classes from './Category.module.scss';

interface CategoryProps {
  template?: string;
}
const listCategories = [
  { title: 'Accessories', icon: <SelectAllOutlinedIcon />, hasButtonAdd: false },
  { title: 'Camera & Photos', icon: <CameraAltOutlinedIcon />, hasButtonAdd: true },
  { title: 'Computers', icon: <ComputerOutlinedIcon />, hasButtonAdd: false },
  { title: 'Consoles & Games', icon: <SportsEsportsOutlinedIcon />, hasButtonAdd: false },
  { title: 'Gadgets', icon: <HeadsetOutlinedIcon />, hasButtonAdd: true },
  { title: 'Mobiles & Tablets', icon: <MobileScreenShareOutlinedIcon />, hasButtonAdd: true },
  { title: 'Tool & storage', icon: <BuildOutlinedIcon />, hasButtonAdd: false },
  { title: "Tv's & Audio", icon: <TvOutlinedIcon />, hasButtonAdd: true },
];

const Category: React.FC<CategoryProps> = ({ template }) => {
  const temp = 0;
  return (
    <div className={classes.category}>
      <div className={classes.product}>Product categories</div>
      <ul>
        {listCategories.map((item) => (
          <li key={item.title}>
            <div className={classes.left}>
              <button type="button">{item.icon}</button>
              <span>{item.title}</span>
            </div>
            {item.hasButtonAdd && (
              <div className={classes.right}>
                <button type="button" className={classes.buttonAdd}>
                  <AddOutlinedIcon />
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

Category.defaultProps = {};
export default Category;
