"use client"

import styles from './projectMgmt.module.css'

import { FormattedMessage } from "react-intl";
import IntlWrapper from "../../components/IntlWrapper";

type HomeProps = {
  params: { locale: string };
};

export default async function Home({ params: { locale } }: HomeProps) {  
    return (
      <IntlWrapper locale={locale}>
        <main>
          <div className={styles.projectMgmtContainer}>
              <div className={styles.projectMgmtImgContainer}>
                  <div className={styles.projectMgmtImg}>
                      <img src="/Resources/projectMgmt_img.jpg" alt="" />
                  </div>
              </div>
              <div className={styles.projectMgmtTitle}>
                <h1><FormattedMessage id="pages.projectManagement.projectManagement" /></h1>
              </div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.textFirst}>
              <p><FormattedMessage id="pages.projectManagement.projectManagementTekst" /></p>
            </div>
          </div>

          <div className={styles.textContainer}>
          <hr className={styles.hr}/>
            <div className={styles.textSecond}>
              <div className={styles.textSecondChild}>
                <div className={styles.textSecondChildTitle}>
                  <h2>PMP tim:</h2>
                </div>
                <div className={styles.textSecondChildText}>
                <h3>
                    PC - Prof. Aleksandra Boričić - 
                    <br />
                    predsedavajući
                    <br />
                    P1 - Prof. Filip Kokalj
                    <br />
                    P2 - Prof Stojanče Nusev
                    <br />
                    P3 - Miljana Šćekić
                    <br />
                    P4 - Ivan Angelin
                    <br />
                    P5 - Boris Novak
                  </h3>
                </div>
                  
              </div>
              <div className={styles.textSecondChild}>
                <div className={styles.textSecondChildTitle}>
                  <h2>PQAP tim:</h2>
                </div>
                <div className={styles.textSecondChildText}>
                  <h3>
                    PC - Prof. Boban Cvetanović
                    <br />
                    P1 - Prof. Niko Samec
                    <br />
                    P2 - Prof. Mitko Kostov – Predsedavajući
                    <br />
                    P3 - Ljljana Kostić Destopović
                    <br />
                    P4 - Angelina Petrovska
                    <br />
                    P5 - Ljubo Germič
                  </h3>
                </div>
                
              </div>
              <div className={styles.textSecondChild}>
                <div className={styles.textSecondChildTitle}>
                  <h2>Radni paket:</h2>
                </div>
                <div className={styles.textSecondChildText}>
                  <h3>
                    WP1- Prof. Alakesandra Boričić-PC
                    <br />
                    WP2. Prof. Filip Kokalj- P1
                    <br />
                    WP3. Prof. Gordana Janevska
                    <br />
                    WP4. Prof. Dejan Blagojević-PC
                  </h3>
                </div>
                
              </div>
            </div>

          </div>
        
        </main>
      </IntlWrapper>
    )
  }
