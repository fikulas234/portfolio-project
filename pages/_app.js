import Layout from "@/components/layout/layout";
import "../styles/globals.css";

import Card from "@/components/layout/card";
import RightSideContent from "@/components/right-content/main-content";
import NavigationElements from "@/components/left-navigation/navigation";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
