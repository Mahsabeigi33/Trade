import { Icon } from '@heroicons/react'; 
import iconMap from './iconMap';
import { DocumentChartBarIcon } from '@heroicons/react/24/solid';


export default function FeatureCard({ icon, title, text }) {
  const IconComponent = iconMap[icon] || DocumentChartBarIcon; 

  return (
    <div className="border border-gray-300 rounded-lg p-8 text-center bg-white shadow-lg hover:bg-blue-900 hover:text-white transition-all duration-300 group">
      <div className="mb-6 flex justify-center">
        <IconComponent className="w-12 h-12 text-blue-800 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-amber-400  transition-colors duration-300">{title}</h3>
      <p className=" text-left text-base sm:text-lg md:text-xl max-w-4xl text-gray-700  group-hover:text-white transition-colors duration-300">{text}</p>
    </div>
  );
}
