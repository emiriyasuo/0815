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

// import '../styles/globals.css'
// // import { AppProps } from 'next/app'
// var  AppProps:any =require('next/app')


// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;

import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp
