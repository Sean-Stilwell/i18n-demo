import React from 'react';
import { useTranslation } from 'react-i18next';
import Message from './component/Message';
import Header from './component/Header';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const swapLanguage = () => {
    if (i18n.language === 'en') {
      changeLanguage('fr');
    } else {
      changeLanguage('en');
    }
  };

  return (
    <div className="App" style={{margin: "10px"}}>
      <Header />
      <h2>{t('greeting')}</h2>
      <p>{t('ex1')}</p>
      <button onClick={() => swapLanguage()}>{t('lang')}</button>
      <Message />
    </div>
  );
}

export default App;
