"use client";
import React from 'react';
import Banner from '@/components/Banner/TopBanner';
import Testimonial from '@/components/Testimonial';
import Hero from '@/components/Hero';
import { useTranslation } from 'react-i18next';

export default function Clients() {
  const { t } = useTranslation('common');

  return (
    <div>
      <Banner
        imageSrc="/clients.jpg"
        heading={t('testimonials.banner.heading')}
        subheading={t('testimonials.banner.subheading')}
      />
      <Testimonial />
      <Hero
        title={t('hero.title')}
        description={t('hero.description')}
        buttonText={t('button.buy')}
        imageSrc="./hero-clients.jpg"
      />
    </div>
  );
}

