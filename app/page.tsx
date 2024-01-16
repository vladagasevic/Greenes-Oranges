"use client";
import { useState, useEffect } from "react"
//import Image from "next/image"
import styles from "./page.module.css"

function Slides() {
  const covers = ["covers/image0_0.jpg", "covers/image0_1.jpg", "covers/image0_2.jpg"];
  const [id, setId] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => setId((id + 1) % covers.length), 4000);
  // });

  // function Dot({num}: {num: number}) {
  //   return (
  //     <span className={styles.dot} style={{ backgroundColor: num == id ? "Green" : "none" }} onClick={() => {
  //       setId(num);
  //     }} />
  //   )
  // }

  function leftClick() {
      setId(id === 0 ? covers.length - 1 : id - 1);
   }

  function rightClick() {
      setId(id === covers.length - 1 ? 0 : id + 1);
  }

  return (
    <>
      <div className={styles.sliderMainContainer}>
        <div className={styles.sliderContainer}>
          <div className={styles.slider}>
            {covers.map((cover, num) => (
              <img loading="lazy" className={styles.fade} src={cover} alt={cover} key={cover} style={{ display: num == id ? "block" : "none" }}/>
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

export default function Home() {
  return (
    <main>
      <Slides/>
      <div className={styles.oranges}>
        <h1>GREENES development of green energy competences, for energy stability</h1>
      </div>
      <div className={styles.whyGreenesContainer}>
        <div className={styles.whyGreenesTextContainer}>
          <h1>ZAŠTO GREENES?</h1>
          <hr className={styles.hr}/>
          <h3>
            Digitalizacija u sektoru obnovljivih izvora energije igra ključnu ulogu u optimizaciji, 
            praćenju i upravljanju obnovljivim izvorima energije. 
            Razvojem seta potrebnih komptencija u okviru programa zaštite životne sredine, 
            pojačaće se kvalitet i raznovrsnost stručnog kadra koji može da odgovori znanjem 
            na izazove klimatskih promena i akutelne energetske krize.
          </h3>
          <div className={styles.whyGreenesBtn}>
            <a href="/" className={styles.button}>OBLASTI DIGITALIZACIJE</a>
          </div>
        </div>
          <div className={styles.whyGreenesImageContainer}>
            <div className={styles.whyGreenesImage}>
              <img src="Resources/whyGreenes_img.jpg" alt="Why Greenes"/>
            </div>
          </div>
      </div>
      <div className={styles.ciljeviContainer}>
        <div className={styles.ciljeviTitleContainer}>
          <hr className={styles.hr}/>
          <h1>CILJEVI</h1>
        </div>
        
      </div>
      <br/>
      <br/>

      Opšti i specifični ciljevi<br/>
      Opsti i specificni ciljevi kao i rezultati GREENES projekta, usmereni su ka studentima, nastavnicima, profesionalcima, donosiocima odluka na lokalnom, regionalnom i nacionalnon nivou i generalno mladima. Kroz unapredjenje komptencija stvorice se uslovi za kreiranje profesionalaca sposobnih da odgovore zahtevima savremenog energetskog trzista.<br/>

      Aspekt digitalizacije<br/>
      Digitilizacija je noseci faktor GREENES projekta i provlaci se kroz programske sadržaje, inovacije u nastavnom procesu, razvoja virtuelnog centra razmene iskustva znanja i primera dobre prakse u formi interaktivne platforme, kurseva celoživotnog učenja LLL, pa do diseminacionih metoda i mehanizam sprovodjenja kampanja daje prliku partnerima<br/>

      Nove kompetencije<br/>
      Unapredjenjem postojece kompetencije studenata na master studijama iz oblasti zaštite životne sredine, realizovace se elementima digitalizacije energetskog sektora, kroz primenu IKT tehnologija poput block chaina, IOT, AI VR, i sl, kreirace se strucnjaci spremni na aktuelne izazove i potrebe energetskog sektora. Na taj nacin, ucinice se prvi korak u podizanju kapaciteta<br/>

      OBNOVLJIVI IZVORI ENERGIJE<br/>

      Energija Biomase<br/>

      Geotermalna Energija<br/>

      Hidroenergija<br/>

      Solarni Izvori<br/>

      Vetrogeneratori<br/>

      Energija Vodonika<br/>

      NAŠI PARTNERI<br/>
    </main>
  )
}
