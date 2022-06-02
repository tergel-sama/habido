import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <link href="../assets/sf/FontsFree-Net-SF-Pro-Rounded-Regular.ttf" rel="stylesheet" />
        <link href="../assets/sf/SF-Pro-Rounded-Black.otf" rel="stylesheet" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
