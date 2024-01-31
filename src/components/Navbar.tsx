"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

import LanguageSwitcher from '../components/LanguageSwitcher';
import { FormattedMessage } from "react-intl";
import IntlWrapper from "../components/IntlWrapper";
import { getIntl } from "../lib/intl";


import  styles from './Navbar.module.css';
// import '../app/[locale]/globals.css';

type NavbarProps = {
  params: { locale: string };
};

async function Navbar({ params: { locale } }: NavbarProps) {

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

  const intl = await getIntl(locale);
 
  return (
    <IntlWrapper locale={locale}>
          
          <nav className="navbar">
         
            <div className={`${styles.navbar_container}`}>
              <Link href={`/${locale}`} id="navbar_logo"><img src="/Resources/greenes-logo-1.png" alt="Greenes_Logo"/></Link>
            </div>
            <div className={`${styles.navbar_toggle} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass} id="mobile-menu">
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
            </div>
           
            <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
              <div className="dropdown" >
                <li onClick={removeActive} className="navbar_item">
                  <Link href={`/${locale}`} className="navbar_links"><FormattedMessage id="common.nav.radni" /></Link>
                    <div className="dropdown-content">
                      <Link href={`/${locale}/projectMgmt`} >{intl.formatMessage({ id: "pages.projectManagement.projectManagement" })}</Link>
                      <Link href={`/${locale}/pripremnoRazvojniPaket`} >{intl.formatMessage({ id: "pages.pripremno.pripremno" })}</Link>
                      <Link href={`/${locale}/implementacioniPaket`} >{intl.formatMessage({ id: "pages.implementacioni.implementacioni" })}</Link>
                      <Link href={`/${locale}/disEksPaket`}>{intl.formatMessage({ id: "pages.disiminacioni.disiminacioni" })}</Link>
                    </div>
                </li>
              </div>
                <div className="dropdown">
                  <li onClick={removeActive} className="navbar_item">
                    <Link href={`/${locale}`} className="navbar_links"><FormattedMessage id="common.nav.projektna.projektna" /></Link>
                      <div className="dropdown-content">
                        <Link href="https://greenes1.vtsnis.edu.rs/wp-content/uploads/2023/07/KA220-HED-E683AE00_final.pdf" target='_blank'>{intl.formatMessage({ id: "common.nav.projektna.aplikacija" })}</Link>
                        <Link href={`/Resources/projektnaDokumentacija/UPRAVLJANJE_GREENES_PROJEKTNIM_PREOCEDURAMA_${locale}.docx`}>{intl.formatMessage({ id: "common.nav.projektna.management" })}</Link>
                        <Link href={`/Resources/projektnaDokumentacija/QAP_GREENES_${locale}.docx`}>{intl.formatMessage({ id: "common.nav.projektna.qap" })}</Link>
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
                <Link href="/" className="navbar_links"><hr/></Link>
              </li>
            </ul>
          </nav>
       
    </IntlWrapper>
  );
};

export default Navbar;
