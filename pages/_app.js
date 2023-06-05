import '../styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return ( 
  <>
     <Head>
     <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="...snip..."
          crossorigin="anonymous"
        />
     <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha384-...snip..."
        crossorigin="anonymous"
      />
      </Head>
    <Component {...pageProps} />
  </> );
}
