//import { Roboto, Outfit } from 'next/font/google'

import Link from 'next/link'
import Script from 'next/script'

import Navbar from '../../components/Navbar'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import { getIntl } from "../../lib/intl"
import './globals.css'

type LayoutProps = {
  params: { locale: string };
  children: React.ReactNode;
}

export default async function RootLayout({ params, children }: LayoutProps) {

  const { locale } = params;
  const intl = await getIntl(locale);
  
  return (
    <html>
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Outfit"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <title>Greenes</title>
    </head>
    <body>
      
    <Navbar params={{locale: locale}} />
      {/* <nav className="navbar"> */}
      
          {/* <div className="navbar_container">
              {/* <Link href={`/${locale}`} id="navbar_logo"><img src="/Resources/greenes-logo-1.png" alt="Greenes_Logo"/></Link> */}
          {/* </div>
          <div className="navbar_toggle" id="mobile-menu" >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
          </div>
          <ul className="navbar_menu"> */} 
            {/* <div className="dropdown" >
              <li className="navbar_item">
                  <Link href={`/${locale}`} className="navbar_links">{intl.formatMessage({ id: "common.nav.radni" })}</Link>
                  <div className="dropdown-content">
                    <Link href={`/${locale}/projectMgmt`} >{intl.formatMessage({ id: "pages.projectManagement.projectManagement" })}</Link>
                    <Link href={`/${locale}/pripremnoRazvojniPaket`} >{intl.formatMessage({ id: "pages.pripremno.pripremno" })}</Link>
                    <Link href={`/${locale}/implementacioniPaket`} >{intl.formatMessage({ id: "pages.implementacioni.implementacioni" })}</Link>
                    <Link href={`/${locale}/disEksPaket`}>{intl.formatMessage({ id: "pages.disiminacioni.disiminacioni" })}</Link>
                  </div>
              </li>
              </div>
              <div className="dropdown">
              <li className="navbar_item">
                  <Link href={`/${locale}`} className="navbar_links">{intl.formatMessage({ id: "common.nav.projektna.projektna" })}</Link>
                  <div className="dropdown-content">
                    <Link href="https://greenes1.vtsnis.edu.rs/wp-content/uploads/2023/07/KA220-HED-E683AE00_final.pdf" target='_blank'>{intl.formatMessage({ id: "common.nav.projektna.aplikacija" })}</Link>
                    <Link href={`/Resources/projektnaDokumentacija/UPRAVLJANJE_GREENES_PROJEKTNIM_PREOCEDURAMA_${locale}.docx`}>{intl.formatMessage({ id: "common.nav.projektna.management" })}</Link>
                    <Link href={`/Resources/projektnaDokumentacija/QAP_GREENES_${locale}.docx`}>{intl.formatMessage({ id: "common.nav.projektna.qap" })}</Link>
                  </div>
              </li>
              </div>
              <li className="navbar_item">
                  <Link href={`/${locale}/galerija`}  className="navbar_links">{intl.formatMessage({ id: "common.nav.galerija" })}</Link>
              </li>
              <div className="dropdown">
              <li className="navbar_item">
                  <Link href="#nasiPartneri" className="navbar_links">{intl.formatMessage({ id: "common.nav.partneri" })}</Link>
                  <div className="dropdown-content">
                    <Link href="https://www.energetika-mb.si/" target='_blank'>Energetika Maribor</Link>
                    <Link href="https://jugo-impex.com/en/" target='_blank'>Jugo-Impex</Link>
                    <Link href="https://uklo.edu.mk/" target='_blank'>Univerzitet Sv Kliment Ohridski</Link>
                    <Link href="https://www.um.si/en/home-page/" target='_blank'>University of Maribor</Link>
                    <Link href="https://mztinzenering.com.mk/" target='_blank'>MZT Inzenjering</Link>
                  </div>
              </li>
              </div>
              <li className="navbar_item">
                  <Link href={`/${locale}/kontakt`} className="navbar_links">{intl.formatMessage({ id: "common.nav.kontakt" })}</Link>
              </li>
              <li className="navbar_item">
                  <Link href={`/${locale}`} className="navbar_links">{intl.formatMessage({ id: "common.nav.e" })}</Link>
              </li>
              <li className="navbar_item">
                <LanguageSwitcher />
              </li>
               <li className="navbar_itemhr">
                  <Link href="/" className="navbar_links"><hr/></Link>
              </li> */}
              
          {/* </ul> */}
      {/* </nav> */}
        {children}
        <footer>
          <div className="footerContainer">
            <div className="footerText">
              <p><span className="material-symbols-outlined">location_on</span> Aleksandra Medvedeva 20, Niš</p>
              <p><span className="material-symbols-outlined">call</span> 018 588 211</p>
              <p><span className="material-symbols-outlined">mail</span> info@akademijanis.edu.rs</p>
            </div>
            <div className="footerSocial">
              <ul className="social">
                <li><Link href="https://www.facebook.com/profile.php?id=61554722321344" target='_blank'><img src="/Resources/facebook.svg" alt="Facebook" /></Link></li>
                <li><Link href=""><img src="/Resources/linkedin.svg" alt="Linkedin" /></Link></li>
                <li><Link href=""><img src="/Resources/instagram.svg" alt="Instagram" /></Link></li>
              </ul>
              
            </div>
            <div className="badge">
              <img className="eu" src="/Resources/eu.png" alt="" />
            
            </div>
    
          </div>
          <div className='footerBottom'>
              <p>Copyright © 2023 Greenes</p>
            </div>
            
        </footer>
        {/* <Script id="my-script">{`
        console.log('Hello world!');
        const menu = document.querySelector('#mobile-menu');
        const menuLinks = document.querySelector('.navbar_menu');
        console.log("JS Skripta");
        
        menu.addEventListener('click', function () {
            menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active');
        });
        `}</Script> */}
      </body>
    </html>
  )
}


