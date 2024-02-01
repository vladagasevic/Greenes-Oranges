//import Image from "next/image"
import Link from "next/link";

import styles from "./page.module.css"
import Slides from '../../components/Slides'
import DigitalizacijaModal from '../../components/modal'
import { getIntl } from "../../lib/intl"

type HomeProps = {
  params: { locale: string };
};

export default async function Home({ params: { locale } }: HomeProps) {  
  const intl = await getIntl(locale);
  const modalLocale = [
    intl.formatMessage({ id: "pages.home.oblast" }),
    intl.formatMessage({ id: "pages.home.oblastTekst" }),
    intl.formatMessage({ id: "pages.home.zatvori" })
  ]

  return (
    <main>
      <Slides/>
      <div className={styles.oranges}>
        <h1>{intl.formatMessage({ id: "pages.home.greenEnergy" })}</h1>
      </div>
      <div className={styles.whyGreenesContainer}>
        <div className={styles.whyGreenesTextContainer}>
          <h1>{intl.formatMessage({ id: "pages.home.zasto" })}</h1>
          <hr className={styles.hr}/>
          <h3>{intl.formatMessage({ id: "pages.home.zastoTekst" })}</h3>
          <div className={styles.whyGreenesBtn}>
            <DigitalizacijaModal params={{modalLocale: modalLocale}} /> 
          </div>
        </div>
        <div className={styles.whyGreenesImageContainer}>
          <div className={styles.whyGreenesImage}>
            <img src="/Resources/whyGreenes_img.jpg" alt="Why Greenes"/>
          </div>
        </div>
      </div>
      <div className={styles.ciljeviContainer}>
        <div className={styles.ciljeviTitleContainer}>
          <hr className={styles.hr}/>
          <h1>{intl.formatMessage({ id: "pages.home.ciljevi" })}</h1>
        </div>
        <div className={styles.ciljeviContainerColumn}>
          <div className={styles.ciljevi}>
            <span className="material-symbols-outlined" style={{ color: 'green', fontSize: '40px' }}>flag</span>
            <h3>{intl.formatMessage({ id: "pages.home.opsti" })}</h3>
            <p>{intl.formatMessage({ id: "pages.home.opstiTekst" })}</p>
          </div>
          <div className={styles.ciljevi}>
            <span className="material-symbols-outlined" style={{ color: 'green', fontSize: '40px' }}>linked_services</span>
            <h3>{intl.formatMessage({ id: "pages.home.aspekt" })}</h3>
            <p>{intl.formatMessage({ id: "pages.home.aspektTekst" })}</p>
          </div>
          <div className={styles.ciljevi}>
          <span className="material-symbols-outlined" style={{ color: 'green', fontSize: '40px' }}>verified</span>
            <h3>{intl.formatMessage({ id: "pages.home.kompetencije" })}</h3>
            <p>{intl.formatMessage({ id: "pages.home.kompetencijeTekst" })}</p>
          </div>
        </div>
      </div>
      <div className={styles.obnovljiviIzvoriContainer}>
        <div className={styles.obnovljiviIzvoriTitleContainer}>
          <hr className={styles.hr}/>
          <h1>{intl.formatMessage({ id: "pages.home.obnovljivi" })}</h1>
        </div>
        <div className={styles.obnovljiviIzvoriImageContainerColumn}>
          <div className={styles.obnovljiviIzvoriItem}>
            <img src="/Resources/Biomass_400px.jpg" alt="Biomass_Energy_Img" />
            <p>{intl.formatMessage({ id: "pages.home.biomaseTekst" })}</p>
            <h4>{intl.formatMessage({ id: "pages.home.biomase" })}</h4>
          </div>
          <div className={styles.obnovljiviIzvoriItem}>
            <img src="/Resources/Geothermal_400px.jpg" alt="Geothermal_Energy_Img" />
            <p>{intl.formatMessage({ id: "pages.home.geotermalnaTekst" })}</p>
            <h4>{intl.formatMessage({ id: "pages.home.geotermalna" })}</h4>
          </div>
          <div className={styles.obnovljiviIzvoriItem}>
            <img src="/Resources/HydroPower_400px.jpg" alt="HydroEnergy_Img" />
            <p>{intl.formatMessage({ id: "pages.home.hidroenergijaTekst" })}</p>
            <h4>{intl.formatMessage({ id: "pages.home.hidroenergija" })}</h4>
          </div>
          <div className={styles.obnovljiviIzvoriItem}>
            <img src="/Resources/SolarPanels_400px.jpg" alt="SolarEnergy_Img" />
            <p>{intl.formatMessage({ id: "pages.home.solarniTekst" })}</p>
            <h4>{intl.formatMessage({ id: "pages.home.solarni" })}</h4>
          </div>
          <div className={styles.obnovljiviIzvoriItem}>
            <img src="/Resources/WindEnergy_400px.jpg" alt="WindEnergy_Img" />
            <p>{intl.formatMessage({ id: "pages.home.vetrogeneratoriTekst" })}</p>
            <h4>{intl.formatMessage({ id: "pages.home.vetrogeneratori" })}</h4>
          </div>
          <div className={styles.obnovljiviIzvoriItem}>
            <img src="/Resources/HydroEnergy_400px.jpg" alt="HydrogneEnergy_Img" />
            <p>{intl.formatMessage({ id: "pages.home.vodonikaTekst" })}</p>
            <h4>{intl.formatMessage({ id: "pages.home.vodonika" })}</h4>
          </div>
        </div>
        <div className={styles.nasiPartneriContainer}>
          <div className={styles.titleContainer}>
            <hr className={styles.hr}/>
            <h1 id="nasiPartneri">{intl.formatMessage({ id: "pages.home.partneri" })}</h1>
          </div>
          <div className={styles.nasiPartneriSlider}>
            <div>
              <Link href="https://www.energetika-mb.si/" target="_blank"><img src="/Resources/EnergetikaMaribor_Color.png" alt="" /></Link>
            </div>
            <div>
              <Link href="https://jugo-impex.com/en/" target="_blank"><img src="/Resources/JugoImpex.png" alt="" /></Link>
            </div>
            <div>
              <Link href="https://uklo.edu.mk/" target="_blank"><img src="/Resources/UniverzitetKlimentOhridski.png" alt="" /></Link>
            </div>
            <div>
              <a href="https://www.um.si/en/home-page/" target="_blank"><img src="/Resources/UniversityOfMaribor.png" alt="" /></a>
            </div>
            <div>
              <a href="https://mztinzenering.com.mk/" target="_blank"><img src="/Resources/mztInzenjering.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
