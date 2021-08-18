import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Banner.module.scss';

interface BannerProps {
  template?: string;
}

const Banner: React.FC<BannerProps> = ({ template }) => {
  const [t] = useTranslation();
  return (
    <div className={classes.banner}>
      <div className={classes.text}>
        <div className={classes.title}>{t('banner.look')}</div>
        <div className={classes.content}>
          <strong>{`${t('banner.get')} $100`}</strong> {t('banner.voucher')}
        </div>
        <div className={classes.button}>
          <button type="button">{t('banner.shop')}</button>
        </div>
      </div>
    </div>
  );
};

Banner.defaultProps = {};
export default Banner;
