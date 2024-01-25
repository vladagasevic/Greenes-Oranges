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
              <p>
              Osnovni dokumenti koji će regulisati ovu oblast biće PMP – Project management procedures sa planom upravljanja 
              budzetom i QAP- Quality assurance of project results. U okviru ovih dokumenta, biće detaljno opisane nadležnosti, 
              kanali komunikacije i razradjeni mehanizmi praćenja realizacije aktivnosti kao i ocena kvalitet realizovanog. 
              U cilju efikasnog upravljanja projektom, formiraće se dva nezavisna tela: upravljačko telo – PM tim i telo za 
              kontrolu kvaliteta – PQAP tim. U nadležnosti PM tima, biće realizacija svih projektnih aktivnosti u skladu sa 
              predviđenom agendom, dok će u nadležnosti PQAP tima biti evaluacija realizovanih aktivnosti i postignutih rezultata, 
              kao i prevencija potencijlanih rizika. PM tim će biti zadužen za strateško upravljanje projektom i obezbediće da 
              projekat napreduje u skladu sa planom rada. Ova dva tima sastojaće se od predsta-vnika PC, P1-P5 partnera, s tim 
              što članovi jednog tima neće moći da budu članovi drugog tima. Na taj način obezbediće se nazavisno ocenjivanje i 
              evalucija uradjenog. Radiće se redovni izveštaji o napretku realizacije projekta i izveštaji o postignutim rezultatima. 
              Izveštavanje će biti periodično na svaka dva meseca, putem on line kanala za komunikaciju. Izveštaji o toku aktivnosti biće 
              razmatrani na sastancima PM tima (svaka dva meseca – on line), dok će izveštaji o postignutim rezultatima biti razmatrani 
              na sastancima PM tima i PQAP tima na sastancima koji će se održati u organizaciji partnera C, P1 i P2. 
              Važan element praćenje toka realizacije biće transparentnost u izveštavanju i promociji rezultata. 
              Taj efekat imaće institucionalnu, nacionalnu, i regionalnu dimenziju.
              </p>
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
