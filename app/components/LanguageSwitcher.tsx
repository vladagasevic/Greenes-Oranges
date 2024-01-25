'use client';

import Link from 'next/link'
const { i18n } = require('../../i18n-config');

export default function LanguageSwitcher() {
  const { locales } = i18n;

  return (
    <>
      {[...locales].map((locale) => (
        <Link className="navbar_links" key={locale} href={`/${locale}`}>{locale}</Link>
      ))}
    </>
  )
}