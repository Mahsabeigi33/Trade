import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation('common');
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 pb-0  bg-gray-900 ">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-amber-400 mb-6">
      {t('experience.welcome')}
      </h1>
      <p className="text-left text-base sm:text-lg md:text-xl max-w-4xl text-white mb-10">
      {t('experience.description')}
      </p>
      <div className="w-full max-w-4xl mb-10">
        <img
          src="/jet.jpg"
          alt="Trading Experience"
          className="w-full h-auto rounded-lg shadow-xl object-cover"
        />
      </div>
      
    <div className="w-full bg-gray-200 h-56 mb-6 mt-[-6rem]">
        <button className="btn-wide relative top-[100px] bg-blue-600 text-white border-none py-2 px-8 text-lg font-bold rounded-lg hover:bg-gray-500  hover:text-black transition-colors">
        {t('button.contact_us')}
        </button>
      </div>
    </div>
  );
}




