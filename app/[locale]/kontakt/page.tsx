import { ContactForm } from './form';
import styles from './kontakt.module.css'
import Link from 'next/link';
import GoogleMaps from '../../components/GoogleMaps';

export default function Home() {
  return (
    <main>
      <div className={styles.kontaktContainer}>
          <div className={styles.kontaktImgContainer}>
              <div className={styles.kontaktImg}>
                  <img src="Resources/kontakt.jpg" alt="Kontakt Img" />
              </div>
          </div>
          <div className={styles.kontaktTitle}>
            <h1>Kontakt</h1>
          </div>
      </div>
      <div className={styles.kontaktContainerForm}>
      <div className='mapContainer'>
          <GoogleMaps />
        </div>
        <div className='formContainer'>
          <ContactForm />
        </div>

      </div>
      
    </main>
  )
}
