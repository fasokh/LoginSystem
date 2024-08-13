// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from './next-i18next.config';

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    ...nextI18NextConfig,
    // Additional i18n configuration if needed
  });

export default appWithTranslation;
