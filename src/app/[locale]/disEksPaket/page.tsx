"use client"

import styles from './disEks.module.css'
import Link from 'next/link';

import { FormattedMessage } from "react-intl";
import IntlWrapper from "../../../components/IntlWrapper";

type HomeProps = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: HomeProps) {  
  return (
    <IntlWrapper locale={locale}>
      <main>
        <div className={styles.deContainer}>
            <div className={styles.deImgContainer}>
                <div className={styles.deImg}>
                    <img src="/Resources/disEksPaket/disEksPaketImg.jpg" alt="Disiminacioni Eksploatacioni Paket Img" />
                </div>
            </div>
            <div className={styles.deTitle}>
              <h1><FormattedMessage id="pages.disiminacioni.disiminacioni" /></h1>
            </div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.textFirst}>
            <p> <FormattedMessage id="pages.disiminacioni.disiminacioniTekst" /></p>
          </div>
        </div>
        <div className={styles.textContainer}>
        <hr className={styles.hr}/>
          <div className={styles.textSecond}>
            <div className={styles.textSecondChild}>
              <div className={styles.textSecondChildText}>
                <h3>
                  <FormattedMessage id="pages.disiminacioni.a41" />
                  {/* <Link href="/Resources/pripremnoRazvojniProjekat/Greenes_2.1.docx"><span className="material-symbols-outlined" style={{ color: 'green', fontSize: '20px' }}>download</span></Link> */}
                  <br />
                  <FormattedMessage id="pages.disiminacioni.a42" />
                  {/* <Link href="/Resources/pripremnoRazvojniProjekat/Greenes_2.2.docx"><span className="material-symbols-outlined" style={{ color: 'green', fontSize: '20px' }}>download</span></Link> */}
                  <br />
                  <FormattedMessage id="pages.disiminacioni.a43" />
                  {/* <Link href="/Resources/pripremnoRazvojniProjekat/Greenes_2.3.docx"><span className="material-symbols-outlined" style={{ color: 'green', fontSize: '20px' }}>download</span></Link> */}
                  <br />
                  <FormattedMessage id="pages.disiminacioni.a44" />
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
