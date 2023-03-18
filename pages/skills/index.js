import Head from "next/head";
import SkillsContent from "@/components/right-content/skills";
import { Fragment } from "react";

function SkillsPage() {
  return (
    <Fragment>
      <Head>
        <title>Skills</title>
      </Head>
      <SkillsContent />
    </Fragment>
  );
}

export default SkillsPage;
