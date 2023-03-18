import Head from "next/head";
import { Fragment } from "react";
import AboutMeContent from "@/components/right-content/about-me";

function AboutMePage() {
  return (
    <Fragment>
      <Head>
        <title>About me</title>
      </Head>
      <AboutMeContent />
    </Fragment>
  );
}

export default AboutMePage;
