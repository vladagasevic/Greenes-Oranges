import React from "react";
import { IntlProvider } from "react-intl";

async function getMessages(locale: string) {
  return await import(`../lang/${locale}.json`);
}

type IntlWrapperProps = {
  locale: string;
  children: React.ReactNode;
};

async function IntlWrapper({ locale, children }: IntlWrapperProps) {
  const messages = await getMessages(locale);

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
}

export default IntlWrapper;
