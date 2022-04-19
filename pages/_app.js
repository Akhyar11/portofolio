import "../styles/globals.css";
import Authtentication from "../config/Authtentication";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Authtentication />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
