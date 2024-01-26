"use client"

import styles from './ip.module.css'
import Link from 'next/link';

import { FormattedMessage } from "react-intl";
import IntlWrapper from "../../../components/IntlWrapper";

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
              <h1><FormattedMessage id="pages.implementacioni.implementacioni" /></h1>
            </div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.textFirst}>
            <p><FormattedMessage id="pages.implementacioni.implementacioniTekst" /></p>
          </div>
        </div>

        <div className={styles.textContainer}>
        <hr className={styles.hr}/>
          <div className={styles.textSecond}>
            <div className={styles.textSecondChild}>
              <div className={styles.textSecondChildText}>
              <h3>
                  <FormattedMessage id="pages.implementacioni.a31" />
                {/* <Link href="/Resources/pripremnoRazvojniProjekat/Greenes_2.1.docx"><span className="material-symbols-outlined" style={{ color: 'green', fontSize: '20px' }}>download</span></Link> */}
                <br />
                  <FormattedMessage id="pages.implementacioni.a32" />
                {/* <Link href="/Resources/pripremnoRazvojniProjekat/Greenes_2.2.docx"><span className="material-symbols-outlined" style={{ color: 'green', fontSize: '20px' }}>download</span></Link> */}
                <br />
                  <FormattedMessage id="pages.implementacioni.a33" />
                {/* <Link href="/Resources/pripremnoRazvojniProjekat/Greenes_2.3.docx"><span className="material-symbols-outlined" style={{ color: 'green', fontSize: '20px' }}>download</span></Link> */}
                <br />
                  <FormattedMessage id="pages.implementacioni.a34" />
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
