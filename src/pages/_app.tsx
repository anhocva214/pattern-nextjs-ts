import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '@/store/index';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';



function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content={"hello"} />
        <meta name="author" content={"anho"} />
        <title>My Project</title>
        <link rel="icon" href="/img/favicon.png" type="image/x-icon" />
        <link rel="shortcut icon" href="/img/favicon.png" type="image/x-icon" />
        
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
        integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossOrigin="anonymous"/>

        {/* Fontawesome 5*/}
        <link rel="stylesheet" href="/css/all.min.css"/>

        {/* CSS custom */}

       
      </Head>

      <Alert stack={{ limit: 3 }} />


      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default App
