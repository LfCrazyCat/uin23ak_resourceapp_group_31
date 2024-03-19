import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>
            <div className={styles.description}>
      </div>

      <div className={styles.grid}>
        <a
        href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            HTML <span></span>
          </h2>
          <p></p>
        </a>

        <a
        href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            CSS <span></span>
          </h2>
          <p></p>
        </a>

        <a
        href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            JavaScript <span></span>
          </h2>
          <p></p>
        </a>
        <a
        href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >


          <h2>
            React <span></span>
          </h2>
          <p>
            
          </p>
        </a>
        <a 
        href="#"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
        >
          <h2>
            Headless CMS <span></span>
          </h2>
          <p>

          </p>
        </a>
      </div>
    </main>
  );
}
