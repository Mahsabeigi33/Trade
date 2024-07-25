'use client';
import Experience from "@/components/Experience";
import TopBanner from "@/components/TopBanner";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import { useTranslation } from 'next-i18next';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <>
      <TopBanner />
      <Feature />
      <Experience />
      <Hero
        title={t('hero.title')}
        description={t('hero.description')}
        buttonText={t('button.buy')}
        imageSrc="./GlobalMarket.jpg"
      />
      
      <Testimonial />

      
    </>
  );
}
