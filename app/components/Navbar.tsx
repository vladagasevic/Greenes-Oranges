// Trenutno se ne koristi //
"use client";
import { useState } from 'react'

import LanguageSwitcher from '../components/LanguageSwitcher'
import { getIntl } from "../../lib/intl"
import Link from 'next/link'

import  styles from './Navbar.module.css';
import '../[locale]/globals.css';

type LayoutProps = {
  params: { locale: string };
}

function Navbar() {

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
    <div className="App">
      <header className="App-header">
        {/* <nav className={`${styles.navbar}`}> */}
        <nav className="navbar">
          
          <div className="navbar_container">
          {/* <a href={`/${locale}`} id="navbar_logo"><img src="/Resources/greenes-logo-1.png" alt="Greenes_Logo"/></a> */}
          </div>
          

          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
            {/* <a href={`/${locale}`} className="navbar_links">{intl.formatMessage({ id: "common.nav.radni" })}</a> */}
            </li>
            <li onClick={removeActive}>
            {/* <a href={`/${locale}`} className="navbar_links">{intl.formatMessage({ id: "common.nav.projektna" })}</a> */}
            </li>
            <li onClick={removeActive}>
            {/* <a href={`/${locale}/galerija`}  className="navbar_links">{intl.formatMessage({ id: "common.nav.galerija" })}</a> */}
            </li>
            <li onClick={removeActive}>
            {/* <a href="#nasiPartneri" className="navbar_links">{intl.formatMessage({ id: "common.nav.partneri" })}</a> */}
            </li>
            <li onClick={removeActive}>
            {/* <Link href={`/${locale}/kontakt`} className="navbar_links">{intl.formatMessage({ id: "common.nav.kontakt" })}</Link> */}
            </li>
            <li onClick={removeActive}>
            {/* <a href={`/${locale}`} className="navbar_links">E-PLATFORMA</a> */}
            </li>
            <li onClick={removeActive}>
            <a href="/" className="navbar_links"><hr/></a>
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
  );
};


export default Navbar;
