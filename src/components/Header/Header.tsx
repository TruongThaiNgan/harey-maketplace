import MenuIcon from '@material-ui/icons/Menu';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import logo from '@Image/logo.svg';
import CustomLink from '@Component/CustomLink';

import { buttonList, featureList, iconlist, linkList } from './constants';
import classes from './Header.module.scss';
import { HeaderProps } from './interfaces';

const Header: React.FC<HeaderProps> = () => {
  const [t] = useTranslation();
  const [index, setIndex] = useState<number>(1);
  return (
    <header className={classes.header}>
      <div className={classes.listLink}>
        <div className={classes.left}>
          {iconlist.map(({ id, icon }) => (
            <button type="button" key={`${id}`}>
              {icon}
            </button>
          ))}
          <span>{t('header.ship')}</span>
        </div>

        <div className={classes.right}>
          {linkList.map((link) => (
            <span key={link}>{t(link)}</span>
          ))}
        </div>
      </div>
      <div className={classes.seperate} />

      <div className={classes.headerBar}>
        <button type="button">
          <CustomLink to="/">
            <img src={logo} alt="logo" />
          </CustomLink>
        </button>

        <div className={classes.searchBar}>
          <input type="text" placeholder={t('header.look')} />
          <button type="button" className={classes.allCategoriesButton}>
            {t('header.allCategories')}
          </button>
          <button type="button" className={classes.searchButton}>
            <SearchOutlinedIcon />
          </button>
        </div>

        <div className={classes.features}>
          {featureList.map(({ id, icon }) => (
            <button type="button" key={`${id}`}>
              {icon}
            </button>
          ))}
        </div>
      </div>

      <nav className={classes.nav}>
        <div className={classes.navBar}>
          <div className={classes.categories}>
            <span>{t('header.categories')}</span>
            <button type="button">
              <MenuIcon />
            </button>
          </div>

          <div className={classes.listButton}>
            {buttonList.map(({ id, title, link }) => (
              <button
                type="button"
                key={`${id}`}
                className={classNames(classes.boxContainer, index === id ? classes.active : undefined)}
                onClick={() => setIndex(id)}
              >
                <CustomLink to={link} key={`${id}`} className={classes.buttonLink}>
                  {t(title)}
                </CustomLink>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.defaultProps = {};
export default Header;
