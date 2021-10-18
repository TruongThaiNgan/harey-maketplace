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
    link: '/shop/accessories',
  },
  {
    title: 'catelogy.computer',
    icon: <ComputerOutlinedIcon />,
    hasButtonAdd: false,
    link: '/shop/computers',
  },
  {
    title: 'catelogy.camera',
    icon: <CameraAltOutlinedIcon />,
    hasButtonAdd: false,
    link: '/shop/cameras-photos',
  },
  {
    title: 'catelogy.mobile',
    icon: <MobileScreenShareOutlinedIcon />,
    hasButtonAdd: false,
    link: '/shop/mobiles-tablets',
  },
  { title: 'catelogy.tv', icon: <TvOutlinedIcon />, hasButtonAdd: false, link: '/shop/tvs-audio' },
  {
    title: 'catelogy.console',
    icon: <SportsEsportsOutlinedIcon />,
    hasButtonAdd: false,
    link: '/shop/console-games',
  },
  {
    title: 'catelogy.gadgets',
    icon: <HeadsetOutlinedIcon />,
    hasButtonAdd: false,
    link: '/shop/gadgets',
  },
  { title: 'catelogy.tool', icon: <BuildOutlinedIcon />, hasButtonAdd: false, link: '/shop/tools-storage' },
  { title: 'Watches', icon: <WatchOutlinedIcon />, hasButtonAdd: false, link: '/shop/gadgets/watches' },
];
