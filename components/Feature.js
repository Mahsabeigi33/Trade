'use client';

import { useTranslation } from 'next-i18next';
import FeatureCard from '@/components/FeatureCard';
import featureData from './feature-data.json';

export default function Feature() {
  const { t } = useTranslation('common');

  return (
    <div className="bg-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={t(`features.${feature.id}.title`)}
              text={t(`features.${feature.id}.text`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
