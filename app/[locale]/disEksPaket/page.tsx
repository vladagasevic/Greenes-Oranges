"use client"

import styles from './disEks.module.css'
import Link from 'next/link';

import { FormattedMessage } from "react-intl";
import IntlWrapper from "../../components/IntlWrapper";

type HomeProps = {
  params: { locale: string };
};

export default async function Home({ params: { locale } }: HomeProps) {  
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
              <h1>Disiminacioni - Eksploatacioni paket</h1>
            </div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.textFirst}>
            <p>
            Ovaj radni paket obuhvata aktivnosti vezane za distribuciju rezultata projekata kao I dugoročnu primenu istih. 
            Proces distribucije rezultata projekta odivjaće se u skladu sa planom disiminacije koji će biti pripremljen od 
            strane PC i prilagođen kapacitetima svakog partnera. Rezultati projekta biće predstavljeni učenicima srednjih škola 
            i budućim studentima kroz različite promotivne aktivnosti direktnog kontakta. Takođe, diseminacija rezultata projekta 
            će se vršiti korišćenjem svih dostupnih Internet komunikacionih kanala: veb stranice, e platforme znanja, portala, 
            društvenih mreža, podcastovi itd. Ovo će omogućiti podizanje svesti dopiranjem do svih relevantnih zainteresovanih 
            strana i potencijalnih korisnika, kao i pribavljanje najšire moguće podrške. U isto vreme, e-publikacije i onlajn 
            izvori će obezbediti da se rezultati projekta distribuiraju nakon trajanja projekta. Ovaj radni paket takođe uključuje 
            ostavljanje i administriranje vizuelnog identiteta projekta - uključujući logo projekta, onlajn identitet i veb stranicu. 
            Sa stanovišta eksploatacije rezultata projekt pored redovnog nastavnog procesa poseban focus će se staviti na podsticanje 
            i unapredjenje kapaciteta studentskih i nastavničkih mobilnosti, izmedju ove tri ustanove kao i PI partnera, 
            koje će imati za cilj sticanje univerzalnih kvalifikacija u oblasti zelene energije, kroz unaprednjenje znanja u 
            kombinaciji sa digitalnim alatima, kako u radu tako i u učenju. Dalje, kreiranjem e platforme znanja koja treba da obezbedi 
            stalnu sinergiju rezultata projekata sa svim ciljnim grupama sa jedne strane i sinergiju partnera I donosioca odluka sa 
            druge strane. Proces disminacije biće zasnovan i na intezivnoj digitalnoj kampanji usmerenoj kako na zemlje partnere u 
            projektu tako I na region uopšte. Svaki segment digitalne kampanje, biće deo velikog sistema koji će dopirati do najširih 
            ciljnih grupa. Razvoj zelenog otiska ustanova, predstavlja novu dimenziju u disiminaciji rezultata projekta.
            Planirane aktivnosti u okviru ovog radngo paketa su:
            </p>
          </div>
        </div>

        <div className={styles.textContainer}>
        <hr className={styles.hr}/>
          <div className={styles.textSecond}>
            <div className={styles.textSecondChild}>
              <div className={styles.textSecondChildText}>
              <h3>
                  A3.1.Usvanja inovrinaih sadržaja predmeta
                {/* <Link href="/Resources/pripremnoRazvojniProjekat/Greenes_2.1.docx"><span className="material-symbols-outlined" style={{ color: 'green', fontSize: '20px' }}>download</span></Link> */}
                <br />
                  A3.2.Usvajanje sadržaja LLL kurseva
                {/* <Link href="/Resources/pripremnoRazvojniProjekat/Greenes_2.2.docx"><span className="material-symbols-outlined" style={{ color: 'green', fontSize: '20px' }}>download</span></Link> */}
                <br />
                  A3.3.Upis studenata.
                {/* <Link href="/Resources/pripremnoRazvojniProjekat/Greenes_2.3.docx"><span className="material-symbols-outlined" style={{ color: 'green', fontSize: '20px' }}>download</span></Link> */}
                <br />
                  A3.4 Pokretanje e platforme znanja
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