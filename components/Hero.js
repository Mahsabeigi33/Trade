'use client';

import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function Hero({ title, description, buttonText, imageSrc }) {
  const { t } = useTranslation('common');

  return (
    <div className="hero bg-gray-900 min-h-screen">
      <div className="hero-content flex lg:flex-row flex-col">
        <div className="lg:w-3/5 w-full h-full flex justify-center">
          <div className="w-full h-full relative">
          <img
              src={imageSrc || "/GlobalMarket.jpg"}
              className="object-cover w-full h-full rounded-lg shadow-2xl"
              alt="Hero Image"
            />
          </div>
        </div>
        <div className="lg:w-2/5 w-full flex flex-col justify-center p-4 lg:p-8">
        <h1 className="text-5xl font-bold mb-4 text-amber-400">{title}</h1>
          <p className="py-6 text-left text-white">
            {t('hero.description')}
          </p>
          <button className="btn btn-primary text-lg font-bold text-white">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
