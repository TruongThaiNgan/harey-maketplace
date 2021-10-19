import React from 'react';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { useTranslation } from 'react-i18next';

import CustomLink from '@Component/CustomLink';

import classes from './Category.module.scss';
import { listCategories } from './constants';

interface CategoryProps {
  closeSlider?: () => void;
}

const Category: React.FC<CategoryProps> = ({ closeSlider }) => {
  // Hook states
  const [t] = useTranslation();

  return (
    <div className={classes.category}>
      <div className={classes.product}>Product categories</div>

      <ul>
        {listCategories.map(({ title, icon, hasButtonAdd, link }) => (
          <li key={title} className={classes.productItem}>
            <button
              type="button"
              className={classes.link}
              onClick={() => {
                if (closeSlider) closeSlider();
              }}
            >
              <CustomLink to={link}>
                <div className={classes.left}>
                  <div className={classes.icon}>{icon}</div>
                  <span>{t(title)}</span>
                </div>
              </CustomLink>
            </button>

            {hasButtonAdd && (
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
