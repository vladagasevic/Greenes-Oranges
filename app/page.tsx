'use client';

import { useState, useEffect } from "react";

const covers = ["covers/pexels-pixabay-356036.jpg", "covers/2.jpg"];
function Slides() {
  const [id, setId] = useState(0);

  useEffect(() => {
    setTimeout(() => setId((id + 1) % covers.length), 3000);
  });

  return covers.map((cover, num) => (
    <img loading="lazy" className="fade" src={cover} style={{ display: num == id ? "block" : "none" }}/>
  ));
}

function Dot({num}: {num: number}) {
  return (
    <span className="dot" onClick={() => {
      const slides = document.getElementsByClassName("slides");
      const dots = document.getElementsByClassName("dot");

      for (let i = 0; i < slides.length; i++)
        slides[i].classList.add("d-none");

      for (let i = 0; i < dots.length; i++)
        dots[i].classList.remove("active")

      slides[num].classList.remove("d-none");
      dots[num].classList.add("active");
    }} />
  )
}

export default function Home() {
  function leftClick() {
    const els = document.getElementsByClassName("slides");
    let fv = 0;
    if (fv > 0) {
      els[fv + 2].classList.add("d-none");
      els[fv - 1].classList.remove("d-none");
      fv--;
    }
  }

  function rightClick() {
    const els = document.getElementsByClassName("slides");
    let fv = 0;
    if (fv < els.length - 3) {
      els[fv].classList.add("d-none");
      els[fv + 3].classList.remove("d-none");
      fv++;
    }
  }

  let dots: React.JSX.Element[] = [];
  covers.forEach((_cover, index) => {
    dots.push(<Dot key={`dot_${index}`} num={index}/>)
  });

  return (
    <main>
      <div style={{width: "100%"}}>
        <Slides/>
        <button onClick={leftClick}>&#10094;</button>
        <button onClick={rightClick}>&#10095;</button>
      </div>
      <div style={{textAlign: "center"}}>
        {dots}
      </div>
      GREENES development of green energy competences for energy stability<br/>

      ZAŠTO GREENES?<br/>
      Digitalizacija u sektoru obnovljivih izvora energije igra ključnu ulogu u optimizaciji, praćenju i upravljanju obnovljivim izvorima energije. Razvojem seta potrebnih komptencija u okviru programa zaštite životne sredine, pojačaće se kvalitet i raznovrsnost stručnog kadra koji može da odgovori znanjem na izazove klimatskih promena i akutelne energetske krize.<br/>

      CILJEVI<br/>

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
