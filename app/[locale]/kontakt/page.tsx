"use client"

import { ContactForm } from './form';
import styles from './kontakt.module.css'
import Link from 'next/link';
import GoogleMaps from '../../components/GoogleMaps';

import { FormattedMessage } from "react-intl";
import IntlWrapper from "../../components/IntlWrapper";

type HomeProps = {
  params: { locale: string };
};

export default async function Home({ params: { locale } }: HomeProps) {  
  return (
    <IntlWrapper locale={locale}>
      <main>
        <div className={styles.kontaktContainer}>
            <div className={styles.kontaktImgContainer}>
                <div className={styles.kontaktImg}>
                    <img src="/Resources/kontakt.jpg" alt="Kontakt Img" />
                </div>
            </div>
            <div className={styles.kontaktTitle}>
              <h1><FormattedMessage id="pages.kontakt" /></h1>
            </div>
        </div>
        <div className={styles.kontaktContainerForm}>
        <div className='mapContainer'>
            <GoogleMaps />
          </div>
          <div className='formContainer'>
            <ContactForm a={<FormattedMessage id="pages.kontakt.hvala" />}/>
          </div>

        </div>
        
      </main>
    </IntlWrapper>
  )
}
