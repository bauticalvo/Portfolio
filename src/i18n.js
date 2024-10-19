import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    lng: 'es', // idioma por defecto
    fallbackLng: 'en', // idioma de respaldo
    interpolation: {
      escapeValue: false, 
    },
  });

  export const detectarIdiomaNavegador = () => {
    const idiomaNavegador = navigator.language.split('-')[0]; 
    const idiomaSoportado = ['es', 'en'].includes(idiomaNavegador) ? idiomaNavegador : 'en';
    i18n.changeLanguage(idiomaSoportado);
    localStorage.setItem("language", idiomaSoportado);

  };

export default i18n;
