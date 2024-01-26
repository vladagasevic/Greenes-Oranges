"use client";

import { useState } from 'react'
import Link from 'next/link'

import LanguageSwitcher from '../components/LanguageSwitcher'
import { FormattedMessage } from "react-intl";
import IntlWrapper from "../components/IntlWrapper";

import  styles from './Navbar.module.css';
import '../[locale]/globals.css';

type NavbarProps = {
  params: { locale: string };
};

function Navbar({ params: { locale } }: NavbarProps) {

  // adding the states 
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  }

  return (
    <IntlWrapper locale={locale}>
      <div className="App">
        <header className="App-header">
          {/* <nav className={`${styles.navbar}`}> */}
          <nav className="navbar">
            
            <div className="navbar_container">
              <Link href={`/${locale}`} id="navbar_logo"><img src="/Resources/greenes-logo-1.png" alt="Greenes_Logo"/></Link>
            </div>
            

            <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
              <li onClick={removeActive}>
                <Link href={`/${locale}`} className="navbar_links"><FormattedMessage id="common.nav.radni" /></Link>
              </li>
              <li onClick={removeActive}>
              <Link href={`/${locale}`} className="navbar_links"><FormattedMessage id="common.nav.projektna.projektna" /></Link>
              </li>
              <li onClick={removeActive}>
              <Link href={`/${locale}/galerija`}  className="navbar_links"><FormattedMessage id="common.nav.galerija" /></Link>
              </li>
              <li onClick={removeActive}>
              <Link href="#nasiPartneri" className="navbar_links"><FormattedMessage id="common.nav.partneri" /></Link>
              </li>
              <li onClick={removeActive}>
              <Link href={`/${locale}/kontakt`} className="navbar_links"><FormattedMessage id="common.nav.kontakt" /></Link>
              </li>
              <li onClick={removeActive}>
              <Link href={`/${locale}`} className="navbar_links"><FormattedMessage id="common.nav.e" /></Link>
              </li>
              <li onClick={removeActive}>
              <Link href="/" className="navbar_links"><hr/></Link>
              </li>
            </ul>

            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
            </div>
          </nav>
        </header>
      </div>
    </IntlWrapper>
  );
};

export default Navbar;
