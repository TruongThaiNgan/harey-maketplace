import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import specialOffer from '@Image/special-offer.jpg';
import copyRight from '@Image/copyRight.png';

import classes from './Footer.module.scss';
import { contactList, customServicesList, infoList, myAccountList } from './constants';

const Footer: React.FC = () => {
  const [t] = useTranslation();
  return (
    <div className={classes.footerContainer}>
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
          <span className={classes.title}>{t('footer.account')}</span>
          <ul>
            {myAccountList.map(({ title, link }) => (
              <li key={title}>
                <NavLink to={link} style={{ color: 'inherit' }}>
                  {t(title)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className={classes.list}>
          <span className={classes.title}>{t('footer.service')}</span>
          <ul>
            {customServicesList.map((item) => (
              <li key={item}>{t(item)}</li>
            ))}
          </ul>
        </div>

        <div className={classes.list}>
          <div className={classes.quickContact}>
            <span className={classes.title}>{t('footer.quickContact')}</span>
            <input type="text" placeholder={t('footer.enterYourEmail')} />
            <textarea rows={3} placeholder={t('footer.writeYourReview')} />
            <button type="button">{t('footer.sendMessage')}</button>
          </div>
        </div>

        <div className={classes.list}>
          <span className={classes.title}>{t('footer.specialOffers')}</span>
          <img className={classes.imgOffer} src={specialOffer} alt="specialOffer" />
        </div>

        <div className={classes.list}>
          <span className={classes.title}>{t('footer.contact')}</span>
          {contactList.map((item) => (
            <div className={classes.contactRow} key={item.content}>
              <button type="button">{item.icon}</button>
              <span>{t(item.content)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* <div className={classes.copyRight}>
        <span className={classes.title}>{t('footer.copyRight')}</span>
        <img src={copyRight} alt="copyRight" />
      </div> */}
    </div>
  );
};

Footer.defaultProps = {};
export default Footer;
