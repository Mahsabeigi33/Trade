'use client';
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

export default function Header() {
  const { t } = useTranslation('common');

  return (
    <header className="bg-black text-white p-2 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
       <LanguageToggle />
      <h1 className="text-lg font-bold">{t('title')}</h1>
        <nav className="flex-grow">
        <ul className="flex space-x-5">
            <li><Link href="/" className="text-lg font-bold hover:text-blue-600">{t('home')}</Link></li>
            <li><Link href="/about" className="text-lg font-bold hover:text-blue-600">{t('about')}</Link></li>
            <li><Link href="/contact" className="text-lg font-bold hover:text-blue-600">{t('contact')}</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="btn btn-blue text-lg font-bold text-blue-500 hover:text-blue-600">
          {t('sigin')}
          </Link>
        </div>
        <div className="w-32"></div> 
      </div>
    </header>
  );
}
