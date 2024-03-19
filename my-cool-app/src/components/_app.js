import '../app/styles/globals.css';


// Funksjon for wrap rundt sidene 
// Bruker funksjonskomponenten MyApp 
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;