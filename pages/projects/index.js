import Head from "next/head";
import ProjectsContent from "@/components/right-content/projects/projects";
import { getAllProjects } from "@/lib/projects-util";
import { Fragment } from "react";

function ProjectsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>My projects</title>
      </Head>
      <ProjectsContent projects={props.projects} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllProjects();

  return {
    props: {
      projects: allPosts,
    },
  };
}

export default ProjectsPage;
