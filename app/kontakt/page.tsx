import styles from './kontakt.module.css'
import Link from 'next/link';

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
    </main>
  )
}
