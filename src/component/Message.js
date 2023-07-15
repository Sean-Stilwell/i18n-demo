import React from 'react';
import { useTranslation } from 'react-i18next';

function Message() {
  const { t } = useTranslation();

  return <p style={{border: '1px solid black'}}>{t('message')}</p>;
}

export default Message;