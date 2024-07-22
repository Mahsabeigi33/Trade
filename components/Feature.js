import FeatureCard from "@/components/FeatureCard";
import featureData from './feature-data.json';

export default function Feature() {
  return (
    <div className="bg-black">
    <div className="container  mx-auto px-4 py-12">
      {/* <h2 className="text-7xl font-extrabold mb-10 text-center text-blue-600">Our Services</h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureData.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </div>
    </div>
    </div>
  );
}
