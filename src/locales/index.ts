import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import languages from './languages';

const resources = languages;

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // debug: true,
    resources,
    // lng: `ko`,
    fallbackLng: `ko`,

    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
