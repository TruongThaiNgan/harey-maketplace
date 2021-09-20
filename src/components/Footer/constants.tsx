import React from 'react';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import LocalPhoneOutlinedIcon from '@material-ui/icons/LocalPhoneOutlined';
import PermPhoneMsgOutlinedIcon from '@material-ui/icons/PermPhoneMsgOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

import skype from '@Image/skype.svg';
import phoneCall from '@Image/phone-call.svg';
import mail from '@Image/mail.svg';

export const infoList = [
  { icon: skype, title: 'Skype', content: 'E-lab_shop_contact' },
  { icon: phoneCall, title: 'footer.info', content: '878 - 3853 -9576' },
  { icon: mail, title: 'Email', content: 'shopelab@gmail.com' },
];
export const myAccountList = [
  { title: 'footer.shop', link: '/shop' },
  { title: 'footer.cart', link: '/cart' },
  { title: 'footer.aboutUs', link: '/about' },
  { title: 'footer.contactUs', link: '/contact' },
  { title: 'footer.comingSoon', link: '/coming' },
];
export const customServicesList = [
  'footer.home',
  'footer.blog',
  'footer.wishList',
  'footer.compare',
  'footer.portfolio',
];

export const contactList = [
  { icon: <RoomOutlinedIcon />, content: '445 Mount Eden Road' },
  { icon: <LocalPhoneOutlinedIcon />, content: '878 - 3853 -9576' },
  { icon: <PermPhoneMsgOutlinedIcon />, content: '878 - 0505 - 0440' },
  { icon: <EmailOutlinedIcon />, content: 'shopelab@gmail.com' },
];
