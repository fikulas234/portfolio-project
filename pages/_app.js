import Head from "next/head";
import Layout from "@/components/layout/layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Developer from Serbia who is passionate about Frontend."
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
