//import { Roboto, Outfit } from 'next/font/google'
import './globals.css'
import Link from 'next/link';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Outfit"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <title>Greenes</title>
    </head>
    <body>
      <nav className="navbar">
          <div className="navbar_container">
              <a href="/" id="navbar_logo"><img src="Resources/greenes-logo-1.png" alt="Greenes_Logo"/></a>
          </div>
          <div className="navbar_toggle" id="mobile-menu">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
          </div>
          <ul className="navbar_menu">
            <div className="dropdown">
              <li className="navbar_item">
                  <a href="/" className="navbar_links">RADNI PAKET</a>
                  <div className="dropdown-content">
                    <Link href="/projectMgmt" >Project Managment</Link>
                    <Link href="/pripremnoRazvojniPaket" >Pripremno razvojni paket</Link>
                    <Link href="/implementacioniPaket" >Implementacioni paket</Link>
                    <Link href="/disEksPaket">Disiminacioni - Eksploatacioni paket</Link>
                  </div>
              </li>
              </div>
              <div className="dropdown">
              <li className="navbar_item">
                  <a href="/" className="navbar_links">PROJEKTNA DOKUMENTACIJA</a>
                  <div className="dropdown-content">
                    <Link href="https://greenes1.vtsnis.edu.rs/wp-content/uploads/2023/07/KA220-HED-E683AE00_final.pdf" target='_blank'>Projektna aplikacija</Link>
                    <Link href="Resources/projektnaDokumentacija/UPRAVLJANJE_GREENES_PROJEKTNIM_PREOCEDURAMA.docx">Procedura upravljanja projektom</Link>
                    <Link href="Resources/projektnaDokumentacija/QAP_GREENES_.docx">QAP Procedura</Link>
                  </div>
              </li>
              </div>
              <li className="navbar_item">
                  <a href="/galerija" className="navbar_links">GALERIJA</a>
              </li>
              <li className="navbar_item">
                  <a href="#nasiPartneri" className="navbar_links">PARTNERI</a>
              </li>
              <li className="navbar_item">
                  <Link href="/kontakt" className="navbar_links">KONTAKT</Link>
              </li>
              <li className="navbar_item">
                  <a href="/" className="navbar_links">E-PLATFORMA</a>
              </li>
          </ul>
      </nav>
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
                <li><a href="/"><img src="Resources/facebook.svg" alt="" /></a></li>
                <li><a href="/"><img src="Resources/linkedin.svg" alt="" /></a></li>
                <li><a href="/"><img src="Resources/instagram.svg" alt="" /></a></li>
              </ul>
              
            </div>
            <div className="badge">
              <img className="eu" src="Resources/eu.png" alt="" />
            
            </div>
    
          </div>
          <div className='footerBottom'>
              <p>Copyright © 2023 Greenes</p>
            </div>
            
        </footer>
       
        <script src="index.js"></script>
      </body>
    </html>
  )
}
