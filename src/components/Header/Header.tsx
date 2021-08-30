import MenuIcon from '@material-ui/icons/Menu';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import logo from '@Image/logo.svg';
import CustomLink from '@Component/CustomLink';

import { buttonList, featureList, iconlist, initButtonState, linkList } from './constants';
import classes from './Header.module.scss';
import { HeaderProps, NavButtonState } from './interfaces';

const Header: React.FC<HeaderProps> = () => {
  const [t] = useTranslation();
  const [navButton, setNavButton] = useState<NavButtonState>(initButtonState);
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
          <img src={logo} alt="logo" />
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
            {buttonList.map(({ id, title, component, link }) => (
              <div
                key={`${id}`}
                className={classes.boxContainer}
                onMouseEnter={() =>
                  setNavButton((preState) => {
                    return { ...preState, [title]: true };
                  })
                }
                onMouseLeave={() =>
                  setNavButton((preState) => {
                    return { ...preState, [title]: false };
                  })
                }
              >
                <CustomLink to={link} key={`${id}`}>
                  <button type="button" className={classes.buttonLink}>
                    {t(title)}
                  </button>
                </CustomLink>
                {navButton[title] && <div className={classes.dropBox}>{component}</div>}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.defaultProps = {};
export default Header;
