
import { useState } from "react"
import Modal from 'react-modal'
// import styles from "../page.module.css"
import styles from "./modal.module.css"

export default function DigitalizacijaModal({a, b, c}: any) {
    
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
        <button className={styles.button88} onClick={() => setShowModal(true)}>{a}</button>
        
        <Modal 
            isOpen={showModal}
            onRequestClose={() => setShowModal(false)}
            className={styles.modalContainer}
            // style={customStyles} 
            >
                <div className={styles.modalContent}>
                    <div className={styles.modalTitle}>
                        <h1>{a}</h1>
                    </div>
                    <div className={styles.modalText}>
                        <p>{b}</p>
                    </div>
                    <div className={styles.closeBtn}>
                        <button className={styles.button88} onClick={() => setShowModal(false)}>{c}</button>
                    </div>
                    
                </div>
        </Modal>
      </>
    )
  
  }
