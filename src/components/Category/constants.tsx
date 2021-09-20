import React from 'react';
import SelectAllOutlinedIcon from '@material-ui/icons/SelectAllOutlined';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';
import MobileScreenShareOutlinedIcon from '@material-ui/icons/MobileScreenShareOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import TvOutlinedIcon from '@material-ui/icons/TvOutlined';
import WatchOutlinedIcon from '@material-ui/icons/WatchOutlined';

export const listCategories = [
  {
    title: 'catelogy.accessories',
    icon: <SelectAllOutlinedIcon />,
    hasButtonAdd: false,
    link: '/product-category/accessories',
  },
  {
    title: 'catelogy.computer',
    icon: <ComputerOutlinedIcon />,
    hasButtonAdd: false,
    link: '/product-category/computers',
  },
  {
    title: 'catelogy.camera',
    icon: <CameraAltOutlinedIcon />,
    hasButtonAdd: true,
    link: '/product-category/cameras-photos',
  },
  {
    title: 'catelogy.mobile',
    icon: <MobileScreenShareOutlinedIcon />,
    hasButtonAdd: true,
    link: '/product-category/mobiles-tablets',
  },
  { title: 'catelogy.tv', icon: <TvOutlinedIcon />, hasButtonAdd: true, link: '/product-category/tvs-audio' },
  {
    title: 'catelogy.console',
    icon: <SportsEsportsOutlinedIcon />,
    hasButtonAdd: false,
    link: '/product-category/console-games',
  },
  {
    title: 'catelogy.gadgets',
    icon: <HeadsetOutlinedIcon />,
    hasButtonAdd: true,
    link: '/product-category/gadgets',
  },
  { title: 'catelogy.tool', icon: <BuildOutlinedIcon />, hasButtonAdd: false, link: '/product-category/tools-storage' },
  { title: 'Watches', icon: <WatchOutlinedIcon />, hasButtonAdd: false, link: '/product-category/gadgets/watches' },
];
