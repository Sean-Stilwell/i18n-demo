import React from 'react';
import { useTranslation } from 'react-i18next';

function Message() {
  const { t } = useTranslation();

  return <p>{t('message')}</p>;
}

export default Message;