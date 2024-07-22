import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
  if (typeof window === 'undefined') {
    return null;
  }

  const router = useRouter();
  const { i18n } = useTranslation();
  const { pathname, asPath, query } = router;

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    router.push({ pathname, query }, asPath, { locale: lang });
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fa')}>Persian</button>
    </div>
  );
}
