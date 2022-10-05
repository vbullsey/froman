import type { AppProps } from "next/app";
import Head from "next/head";
import { MainLayout } from "~/layout/MainLayout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Head>
        <title>Felipe Román Dev</title>
      </Head>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
