import React from 'react';
import { useTranslation } from 'react-i18next';

import ButtonShop from '@Component/ButtonShop';

import classes from './Banner.module.scss';

const Banner: React.FC = () => {
  // Hook states
  const [t] = useTranslation();

  return (
    <div className={classes.banner}>
      <div className={classes.text}>
        <div className={classes.title}>{t('banner.look')}</div>

        <div className={classes.content}>
          <strong>{t('banner.get')} $100</strong> {t('banner.voucher')}
        </div>
        <ButtonShop style={{ padding: '1rem 2rem' }} />
      </div>
    </div>
  );
};

Banner.defaultProps = {};
export default Banner;
