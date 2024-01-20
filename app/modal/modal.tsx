
import { useState } from "react"
import Modal from 'react-modal'
// import styles from "../page.module.css"
import styles from "./modal.module.css"

export default function DigitalizacijaModal() {
    
    const [showModal, setShowModal] = useState(false);
    // const customStyles = {
    //     content: {
    //       width: "50%",
    //       margin: "auto",
    //       backgroundColor: "#EEEEEE",
    //     }
    //   };
    
    return(
      <>
        <button className={styles.button88} onClick={() => setShowModal(true)}>OBLAST DIGITALIZACIJE</button>
        
        <Modal 
            isOpen={showModal}
            onRequestClose={() => setShowModal(false)}
            className={styles.modalContainer}
            // style={customStyles} 
            >
                <div className={styles.modalContent}>
                    <div className={styles.modalTitle}>
                        <h1> Oblast digitalizacije </h1>
                    </div>
                    <div className={styles.modalText}>
                        <p>
                        Digitalizacija u sektoru obnovljivih izvora omogućava:
Praćenje i upravljanje proizvodnjom: Digitalne tehnologije omogućavaju kontinuirano praćenje proizvodnje iz obnovljivih izvora, kao što su solarni paneli i vetroelektrane. Senzori i pametni uređaji mogu prikupljati podatke o proizvodnji energije u realnom vremenu, omogućavajući efikasnije upravljanje i optimizaciju proizvodnog kapaciteta.
Napredna analitika podataka: Analitika podataka i veštačka inteligencija mogu se primeniti za analizu velikih količina podataka iz obnovljivih izvora energije. Ove tehnologije mogu identifikovati obrasce u proizvodnji energije, predviđati proizvodnju na osnovu vremenskih uslova i drugih faktora, što pomaže u boljem planiranju i upravljanju energetskim resursima.
Mikrogrids i decentralizacija: Digitalizacija omogućava formiranje mikromreža koje koriste obnovljive izvore energije za lokalne potrebe. Ovi sistemi mogu biti decentralizovani i omogućiti nezavisno snabdevanje energijom manjih zajednica, industrijskih postrojenja ili ruralnih područja.
Internet stvari IoT i pametne tehnologije: Integracija - IoT - uređaja i pametnih tehnologija u obnovljive izvore energije omogućava automatizaciju i daljinsko upravljanje proizvodnim sistemima. Ovo povećava efikasnost i pouzdanost, omogućavajući proizvođačima da reaguju na promenljive uslove i povećaju iskoristivost energije.
Blockchain tehnologija: Korišćenje blockchain tehnologije može omogućiti transparentnu i sigurnu razmenu energije između različitih aktera u sektoru obnovljivih izvora. Ova tehnologija može podržati tržišne modele peer-to-peer trgovine energijom između proizvođača i potrošača.
Integracija sa pametnim mrežama: Obnovljivi izvori energije mogu biti integrisani u pametne mreže - Smart Grids - kako bi se bolje upravljalo i distribuiralo proizvedenu energiju. Ovo povećava stabilnost i fleksibilnost energetskog sistema, posebno s obzirom na promenljivu prirodu proizvodnje iz obnovljivih izvora.
Digitalizacija u sektoru obnovljivih izvora energije pruža brojne prednosti, uključujući povećanu efikasnost, smanjenje emisija gasova staklene bašte i veću održivost energetskog sektora. Ove tehnologije igraju ključnu ulogu u tranziciji ka čistijoj i održivijoj energetskoj budućnosti.

                        </p>
                    </div>
                    <div className={styles.closeBtn}>
                        <button className={styles.button88} onClick={() => setShowModal(false)}>Close Modal</button>
                    </div>
                    
                </div>
        </Modal>
      </>
    )
  
  }
