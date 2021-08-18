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
import { useTranslation } from 'react-i18next';

import classes from './Category.module.scss';

interface CategoryProps {
  template?: string;
}
const listCategories = [
  { title: 'catelogy.accessories', icon: <SelectAllOutlinedIcon />, hasButtonAdd: false },
  { title: 'catelogy.camera', icon: <CameraAltOutlinedIcon />, hasButtonAdd: true },
  { title: 'catelogy.computer', icon: <ComputerOutlinedIcon />, hasButtonAdd: false },
  { title: 'catelogy.console', icon: <SportsEsportsOutlinedIcon />, hasButtonAdd: false },
  { title: 'catelogy.gadgets', icon: <HeadsetOutlinedIcon />, hasButtonAdd: true },
  { title: 'catelogy.mobile', icon: <MobileScreenShareOutlinedIcon />, hasButtonAdd: true },
  { title: 'catelogy.tool', icon: <BuildOutlinedIcon />, hasButtonAdd: false },
  { title: 'catelogy.tv', icon: <TvOutlinedIcon />, hasButtonAdd: true },
];

const Category: React.FC<CategoryProps> = ({ template }) => {
  const [t] = useTranslation();
  return (
    <div className={classes.category}>
      <div className={classes.product}>Product categories</div>
      <ul>
        {listCategories.map((item) => (
          <li key={item.title}>
            <div className={classes.left}>
              <button type="button">{item.icon}</button>
              <span>{t(item.title)}</span>
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
