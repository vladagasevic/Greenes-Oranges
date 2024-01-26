"use client"

import styles from './prp.module.css'
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
        <div className={styles.prpContainer}>
            <div className={styles.prpImgContainer}>
                <div className={styles.prpImg}>
                    <img src="/Resources/pripremnoRazvojniPaket_Img.jpg" alt="Pripremno Razvojni Paket Img" />
                </div>
            </div>
            <div className={styles.prpTitle}>
              <h1><FormattedMessage id="pages.pripremno.pripremno" /></h1>
            </div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.textFirst}>
            <p><FormattedMessage id="pages.pripremno.pripremnoTekst" /></p>
          </div>
        </div>

        <div className={styles.textContainer}>
        <hr className={styles.hr}/>
          <div className={styles.textSecond}>
            <div className={styles.textSecondChild}>
              <div className={styles.textSecondChildText}>
              <h3>
                <FormattedMessage id="pages.pripremno.a21" />
                <Link href={`/Resources/pripremnoRazvojniProjekat/Greenes_2.1_${locale}.docx`}><span className="material-symbols-outlined" style={{ color: 'green', fontSize: '20px' }}>download</span></Link>
                <br />
                <FormattedMessage id="pages.pripremno.a22" />
                <Link href={`/Resources/pripremnoRazvojniProjekat/Greenes_2.2_${locale}.docx`}><span className="material-symbols-outlined" style={{ color: 'green', fontSize: '20px' }}>download</span></Link>
                <br />
                <FormattedMessage id="pages.pripremno.a23" />
                <Link href={`/Resources/pripremnoRazvojniProjekat/Greenes_2.3_${locale}.docx`}><span className="material-symbols-outlined" style={{ color: 'green', fontSize: '20px' }}>download</span></Link>
                <br />
                <FormattedMessage id="pages.pripremno.a24" />
                <Link href={`/Resources/pripremnoRazvojniProjekat/Greenes_2.4_${locale}.docx`}><span className="material-symbols-outlined" style={{ color: 'green', fontSize: '20px' }}>download</span></Link>
                <br />
                <FormattedMessage id="pages.pripremno.a25" />
                <br />
                <FormattedMessage id="pages.pripremno.a26" />
                <br />
                <FormattedMessage id="pages.pripremno.a27" />
                </h3>
              </div>
                
            </div>
            
          </div>

        </div>
      
      </main>
    </IntlWrapper>
  )
}
