import React from 'react';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { useTranslation } from 'react-i18next';

import CustomLink from '@Component/CustomLink';

import classes from './Category.module.scss';
import { listCategories } from './constants';

const Category: React.FC = () => {
  // Hook states
  const [t] = useTranslation();

  return (
    <div className={classes.category}>
      <div className={classes.product}>Product categories</div>

      <ul>
        {listCategories.map(({ title, icon, hasButtonAdd, link }) => (
          <li key={title} className={classes.productItem}>
            <CustomLink to={link}>
              <div className={classes.left}>
                <button type="button">{icon}</button>
                <span>{t(title)}</span>
              </div>
            </CustomLink>

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
