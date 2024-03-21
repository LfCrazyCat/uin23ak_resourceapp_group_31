import Image from "next/image";
import styles from "./styles/page.module.css";
import Link from 'next/link';


export default function Home() {
  return (
    <main className={styles.main}>
            <div className={styles.grid}>
              <Link href="/resources/html" passHref>
                <span className={styles.card} aria-label="HTML Resources">
                  <h2>HTML</h2>
                </span>
              </Link>
              <Link href="/resources/css" passHref>
                <span className={styles.card} aria-label="CSS Resources">
                  <h2>CSS</h2>
                </span>
              </Link>
              <Link href="/resources/javascript" passHref>
                <span className={styles.card} aria-label="JavaScript Resources">
                  <h2>JavaScript</h2>
                  </span>
              </Link>
              <Link href="/resources/react" passHref>
                <span className={styles.card} aria-label="React reources">
                  <h2>React</h2>
                </span>
              </Link>
              <Link href="/resources/headless-cms" passHref>
                <span className={styles.card} aria-label="Sanity and headless CMS">
                  <h2>Sanity and headless CMS</h2>
                </span>
              </Link>
      </div>
      </main>
  );
};
// Til opplysning så gikk jeg først for <a tag men måtte gå over til span, så vil ikke få åpnet 
// link i ny fane men så skal dette være en type app, så kanskje det går greit?
/*
      <div className={styles.grid}>
        <a
        href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            HTML 
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
            CSS 
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
            JavaScript 
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
            React 
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
            Headless CMS 
          </h2>
          <p>

          </p>
        </a>
      </div>
    </main>
  );
}

*/