"use client"

import { useState } from 'react';
import Link from 'next/link';

import { FormattedMessage } from "react-intl";
import IntlWrapper from "../components/IntlWrapper";
import LanguageSwitcher from '../components/LanguageSwitcher';

import  styles from './Navbar.module.css';
// import '../app/[locale]/globals.css';

type NavbarProps = {
  params: { locale: string };
};

export default async function Navbar({ params: { locale } }: NavbarProps) {
  // adding the states 
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  }

  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  }
 
  return (
    <IntlWrapper locale={locale}>
      <nav className="navbar">
        <div className={styles.navbar_container}>
          <Link href={`/${locale}`} id="navbar_logo"><img src="/Resources/greenes-logo-1.png" alt="Greenes_Logo"/></Link>
        </div>
        <div className={`${styles.navbar_toggle} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass} id="mobile-menu">
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
          <div className="dropdown" >
            <li onClick={removeActive} className="navbar_item">
              <Link href={`/${locale}`} className="navbar_links"><FormattedMessage id="common.nav.radni" /></Link>
              <div className="dropdown-content">
                <Link href={`/${locale}/projectMgmt`} ><FormattedMessage id="pages.projectManagement.projectManagement" /></Link>
                <Link href={`/${locale}/pripremnoRazvojniPaket`} ><FormattedMessage id="pages.pripremno.pripremno" /></Link>
                <Link href={`/${locale}/implementacioniPaket`} ><FormattedMessage id="pages.implementacioni.implementacioni" /></Link>
                <Link href={`/${locale}/disEksPaket`}><FormattedMessage id="pages.disiminacioni.disiminacioni" /></Link>
              </div>
            </li>
          </div>
            <div className="dropdown">
              <li onClick={removeActive} className="navbar_item">
                <Link href={`/${locale}`} className="navbar_links"><FormattedMessage id="common.nav.projektna.projektna" /></Link>
                <div className="dropdown-content">
                  <Link href="https://greenes1.vtsnis.edu.rs/wp-content/uploads/2023/07/KA220-HED-E683AE00_final.pdf" target='_blank'><FormattedMessage id="common.nav.projektna.aplikacija" /></Link>
                  <Link href={`/Resources/projektnaDokumentacija/UPRAVLJANJE_GREENES_PROJEKTNIM_PREOCEDURAMA_${locale}.docx`}><FormattedMessage id="common.nav.projektna.management" /></Link>
                  <Link href={`/Resources/projektnaDokumentacija/QAP_GREENES_${locale}.docx`}><FormattedMessage id="common.nav.projektna.qap" /></Link>
                </div>
              </li>
            </div>
          <li onClick={removeActive} className="navbar_item">
            <Link href={`/${locale}/galerija`}  className="navbar_links"><FormattedMessage id="common.nav.galerija" /></Link>
          </li>
          <div className="dropdown">
            <li onClick={removeActive} className="navbar_item">
              <Link href="#nasiPartneri" className="navbar_links"><FormattedMessage id="common.nav.partneri" /></Link>
              <div className="dropdown-content">
                <Link href="https://www.energetika-mb.si/" target='_blank'>Energetika Maribor</Link>
                <Link href="https://jugo-impex.com/en/" target='_blank'>Jugo-Impex</Link>
                <Link href="https://uklo.edu.mk/" target='_blank'>Univerzitet Sv Kliment Ohridski</Link>
                <Link href="https://www.um.si/en/home-page/" target='_blank'>University of Maribor</Link>
                <Link href="https://mztinzenering.com.mk/" target='_blank'>MZT Inzenjering</Link>
              </div>
            </li>
          </div>
          <li onClick={removeActive} className="navbar_item">
            <Link href={`/${locale}/kontakt`} className="navbar_links"><FormattedMessage id="common.nav.kontakt" /></Link>
          </li>
          <li onClick={removeActive} className="navbar_item">
            <Link href={`/${locale}`} className="navbar_links"><FormattedMessage id="common.nav.e" /></Link>
          </li>
          <li onClick={removeActive} className="navbar_item">
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>
    </IntlWrapper>
  );
};
