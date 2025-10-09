'use client';

import { ReactNode } from 'react';
import { IntlProvider } from 'next-intl';

interface IntlProviderProps {
  children: ReactNode;
  messages: Record<string, string>;
  locale: string;
}

export function NextIntlProvider({ children, messages, locale }: IntlProviderProps) {
  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
}
