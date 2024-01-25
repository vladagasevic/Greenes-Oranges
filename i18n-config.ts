export const i18n = {
  // These are all the locales you want to support in
  // your application
  locales: ['sr', 'en'],
  // This is the default locale you want to be used when visiting
  // a non-locale prefixed path e.g. `/hello`
  defaultLocale: 'sr',
}

export type I18nConfig = typeof i18n;
export type Locale = I18nConfig["locales"][number];