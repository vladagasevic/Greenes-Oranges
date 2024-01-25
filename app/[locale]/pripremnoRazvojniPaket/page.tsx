"use client"

import styles from './prp.module.css'
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
        <div className={styles.prpContainer}>
            <div className={styles.prpImgContainer}>
                <div className={styles.prpImg}>
                    <img src="/Resources/pripremnoRazvojniPaket_Img.jpg" alt="Pripremno Razvojni Paket Img" />
                </div>
            </div>
            <div className={styles.prpTitle}>
              <h1>Pripremno razvojni paket</h1>
            </div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.textFirst}>
            <p>
            Ovaj radni paket obuhvata preliminarne aktivnosti neophodne za razvoj i unapredjenje stanja u okviru osam predmeta, 
            na sve tri ustanove PC - Regulative, Energetski potencijl otpada, Senzorski sistemi, P1  -Sagorevanje i ekologija, 
            Energija i životna sredina, Materijalna i energetska upotreba otpada P2 - Savremene proizvodne tehnologije I 
            Savremena hidroeneregtska postrojenja. To će rezultirati integrisanim podacima o svim studijskim programima, 
            njihovim ciljevima sa predlogom promena u oblasti zelenih energija a na bazi aktuelnih direktiva i 
            zahteva tržišta sa jedne strane, kao i postojećim kapacitetima  -infrastruktura, objekti, laboratorije, radna snaga itd. -
            u oblasti u sve tri zemlje. Rezultati ovih aktivnosti biće usaglašeni i objavljeni u nekoliko izveštaja. 
            Zelena znanja, veštine i kompetencije koje su potrebne diplomcima, postdiplomcima i sadašnjim zaposlenima 
            biće definisane kroz saradnju sa partnerima iz privrede i uskladiće se sa njihovim potrebama i iskustvima. 
            Ovo će rezultirati dugoročnim sporazumima između visokoškolskih ustanova I kompanija/stejkholdera u oblasti. 
            Ovaj radni paket takođe obuhvata aktivnosti vezane za diskusiju i definisanje metodoloških pristupa u kreiranju 
            i programa obuke. Takođe, u okviru ovih aktivnosti postaviče se I osnova za unapredjeni modela on line nastave 
            kao i dugoročne studentske mobilnosti izmedju svih šest partnera u projektu a sve to na bazi analiza i primera dobre prakse. 
            Takođe ovaj WP obuhvata i aktivnosti neophodne za pripremu za punu implementaciju svih postignutih rezultata projekta. 
            Ove aktivnosti imaju za cilj postizanje razmene znanja i ekspertize o "zelenoj energiji" edukaciji i obuci između 
            PE  - partenri iz sektora obrazovanja i PI - partneri iz sektora industrije, partnera
            </p>
          </div>
        </div>

        <div className={styles.textContainer}>
        <hr className={styles.hr}/>
          <div className={styles.textSecond}>
            <div className={styles.textSecondChild}>
              <div className={styles.textSecondChildText}>
              <h3>
                A.2.1. Analiza stanja u visokom obrazovanju u oblasti zelenih energija I stanja u energetskom sektoru
                <Link href="/Resources/pripremnoRazvojniProjekat/Greenes_2.1.docx"><span className="material-symbols-outlined" style={{ color: 'green', fontSize: '20px' }}>download</span></Link>
                <br />
                A.2.2. Digitalizacija energetskog sektora
                <Link href="/Resources/pripremnoRazvojniProjekat/Greenes_2.2.docx"><span className="material-symbols-outlined" style={{ color: 'green', fontSize: '20px' }}>download</span></Link>
                <br />
                A.2.3. Analiza postojećih kvalifkacija na tržištu zelenih energija i predlog novih komptencija
                <Link href="/Resources/pripremnoRazvojniProjekat/Greenes_2.3.docx"><span className="material-symbols-outlined" style={{ color: 'green', fontSize: '20px' }}>download</span></Link>
                <br />
                A.2.4. Analiza stepena zadovoljstva studenata i nastavnika on line sistemom učenja, pravci daljeg razvoja
                <Link href="/Resources/pripremnoRazvojniProjekat/Greenes_2.4.docx"><span className="material-symbols-outlined" style={{ color: 'green', fontSize: '20px' }}>download</span></Link>
                <br />
                A.2.5. Izrada inovirnaih sadržaja
                <br />
                A.2.6. Izrada nove metodologije on line učenja
                <br />
                A.2.7. Razvoj e platforme znanja
                </h3>
              </div>
                
            </div>
            
          </div>

        </div>
      
      </main>
    </IntlWrapper>
  )
}