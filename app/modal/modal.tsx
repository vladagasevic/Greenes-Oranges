
import { useState } from "react"
import Modal from 'react-modal'
// import styles from "../page.module.css"
import styles from "./modal.module.css"

export default function DigitalizacijaModal() {
    
    const [showModal, setShowModal] = useState(false);
    
    return(
      <>
        <button className={styles.button} onClick={() => setShowModal(true)}>OBLAST DIGITALIZACIJE</button>
        <div className={styles.modalContainer}></div>
        
        <Modal 
            isOpen={showModal}
            onRequestClose={() => setShowModal(false)}
            className={styles.modal}
            >
                <div className="modalContent">
                    <div className="closeBtn">
                        <button onClick={() => setShowModal(false)}>Close Modal </button>
                    </div>
                    <div className="modalTitle">
                        <h1> Oblast digitalizacije </h1>
                    </div>
                    <div className="modalText">

                    </div>
                    
                </div>
        </Modal>
      </>
    )
  
  }
