"use client";

import { useState, useEffect } from "react"
//import Image from "next/image"
import useSWR from 'swr';

import styles from "./page.module.css"
import DigitalizacijaModal from './modal/modal'

import { FormattedMessage } from "react-intl";
import IntlWrapper from "../components/IntlWrapper";

function Slides() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR('/readcovers', fetcher);

  const [id, setId] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => setId((id + 1) % data.length), 4000);
  // });

  // function Dot({num}: {num: number}) {
  //   return (
  //     <span className={styles.dot} style={{ backgroundColor: num == id ? "Green" : "none" }} onClick={() => {
  //       setId(num);
  //     }} />
  //   )
  // }

  function leftClick() {
      setId(id === 0 ? data.length - 1 : id - 1);
   }

  function rightClick() {
      setId(id === data.length - 1 ? 0 : id + 1);
  }

  return (
    <>
      <div className={styles.sliderMainContainer}>
        <div className={styles.sliderContainer}>
          <div className={styles.slider}>
            {data && data.map((cover: string, num: number) => (
              <img className={styles.fade} src={cover} alt={cover} key={cover} style={{ display: num == id ? "block" : "none" }}/>
            ))}
            <h1 className={styles.leftArrow}>
              <span className="material-symbols-outlined" onClick={leftClick} style={{fontSize: "48px"}}>
                chevron_left
              </span>
            </h1>
            <h1 className={styles.rightArrow}>
              <span className="material-symbols-outlined" onClick={rightClick} style={{ fontSize: "48px" }}>
                chevron_right
              </span>
            </h1>
          </div>
        </div>
        <div className={styles.sliderTextContainer}>
          <h1>GREENES KA220-HED</h1>
        </div>
      </div>
      {/* <div style={{textAlign: "center"}}>
        {covers.map((_cover, num) => (
          <Dot key={`dot_${num}`} num={num}/>
        ))}
      </div> */}
    </>
  )
}

type HomeProps = {
  params: { locale: string };
};

