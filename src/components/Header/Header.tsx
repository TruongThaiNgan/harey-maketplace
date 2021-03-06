import MenuIcon from '@material-ui/icons/Menu';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { useHistory } from 'react-router';

import logo from '@Image/logo.svg';
import CustomLink from '@Component/CustomLink';
import axios from '@Service/axios';
import SearchItem from '@Component/SearchItem';
import BackDrop from '@Component/BackDrop';
import Category from '@Component/Category';

import i18n from '../../i18n/i18n';

import { buttonList, featureList, iconList, linkList } from './constants';
import classes from './Header.module.scss';

interface ISearchData {
  id: string;
  title: string;
  image1: string;
  categories: string;
}

const Header: React.FC = () => {
  // Hook states
  const [t] = useTranslation();
  const history = useHistory();
  const [index, setIndex] = useState<number>(1);
  const [language, setLanguage] = useState<string>('vi');
  const [search, setSearch] = useState<string>('');
  const [searchData, setSearchData] = useState<ISearchData[]>([]);
  const [isOpenRightSlider, setIsOpenRightSlider] = useState<boolean>(false);
  const [isOpenLeftSlider, setIsOpenLeftSlider] = useState<boolean>(false);

  useEffect(() => {
    if (search)
      axios
        .get('/shop/search', {
          params: {
            key: search,
          },
        })
        .then((res) => {
          setSearchData(res.data.listSearch);
        })
        .catch((err) => {
          console.log(err);
        });
    else setSearchData([]);
  }, [search]);

  useEffect(() => {
    if (isOpenRightSlider) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'scroll';
  }, [isOpenRightSlider]);

  useEffect(() => {
    if (isOpenLeftSlider) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'scroll';
  }, [isOpenLeftSlider]);

  const changeLanguage = (): void => {
    if (language === 'vi') {
      i18n.changeLanguage('en');
      setLanguage('en');
    } else {
      i18n.changeLanguage('vi');
      setLanguage('vi');
    }
  };
  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };
  const goToSearchPage = (): void => {
    if (!search) return;
    const key = search;
    setSearch('');
    history.push({
      pathname: '/search',
      search: `?key=${key}`,
    });
  };
  const openRightSlider = (): void => {
    setIsOpenRightSlider(true);
  };
  const closeRightSlider = (): void => {
    setIsOpenRightSlider(false);
  };
  const openLeftSlider = (): void => {
    setIsOpenLeftSlider(true);
  };
  const closeLeftSlider = (): void => {
    setIsOpenLeftSlider(false);
  };
  return (
    <header className={classes.header}>
      <div className={classes.listLink}>
        <div className={classes.left}>
          {iconList.map(({ id, icon }) => (
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
        <button type="button" className={classes.logo}>
          <CustomLink to="/">
            <img src={logo} alt="logo" className={classes.img} />
          </CustomLink>
        </button>

        <div className={classes.searchContainer}>
          <div className={classes.searchBar}>
            <div className={classes.searchInput}>
              <input type="text" placeholder={t('header.look')} value={search} onChange={handleChangeSearch} />
              <button type="button" className={classes.allCategoriesButton}>
                {t('header.allCategories')}
              </button>
              <button type="button" className={classes.searchButton} onClick={goToSearchPage}>
                <SearchOutlinedIcon />
              </button>
            </div>

            {search && (
              <div className={classes.dropdown}>
                <div className={classes.searchData}>
                  {searchData.map(({ id, ...rest }) => (
                    <button
                      type="button"
                      className={classes.searchItem}
                      key={id}
                      onClick={() => {
                        setSearch('');
                      }}
                    >
                      <SearchItem {...rest} />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={classes.features}>
          {featureList.map(({ id, icon, link }) => (
            <button type="button" key={`${id}`}>
              <CustomLink to={link}>{icon}</CustomLink>
            </button>
          ))}
          <button type="button" onClick={changeLanguage}>
            {language.toUpperCase()}
          </button>
        </div>
      </div>

      <nav className={classes.nav}>
        <div className={classes.navBar}>
          <div className={classes.categories}>
            <span className={classes.categoriesText}>{t('header.categories')}</span>
            <button type="button" onClick={openLeftSlider}>
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
          <button type="button" className={classes.rightButton} onClick={openRightSlider}>
            <MenuIcon />
          </button>
        </div>
      </nav>

      {isOpenRightSlider && (
        <div className={classes.rightSlider}>
          <BackDrop onClick={closeRightSlider} />
          {buttonList.map(({ id, title, link }) => (
            <button
              type="button"
              key={`${id}`}
              className={classes.buttonRightSlider}
              onClick={() => {
                closeRightSlider();
                setIndex(id);
              }}
            >
              <CustomLink to={link} key={`${id}`}>
                {t(title)}
              </CustomLink>
            </button>
          ))}
          <div className={classes.searchRightSlider}>
            <input type="text" placeholder={t('header.look')} value={search} onChange={handleChangeSearch} />
            <button
              type="button"
              onClick={() => {
                closeRightSlider();
                goToSearchPage();
              }}
            >
              <SearchOutlinedIcon />
            </button>
          </div>
        </div>
      )}
      {isOpenLeftSlider && (
        <div className={classes.leftSlider}>
          <BackDrop onClick={closeLeftSlider} />
          <div className={classes.leftSliderCategory}>
            <Category closeSlider={closeLeftSlider} />
          </div>
        </div>
      )}
    </header>
  );
};

Header.defaultProps = {};
export default Header;
