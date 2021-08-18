import React from 'react';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import LocalPhoneOutlinedIcon from '@material-ui/icons/LocalPhoneOutlined';
import PermPhoneMsgOutlinedIcon from '@material-ui/icons/PermPhoneMsgOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import { useTranslation } from 'react-i18next';

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
  { icon: phoneCall, title: 'footer.info', content: '878 - 3853 -9576' },
  { icon: mail, title: 'Email', content: 'shopelab@gmail.com' },
];
const myAccountList = ['footer.shop', 'footer.cart', 'footer.aboutUs', 'footer.contactUs', 'footer.comingSoon'];
const customServicesList = ['footer.home', 'footer.blog', 'footer.wishList', 'footer.compare', 'footer.portfolio'];
const contactList = [
  { icon: <RoomOutlinedIcon />, content: '445 Mount Eden Road' },
  { icon: <LocalPhoneOutlinedIcon />, content: '878 - 3853 -9576' },
  { icon: <PermPhoneMsgOutlinedIcon />, content: '878 - 0505 - 0440' },
  { icon: <EmailOutlinedIcon />, content: 'shopelab@gmail.com' },
];

const Footer: React.FC<FooterProps> = ({ template }) => {
  const [t] = useTranslation();
  return (
    <div className={classes.footer}>
      <div className={classes.info}>
        <div className={classes.left}>
          {infoList.map((item) => (
            <div className={classes.contact} key={item.title}>
              <img src={item.icon} alt={item.title} />
              <div className={classes.record}>
                <span className={classes.title}>{t(item.title)}</span>
                <span>{t(item.content)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={classes.right}>
          <input type="text" placeholder={t('footer.enterEmail')} />
          <button type="button">{t('footer.subscribe')}</button>
        </div>
      </div>

      <div className={classes.more}>
        <div className={classes.list}>
          <span>{t('footer.account')}</span>
          <ul>
            {myAccountList.map((item) => (
              <li key={item}>{t(item)}</li>
            ))}
          </ul>
        </div>

        <div className={classes.list}>
          <span>{t('footer.service')}</span>
          <ul>
            {customServicesList.map((item) => (
              <li key={item}>{t(item)}</li>
            ))}
          </ul>
        </div>

        <div className={classes.list}>
          <div className={classes.quickContact}>
            <span>{t('footer.quickContact')}</span>
            <input type="text" placeholder={t('footer.enterYourEmail')} />
            <textarea rows={3} placeholder={t('footer.writeYourReview')} />
            <button type="button">{t('footer.sendMessage')}</button>
          </div>
        </div>

        <div className={classes.list}>
          <span>{t('footer.specialOffers')}</span>
          <img src={specialOffer} alt="specialOffer" />
        </div>

        <div className={classes.list}>
          <span>{t('footer.contact')}</span>
          {contactList.map((item) => (
            <div className={classes.contactRow} key={item.content}>
              <button type="button">{item.icon}</button>
              <span>{t(item.content)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={classes.copyRight}>
        <span>{t('footer.copyRight')}</span>
        <img src={copyRight} alt="copyRight" />
      </div>
    </div>
  );
};

Footer.defaultProps = {};
export default Footer;
