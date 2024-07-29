import { appWithTranslation } from './i18n';
import 'keen-slider/keen-slider.min.css';

import './globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);