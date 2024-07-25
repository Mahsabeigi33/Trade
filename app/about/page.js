"use client";
import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '@/components/Hero';
export default function About() {

  const { t } = useTranslation('common');

  return (
    <div>
      {/* Top Banner */}
      <section className="relative">
        <img
          src="/about.jpg" 
          alt="Top Banner"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl">{t('about.banner.heading')}</h1>
            <p className="mt-4 text-lg">{t('about.banner.subheading')}</p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gray-100 py-12">
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">{t('about.hero.heading')}</h2>
          <p className="mt-4 text-lg text-gray-700">{t('about.hero.subheading')}</p>
        </div>
      </section>
      <Hero
        title={t('hero.title')}
        description={t('hero.description')}
        buttonText={t('button.buy')}
        imageSrc="./GlobalMarket.jpg"
      />

      {/* About Content */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">{t('about.content.title')}</h3>
              <p className="text-gray-700">{t('about.content.description')}</p>
              <p className="text-gray-700">{t('about.content.additionalInfo')}</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">{t('about.content.missionTitle')}</h4>
              <p className="text-gray-700">{t('about.content.missionDescription')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

