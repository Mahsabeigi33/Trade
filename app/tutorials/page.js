"use client";
import React from 'react';
import Banner from '@/components/Banner/TopBanner';
import Testimonial from '@/components/Testimonial';
import Hero from '@/components/Hero';
import { useTranslation } from 'react-i18next';

export default function Tutorials() {
  const { t } = useTranslation('common');

  return (
    <div>
      <Banner
        imageSrc="./tutorials.jpg"
        heading={t('tutorials.banner.heading')}
        subheading={t('tutorials.banner.subheading')}
      />

      <Hero
        title={t('hero.title')}
        description={t('hero.description')}
        buttonText={t('button.buy')}
        imageSrc="./hero-clients.jpg"
      />
    </div>
  );
}

