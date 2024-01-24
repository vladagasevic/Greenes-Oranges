"use client";
import { useState, useEffect } from "react"
//import Image from "next/image"
import styles from "./page.module.css"
import DigitalizacijaModal from './modal/modal'

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

export default function Home() {  
  const [showModal, setShowModal] = useState(false);
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
            {/* <button className={styles.button}>OBLAST DIGITALIZACIJE</button> */}
            {/* <button onClick={() => setShowModal(true)} className={styles.button}>OBLAST DIGITALIZACIJE</button> */}
            <DigitalizacijaModal />
            {/* <a href="/" className={styles.button}>OBLASTI DIGITALIZACIJE</a> */}
            
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
        <div className={styles.ciljeviContainerColumn}>
          <div className={styles.ciljevi}>
          <span className="material-symbols-outlined" style={{ color: 'green', fontSize: '40px' }}>flag</span>
            <h3>Opšti i specifični ciljevi</h3>
            <p>
            Opsti i specificni ciljevi kao i rezultati GREENES projekta, 
            usmereni su ka studentima, nastavnicima, profesionalcima, 
            donosiocima odluka na lokalnom, regionalnom i nacionalnon nivou 
            i generalno mladima. Kroz unapredjenje komptencija stvorice se uslovi 
            za kreiranje profesionalaca sposobnih da odgovore zahtevima s
            avremenog energetskog trzista.
            </p>
          </div>
          <div className={styles.ciljevi}>
          <span className="material-symbols-outlined" style={{ color: 'green', fontSize: '40px' }}>linked_services</span>
          <h3>Aspekt digitalizacije</h3>
          <p>
          Digitilizacija je noseci faktor GREENES projekta i provlaci 
          se kroz programske sadržaje, inovacije u nastavnom procesu, 
          razvoja virtuelnog centra razmene iskustva znanja i primera 
          dobre prakse u formi interaktivne platforme, kurseva celoživotnog 
          učenja, pa do diseminacionih metoda i mehanizam sprovodjenja 
          kampanja daje prliku partnerima
          </p>
          </div>
          <div className={styles.ciljevi}>
          <span className="material-symbols-outlined" style={{ color: 'green', fontSize: '40px' }}>verified</span>
            <h3>Nove kompetencije</h3>
            <p>
            Unapredjenjem postojece kompetencije studenata na master 
            studijama iz oblasti zaštite životne sredine, realizovace se 
            elementima digitalizacije energetskog sektora, kroz primenu 
            IKT tehnologija poput block chaina, IOT, AI VR, i sl, 
            kreirace se strucnjaci spremni na aktuelne izazove i potrebe 
            energetskog sektora. Na taj nacin, ucinice se prvi 
            korak u podizanju kapaciteta
            </p>
          </div>
        </div>
      </div>

      <div className={styles.obnovljiviIzvoriContainer}>
        <div className={styles.obnovljiviIzvoriTitleContainer}>
          <hr className={styles.hr}/>
          <h1>OBNOVLJIVI IZVORI ENERGIJE</h1>
        </div>
        <div className={styles.obnovljiviIzvoriImageContainerColumn}>

          <div className={styles.obnovljiviIzvoriItem}>
            <img src="Resources/Biomass_400px.jpg" alt="Biomass_Energy_Img" />
            <p>
              Digitalizacija unapređuje proizvodnju energije iz biomase, 
              povećava efikasnost i smanjuje negativne uticaje na okolinu. 
              Korišćenje digitalnih tehnologija pruža mogućnost za širenje i 
              veću integraciju biomase u energetski miks, doprinoseći 
              održivom energetskom sektoru i smanjenju emisije štetnih gasova.
            </p>
            <h4>Energija Biomase</h4>
           
          </div>
          <div className={styles.obnovljiviIzvoriItem}>
            <img src="Resources/Geothermal_400px.jpg" alt="Geothermal_Energy_Img" />
            <p>
              Digitalizacija omogućava stalno praćenje parametara geotermalnih bušotina, 
              uključujući temperaturu, pritisak i protok fluida. 
              Ovi podaci omogućavaju bolje upravljanje i optimizaciju rada bušotina, 
              povećavajući proizvodnju energije i smanjujući troškove održavanja.
            </p>
            <h4>Geotermalna Energija</h4>
          </div>
          <div className={styles.obnovljiviIzvoriItem}>
            <img src="Resources/HydroPower_400px.jpg" alt="HydroEnergy_Img" />
            <p>
              Digitalizacije pruža mogućnost za unapređenje performansi, 
              efikasnosti i pouzdanosti hidroenergetskih sistema. 
              Ova integracija doprinosi održivom i stabilnom snabdevanju električnom energijom, 
              uz smanjenje negativnih uticaja na okolinu.
            </p>
            <h4>Hidroenergija</h4>
          </div>
          <div className={styles.obnovljiviIzvoriItem}>
            <img src="Resources/SolarPanels_400px.jpg" alt="SolarEnergy_Img" />
            <p>
              Digitalni senzori omogućavaju stalno praćenje proizvodnje 
              električne energije fotonaponskih panela u realnom vremenu. 
              To omogućava precizno praćenje performansi panela i identifikaciju 
              problema ili gubitaka u proizvodnji. Na osnovu ovih podataka, 
              moguće je optimizovati postavke sistema kako bi se povećala 
              efikasnost i iskoristivost solarnih panela I odrediti 
              nivo uticaja na zaštitu životne sredine
            </p>
            <h4>Solarni Izvori</h4>
          </div>
          <div className={styles.obnovljiviIzvoriItem}>
            <img src="Resources/WindEnergy_400px.jpg" alt="WindEnergy_Img" />
            <p>
              Integracija vetroelektrana u pametne mreže - Smart Grids - omogućava 
              bolje upravljanje i integraciju sa drugim izvorima energije. 
              Ovo omogućava balansiranje ponude i potražnje energije u mreži, 
              smanjenje gubitaka i poboljšanje stabilnosti mreže.
            </p>
            <h4>Vetrogeneratori</h4>
          </div>
          <div className={styles.obnovljiviIzvoriItem}>
            <img src="Resources/HydroEnergy_400px.jpg" alt="HydrogneEnergy_Img" />
            <p>
              Digitalne tehnologije omogućavaju bolje upravljanje 
              procesima proizvodnje vodonika, bilo putem elektrolize, 
              reakcije metana sa parom - reformacija, ili drugih metoda. 
              Ove tehnologije omogućavaju precizno praćenje parametara 
              procesa i optimizaciju proizvodnje kako bi se povećala 
              efikasnost i smanjili troškovi.
            </p>
            <h4>Energija Vodonika</h4>
          </div>

        </div>

        <div className={styles.nasiPartneriContainer}>
          <div className={styles.titleContainer}>
            <hr className={styles.hr}/>
            <h1 id="nasiPartneri">NAŠI PARTNERI</h1>
          </div>
          <div className={styles.nasiPartneriSlider}>
            <div>
              <a href="https://www.energetika-mb.si/" target="_blank"><img src="Resources/EnergetikaMaribor_Color.png" alt="" /></a>
            </div>
            <div>
              <a href="https://jugo-impex.com/en/" target="_blank"><img src="Resources/JugoImpex.png" alt="" /></a>
            </div>
            <div>
              <a href="https://uklo.edu.mk/" target="_blank"><img src="Resources/UniverzitetKlimentOhridski.png" alt="" /></a>
            </div>
            <div>
              <a href="https://www.um.si/en/home-page/" target="_blank"><img src="Resources/UniversityOfMaribor.png" alt="" /></a>
            </div>
            <div>
              <a href="https://mztinzenering.com.mk/" target="_blank"><img src="Resources/mztInzenjering.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
