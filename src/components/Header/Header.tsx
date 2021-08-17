import FacebookIcon from '@material-ui/icons/Facebook';
import MenuIcon from '@material-ui/icons/Menu';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import InstagramIcon from '@material-ui/icons/Instagram';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ShuffleOutlinedIcon from '@material-ui/icons/ShuffleOutlined';
import TwitterIcon from '@material-ui/icons/Twitter';
import React from 'react';

import logo from '@Image/logo.svg';

import classes from './Header.module.scss';

interface HeaderProps {
  template?: string;
}

const iconlist = [
  { id: 1, icon: <TwitterIcon /> },
  { id: 2, icon: <InstagramIcon /> },
  { id: 3, icon: <FacebookIcon /> },
];
const linkList = ['Home', 'Blog', 'Coming Soon'];
const featureList = [
  { id: 1, icon: <ShuffleOutlinedIcon /> },
  { id: 2, icon: <PersonOutlineOutlinedIcon /> },
  { id: 3, icon: <FavoriteBorderOutlinedIcon /> },
  { id: 4, icon: <ShoppingCartOutlinedIcon /> },
];
const buttonList = [
  { id: 1, title: 'Home' },
  { id: 2, title: 'Shop' },
  { id: 3, title: 'About us' },
  { id: 4, title: 'Contact us' },
  { id: 5, title: 'Coming Soon' },
  { id: 6, title: 'Pages' },
  { id: 7, title: 'Elements' },
];

const Header: React.FC<HeaderProps> = ({ template }) => {
  const temp = 0;
  return (
    <header className={classes.header}>
      <div className={classes.listLink}>
        <div className={classes.left}>
          {iconlist.map((icon) => (
            <button type="button" key={`${icon.id}`}>
              {icon.icon}
            </button>
          ))}
          <span>Now shipping to Canada</span>
        </div>

        <div className={classes.right}>
          {linkList.map((link) => (
            <span key={link}>{link}</span>
          ))}
        </div>
      </div>
      <div className={classes.seperate} />

      <div className={classes.headerBar}>
        <button type="button">
          <img src={logo} alt="logo" />
        </button>

        <div className={classes.searchBar}>
          <input type="text" />
          <button type="button" className={classes.allCategoriesButton}>
            ALL CATEGORIES
          </button>
          <button type="button" className={classes.searchButton}>
            <SearchOutlinedIcon />
          </button>
        </div>

        <div className={classes.features}>
          {featureList.map((feature) => (
            <button type="button" key={`${feature.id}`}>
              {feature.icon}
            </button>
          ))}
        </div>
      </div>

      <nav className={classes.nav}>
        <div className={classes.categories}>
          <span>CATEGORIES</span>
          <button type="button">
            <MenuIcon />
          </button>
        </div>

        <div className={classes.listButton}>
          {buttonList.map((item) => (
            <button type="button" key={`${item.id}`}>
              {item.title}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

Header.defaultProps = {};
export default Header;
