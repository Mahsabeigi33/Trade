import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center text-center py-16 pb-0 bg-gray-100">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-600 mb-6">
      {t('header.welcome')}
      </h1>
      <p className="text-left text-base sm:text-lg md:text-xl max-w-4xl text-gray-700 mb-10">
      {t('header.description')}
      </p>
      <div className="w-full max-w-4xl mb-10">
        <img
          src="/jet.jpg"
          alt="Trading Experience"
          className="w-full h-auto rounded-lg shadow-xl object-cover"
        />
      </div>
      
    <div className="w-full bg-blue-800 h-56 mb-6 mt-[-6rem]">
        <button className="btn-wide relative top-[100px] bg-white text-blue-600 border-none py-2 px-8 text-lg font-bold rounded-lg hover:bg-blue-500  hover:text-white transition-colors">
        {t('button.contact_us')}
        </button>
      </div>
    </div>
  );
}




