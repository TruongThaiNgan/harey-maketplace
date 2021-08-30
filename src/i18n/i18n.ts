import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationVI from './locales/vi/translation.json';

// the translations
const resources = {
  en: { translation: translationEN },
  vi: { translation: translationVI },
};
const lng = 'en';
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng,
    fallbackLng: 'vi',
    debug: false,
    interpolation: { escapeValue: false },
  });

const t = i18n.t.bind(i18n);
export { t };
export default i18n;
