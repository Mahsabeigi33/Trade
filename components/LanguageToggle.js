'use client';

import { useTranslation } from 'next-i18next';
import i18n from '../app/i18n';

export default function LanguageToggle() {
  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLanguage === 'en' ? 'fa' : 'en');
  };

 
  return (
    <>
    
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 flex items-center space-x-2"
    >
      <span>{currentLanguage === 'en' ? 'فارسی' : 'English'}</span>
      <svg
        className="w-4 h-4 ml-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    </>
  );
}