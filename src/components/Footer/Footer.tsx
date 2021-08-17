import React from 'react';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import LocalPhoneOutlinedIcon from '@material-ui/icons/LocalPhoneOutlined';
import PermPhoneMsgOutlinedIcon from '@material-ui/icons/PermPhoneMsgOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

import skype from '@Image/skype.svg';
import copyRight from '@Image/copyRight.png';
import phoneCall from '@Image/phone-call.svg';
import mail from '@Image/mail.svg';
import specialOffer from '@Image/special-offer.jpg';

import classes from './Footer.module.scss';

interface FooterProps {
  template?: string;
}
const infoList = [
  { icon: skype, title: 'Skype', content: 'E-lab_shop_contact' },
  { icon: phoneCall, title: 'Info line', content: '878 - 3853 -9576' },
  { icon: mail, title: 'Email', content: 'shopelab@gmail.com' },
];
const myAccountList = ['Shop', 'Cart', 'About Us', 'Contact Us', 'Coming Soon'];
const customServicesList = ['Home', 'Blog', 'Wishlist', 'Compare', 'Portfolio'];
const contactList = [
  { icon: <RoomOutlinedIcon />, content: '445 Mount Eden Road' },
  { icon: <LocalPhoneOutlinedIcon />, content: '878 - 3853 -9576' },
  { icon: <PermPhoneMsgOutlinedIcon />, content: '878 - 0505 - 0440' },
  { icon: <EmailOutlinedIcon />, content: 'shopelab@gmail.com' },
];

const Footer: React.FC<FooterProps> = ({ template }) => {
  const temp = 0;
  return (
    <div className={classes.footer}>
      <div className={classes.info}>
        <div className={classes.left}>
          {infoList.map((item) => (
            <div className={classes.contact} key={item.title}>
              <img src={item.icon} alt={item.title} />
              <div className={classes.record}>
                <span className={classes.title}>{item.title}</span>
                <span>{item.content}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={classes.right}>
          <input type="text" placeholder="Enter your E-mail to subscribe..." />
          <button type="button">SUBSCRIBE</button>
        </div>
      </div>

      <div className={classes.more}>
        <div className={classes.list}>
          <span>My account</span>
          <ul>
            {myAccountList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={classes.list}>
          <span>Customer Services</span>
          <ul>
            {customServicesList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={classes.list}>
          <div className={classes.quickContact}>
            <span>Quick Contact</span>
            <input type="text" placeholder="Enter your email" />
            <textarea rows={3} placeholder="Write your review" />
            <button type="button">SEND MESSAGE</button>
          </div>
        </div>

        <div className={classes.list}>
          <span>Special offers</span>
          <img src={specialOffer} alt="specialOffer" />
        </div>

        <div className={classes.list}>
          <span>Contact</span>
          {contactList.map((item) => (
            <div className={classes.contactRow} key={item.content}>
              <button type="button">{item.icon}</button>
              <span>{item.content}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={classes.copyRight}>
        <span>Copyright © 2020. eLab WordPress Theme by StylemixThemes</span>
        <img src={copyRight} alt="copyRight" />
      </div>
    </div>
  );
};

Footer.defaultProps = {};
export default Footer;
