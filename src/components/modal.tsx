"use client"

import { useState } from "react"
import Modal from 'react-modal'

import styles from "./modal.module.css"
import IntlWrapper from "./IntlWrapper";
import { FormattedMessage } from "react-intl";

type ModalProps = {
  params: { locale: string };
};

export default function DigitalizacijaModal({ params: { locale } }: ModalProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <IntlWrapper locale={locale}>
      <button className={styles.button88} onClick={() => setShowModal(true)}><FormattedMessage id="pages.home.oblast"  /></button>
      <Modal 
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        className={styles.modalContainer}
        // style={customStyles} 
        >
        <div className={styles.modalContent}>
          <div className={styles.modalTitle}>
            <h1><FormattedMessage id="pages.home.oblast"  /></h1>
          </div>
          <div className={styles.modalText}>
            <p><FormattedMessage id="pages.home.oblastTekst"  /></p>
          </div>
          <div className={styles.closeBtn}>
            <button className={styles.button88} onClick={() => setShowModal(false)}><FormattedMessage id="pages.home.zatvori"  /></button>
          </div>
        </div>
      </Modal>
    </IntlWrapper>
  )
}
