import Head from "next/head";
import { Fragment } from "react";

import NavigationElements from "../components/left-navigation/navigation";
import Card from "../components/layout/card";
import RightSideContent from "../components/right-content/main-content";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Filip | Frontend Developer</title>
      </Head>
      <Card>
        <NavigationElements />
        <RightSideContent />
      </Card>
    </Fragment>
  );
};

export default HomePage;
