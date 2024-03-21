//components/_app.js
import Layout from '../components/Layout';
import '../app/styles/globals.css';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  if (isHomePage) {
    // for å ikke ha layout på hovedsiden, siden disse linkene allerede står der
    return <Component {...pageProps} />;
  } else {
    // render for layouten
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}


export default MyApp;


// export default function MyApp({ Component, pageProps }) {
 // return <Component {...pageDrops} />
//}


// Funksjon for wrap rundt sidene 
// Bruker funksjonskomponenten MyApp 

// function MyApp({ Component, pageProps }) {
  //return <Component {...pageProps} />;
//}

// export default MyApp;