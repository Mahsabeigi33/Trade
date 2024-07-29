"use client";
import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '@/components/Hero';
import Banner from '@/components/Banner/TopBanner';
export default function About() {

  const { t } = useTranslation('common');

  return (
    <div>
       <Banner
        imageSrc="/about.jpg"
        heading={t('about.banner.heading')}
        subheading={t('about.banner.subheading')}
      />

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

