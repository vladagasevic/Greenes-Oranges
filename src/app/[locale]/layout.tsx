//import { Roboto, Outfit } from 'next/font/google'
import Link from 'next/link'

//import { getIntl } from "../../lib/intl"
import Navbar from '../../components/Navbar'
import './globals.css'

type LayoutProps = {
  params: { locale: string };
  children: React.ReactNode;
}

export default async function RootLayout({ params, children }: LayoutProps) {
  const { locale } = params;
  //const intl = await getIntl(locale);
  
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
      </body>
    </html>
  )
}
