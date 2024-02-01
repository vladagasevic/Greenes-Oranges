"use client"

import { useState } from "react"
import Modal from 'react-modal'

import styles from "./modal.module.css"

type ModalProps = {
  params: { modalLocale: String[] };
};

export default function DigitalizacijaModal({ params: { modalLocale } }: ModalProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className={styles.button88} onClick={() => setShowModal(true)}>{modalLocale[0]}</button>
      <Modal 
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        className={styles.modalContainer}
        // style={customStyles} 
        >
        <div className={styles.modalContent}>
          <div className={styles.modalTitle}>
          <h1>{modalLocale[0]}</h1>
          </div>
          <div className={styles.modalText}>
          <p>{modalLocale[1]}</p>
          </div>
          <div className={styles.closeBtn}>
          <button className={styles.button88} onClick={() => setShowModal(false)}>{modalLocale[2]}</button>
          </div>
        </div>
      </Modal>
    </>
  )
}
