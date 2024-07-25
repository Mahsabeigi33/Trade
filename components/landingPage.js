import { useTranslation } from 'react-i18next';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function LandingPage() {
  const { t } = useTranslation('common');

  return (
    <section className="relative bg-blueGray-50">
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div 
          className="absolute top-0 w-full h-full bg-center bg-cover" 
          style={{ backgroundImage: "url('./contact.jpg')" }}
        >
          <div className="absolute top-0 w-full h-full bg-gray-700 opacity-50"></div>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div >
                <h1 className="text-amber-400 font-semibold text-5xl">
                  {t('landingPage.title')}
                </h1>
                {/* <p className="mt-4 text-lg text-blueGray-200">
                  {t('landingPage.description')}
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <div 
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" 
          style={{ transform: 'translateZ(0px)' }}
        >
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </div>
      <section className="pb-10 bg-blueGray-200 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <FaPhoneAlt className="text-white" size={24} />
                  </div>
                  <h6 className="text-xl font-semibold">{t('landingPage.contact.phone.title')}</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    {t('landingPage.contact.phone.description')}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <FaEnvelope  size={24} />
                  </div>
                  <h6 className="text-xl font-semibold">{t('landingPage.contact.email.title')}</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    {t('landingPage.contact.email.description')}
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <FaMapMarkerAlt className="text-white" size={24} />
                  </div>
                  <h6 className="text-xl font-semibold">{t('landingPage.contact.address.title')}</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    {t('landingPage.contact.address.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
