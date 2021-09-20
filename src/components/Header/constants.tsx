import FacebookIcon from '@material-ui/icons/Facebook';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import InstagramIcon from '@material-ui/icons/Instagram';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ShuffleOutlinedIcon from '@material-ui/icons/ShuffleOutlined';
import TwitterIcon from '@material-ui/icons/Twitter';
import React from 'react';

import { ButtonListState } from './interfaces';

export const iconList = [
  { id: 1, icon: <TwitterIcon /> },
  { id: 2, icon: <InstagramIcon /> },
  { id: 3, icon: <FacebookIcon /> },
];

export const linkList = ['header.home', 'header.blog', 'header.comingSoon'];

export const featureList = [
  { id: 1, icon: <ShuffleOutlinedIcon />, link: '/compare' },
  { id: 2, icon: <PersonOutlineOutlinedIcon />, link: '/my-account' },
  { id: 3, icon: <FavoriteBorderOutlinedIcon />, link: '/wishlist' },
  { id: 4, icon: <ShoppingCartOutlinedIcon />, link: '/cart' },
];

export const homeList = [
  { title: 'Modern' },
  { title: 'Medical' },
  { title: 'Minimal' },
  { title: 'Yellow' },
  { title: 'Strong' },
  { title: 'Creative' },
  { title: 'Trendy' },
  { title: 'Classic' },
  { title: 'Grocery' },
  { title: 'Autoparty' },
];

export const pageList = [{ title: 'Blog' }, { title: 'Portfolio' }, { title: '404' }];

export const buttonList: ButtonListState = [
  { id: 1, title: 'header.home', link: '/' },
  {
    id: 2,
    title: 'header.shop',
    link: '/shop',
  },
  { id: 3, title: 'header.aboutUs', link: '/about' },
  { id: 4, title: 'header.contactUs', link: '/contact' },
  { id: 5, title: 'header.comingSoon', link: '/coming' },
  {
    id: 6,
    title: 'header.pages',
    link: '/pages',
  },
  {
    id: 7,
    title: 'header.elements',
    link: '/element',
  },
];

export const initButtonState = {
  'header.home': false,
  'header.shop': false,
  'header.aboutUs': false,
  'header.contactUs': false,
  'header.comingSoon': false,
  'header.pages': false,
  'header.elements': false,
};
