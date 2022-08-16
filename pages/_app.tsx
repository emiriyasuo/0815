// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

// import { AppProps } from 'next/app'

// function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// export default App

import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
