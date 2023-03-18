import Head from "next/head";
import ResourcesContent from "@/components/right-content/resources";
import { Fragment } from "react";

const ResourcesPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Resources</title>
      </Head>
      <ResourcesContent />
    </Fragment>
  );
};

export default ResourcesPage;