export default async function Home({ params: { locale } }: HomeProps) {  
  const [showModal, setShowModal] = useState(false);

  return (
    <IntlWrapper locale={locale}>
      <main>
        <Slides/>
        <div className={styles.oranges}>
          <h1><FormattedMessage id="pages.home.greenEnergy" /></h1>
        </div>
        <div className={styles.whyGreenesContainer}>
        <div className={styles.whyGreenesImageContainer}>
              <div className={styles.whyGreenesImage}>
                <img src="/Resources/whyGreenes_img.jpg" alt="Why Greenes"/>
              </div>
            </div>
          <div className={styles.whyGreenesTextContainer}>
            <h1><FormattedMessage id="pages.home.zasto" /></h1>
            <hr className={styles.hr}/>
            <h3><FormattedMessage id="pages.home.zastoTekst" /></h3>
            <div className={styles.whyGreenesBtn}>
              {/* <button className={styles.button}>OBLAST DIGITALIZACIJE</button> */}
              {/* <button onClick={() => setShowModal(true)} className={styles.button}>OBLAST DIGITALIZACIJE</button> */}
              <DigitalizacijaModal a={<FormattedMessage id="pages.home.oblast" />} b={<FormattedMessage id="pages.home.oblastTekst" />} c={<FormattedMessage id="pages.home.zatvori" />} />
              {/* <a href="/" className={styles.button}>OBLASTI DIGITALIZACIJE</a> */}
              
            </div>
          </div>
            
        </div>
        <div className={styles.ciljeviContainer}>
          <div className={styles.ciljeviTitleContainer}>
            <hr className={styles.hr}/>
            <h1><FormattedMessage id="pages.home.ciljevi" /></h1>
          </div>
          <div className={styles.ciljeviContainerColumn}>
            <div className={styles.ciljevi}>
            <span className="material-symbols-outlined" style={{ color: 'green', fontSize: '40px' }}>flag</span>
              <h3><FormattedMessage id="pages.home.opsti" /></h3>
              <p><FormattedMessage id="pages.home.opstiTekst" /></p>
            </div>
            <div className={styles.ciljevi}>
            <span className="material-symbols-outlined" style={{ color: 'green', fontSize: '40px' }}>linked_services</span>
            <h3><FormattedMessage id="pages.home.aspekt" /></h3>
            <p><FormattedMessage id="pages.home.aspektTekst" /></p>
            </div>
            <div className={styles.ciljevi}>
            <span className="material-symbols-outlined" style={{ color: 'green', fontSize: '40px' }}>verified</span>
              <h3><FormattedMessage id="pages.home.kompetencije" /></h3>
              <p><FormattedMessage id="pages.home.kompetencijeTekst" /></p>
            </div>
          </div>
        </div>

        <div className={styles.obnovljiviIzvoriContainer}>
          <div className={styles.obnovljiviIzvoriTitleContainer}>
            <hr className={styles.hr}/>
            <h1><FormattedMessage id="pages.home.obnovljivi" /></h1>
          </div>
          <div className={styles.obnovljiviIzvoriImageContainerColumn}>

            <div className={styles.obnovljiviIzvoriItem}>
              <img src="/Resources/Biomass_400px.jpg" alt="Biomass_Energy_Img" />
              <p><FormattedMessage id="pages.home.biomaseTekst" /></p>
              <h4><FormattedMessage id="pages.home.biomase" /></h4>
            
            </div>
            <div className={styles.obnovljiviIzvoriItem}>
              <img src="/Resources/Geothermal_400px.jpg" alt="Geothermal_Energy_Img" />
              <p><FormattedMessage id="pages.home.geotermalnaTekst" /></p>
              <h4><FormattedMessage id="pages.home.geotermalna" /></h4>
            </div>
            <div className={styles.obnovljiviIzvoriItem}>
              <img src="/Resources/HydroPower_400px.jpg" alt="HydroEnergy_Img" />
              <p><FormattedMessage id="pages.home.hidroenergijaTekst" /></p>
              <h4><FormattedMessage id="pages.home.hidroenergija" /></h4>
            </div>
            <div className={styles.obnovljiviIzvoriItem}>
              <img src="/Resources/SolarPanels_400px.jpg" alt="SolarEnergy_Img" />
              <p><FormattedMessage id="pages.home.solarniTekst" /></p>
              <h4><FormattedMessage id="pages.home.solarni" /></h4>
            </div>
            <div className={styles.obnovljiviIzvoriItem}>
              <img src="/Resources/WindEnergy_400px.jpg" alt="WindEnergy_Img" />
              <p><FormattedMessage id="pages.home.vetrogeneratoriTekst" /></p>
              <h4><FormattedMessage id="pages.home.vetrogeneratori" /></h4>
            </div>
            <div className={styles.obnovljiviIzvoriItem}>
              <img src="/Resources/HydroEnergy_400px.jpg" alt="HydrogneEnergy_Img" />
              <p><FormattedMessage id="pages.home.vodonikaTekst" /></p>
              <h4><FormattedMessage id="pages.home.vodonika" /></h4>
            </div>

          </div>

          <div className={styles.nasiPartneriContainer}>
            <div className={styles.titleContainer}>
              <hr className={styles.hr}/>
              <h1 id="nasiPartneri"><FormattedMessage id="pages.home.partneri" /></h1>
            </div>
            <div className={styles.nasiPartneriSlider}>
              <div>
                <a href="https://www.energetika-mb.si/" target="_blank"><img src="/Resources/EnergetikaMaribor_Color.png" alt="" /></a>
              </div>
              <div>
                <a href="https://jugo-impex.com/en/" target="_blank"><img src="/Resources/JugoImpex.png" alt="" /></a>
              </div>
              <div>
                <a href="https://uklo.edu.mk/" target="_blank"><img src="/Resources/UniverzitetKlimentOhridski.png" alt="" /></a>
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
      </IntlWrapper>
  )
}
