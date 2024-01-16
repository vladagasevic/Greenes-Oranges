//import { Roboto, Outfit } from 'next/font/google'
import './globals.css'

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
              <li className="navbar_item">
                  <a href="/radni_paket" className="navbar_links">RADNI PAKET</a>
              </li>
              <li className="navbar_item">
                  <a href="/projektna_dokumentacija" className="navbar_links">PROJEKTNA DOKUMENTACIJA</a>
              </li>
              <li className="navbar_item">
                  <a href="/galerija" className="navbar_links">GALERIJA</a>
              </li>
              <li className="navbar_item">
                  <a href="/partneri" className="navbar_links">PARTNERI</a>
              </li>
              <li className="navbar_item">
                  <a href="/kontakt" className="navbar_links">KONTAKT</a>
              </li>
              <li className="navbar_item">
                  <a href="/" className="navbar_links">E-PLATFORMA</a>
              </li>
          </ul>
      </nav>
        {children}
        Aleksandra Medvedeva 20, Niš<br/>
        018 588 211<br/>
        info@akademijanis.edu.rs<br/>
        <br/>
        Copyright © 2023 Oranges
        <script src="index.js"></script>
      </body>
    </html>
  )
}
