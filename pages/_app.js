import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const getContent = () => {
    if ([`/privacy`].includes(router.pathname)) return <Component {...pageProps} />;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  };

  return <ChakraProvider>{getContent()}</ChakraProvider>;
}

export default MyApp;
