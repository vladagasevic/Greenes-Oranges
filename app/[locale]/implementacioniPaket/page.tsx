"use client"

import styles from './ip.module.css'
import Link from 'next/link';

import { FormattedMessage } from "react-intl";
import IntlWrapper from "../../components/IntlWrapper";

type HomeProps = {
  params: { locale: string };
};

export default async function Home({ params: { locale } }: HomeProps) {  
  return (
    <IntlWrapper locale={locale}>
      <main>
        <div className={styles.ipContainer}>
            <div className={styles.ipImgContainer}>
                <div className={styles.ipImg}>
                    <img src="/Resources/implementacioniPaket/implementacioniPaketImg.png" alt="Implementacioni Paket Img" />
                </div>
            </div>
            <div className={styles.ipTitle}>
              <h1>Implementacioni paket</h1>
            </div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.textFirst}>
            <p>
            U okviru ovog radnog paketa, obaviće se implementacije rezultata postignutih 
            u okviru WP2. Ovaj radni paket obuhvata aktivnosti vezane za usvajanje i 
            prezentaciju inoviranih sadržaja. Rezultat će biti usvojeni inovirani sadržaji 
            iz oblasti zaštite životne sredine. Takođe, ovaj radni paket obuhvata aktivnosti 
            koje se odnose na implementaciju razvijenih sadržaja predmeta i tema u nastavne 
            planove i programe master studija, kao i implementaciju unapredjenog modela za on line učenje. 
            Ovim radnim paketom će se razviti novi model za studentske mobilnosti,usaglašen prema komplementarnosti 
            sva tri studijska programa PE, a naročito u skladu sa inoviranim programskim sadržajima. U okviru ovog paketa, 
            realizovaće se aktivnosti na implementaciji LLL kurseva, pri čemu će se pažnja posvetiti posebeno interakciji 
            medju partnerima PE i PI. Cilj ovog radnog paketa jeste stvaranje svih pravnih i tehničkih uslova za ostvarivanje 
            ciljeva projekta Greenes. Planirane aktivnosti u okviru ovog radnog paketa su:
            </p>
          </div>
        </div>

        <div className={styles.textContainer}>
        <hr className={styles.hr}/>
          <div className={styles.textSecond}>
            <div className={styles.textSecondChild}>
              <div className={styles.textSecondChildText}>
              <h3>
                  A3.1.Usvanja inovrinaih sadržaja predmeta
                {/* <Link href="/Resources/pripremnoRazvojniProjekat/Greenes_2.1.docx"><span className="material-symbols-outlined" style={{ color: 'green', fontSize: '20px' }}>download</span></Link> */}
                <br />
                  A3.2.Usvajanje sadržaja LLL kurseva
                {/* <Link href="/Resources/pripremnoRazvojniProjekat/Greenes_2.2.docx"><span className="material-symbols-outlined" style={{ color: 'green', fontSize: '20px' }}>download</span></Link> */}
                <br />
                  A3.3.Upis studenata.
                {/* <Link href="/Resources/pripremnoRazvojniProjekat/Greenes_2.3.docx"><span className="material-symbols-outlined" style={{ color: 'green', fontSize: '20px' }}>download</span></Link> */}
                <br />
                  A3.4 Pokretanje e platforme znanja
                {/* <Link href="/Resources/pripremnoRazvojniProjekat/Greenes_2.4.docx"><span className="material-symbols-outlined" style={{ color: 'green', fontSize: '20px' }}>download</span></Link> */}
                <br />
                </h3>
              </div>
                
            </div>
            
          </div>

        </div>
      
      </main>
    </IntlWrapper>
  )
}