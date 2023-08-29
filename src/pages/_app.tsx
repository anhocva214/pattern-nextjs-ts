import { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "src/redux/index";
import viVN from "antd/locale/vi_VN";
import { ConfigProvider } from "antd";
import "dayjs/locale/vi";

import "../resources/global.css";
import "../resources/font-awesome6pro/css/all.min.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content={"New Project"} />
        <meta name="author" content={"anho"} />
        <title>New Project</title>
        <link rel="icon" href="/img/favicon.png" type="image/x-icon" />
        <link rel="shortcut icon" href="/img/favicon.png" type="image/x-icon" />

        {/* CSS custom */}
        {/* <link rel="stylesheet" href="/css/all.min.css" /> */}
      </Head>

      <Provider store={store}>
        <ConfigProvider locale={viVN}>
          <Component {...pageProps} />
        </ConfigProvider>
      </Provider>
    </>
  );
}

export default App;
