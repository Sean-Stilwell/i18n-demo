import React from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return <span className="header">
    <h1>{t('header')}</h1>
    <button>{t('link1')}</button>
    <button>{t('link2')}</button>
  </span>;
}

export default Header;