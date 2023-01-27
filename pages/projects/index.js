import ProjectsContent from "@/components/right-content/projects/projects";
import { getAllProjects } from "@/lib/projects-util";

function ProjectsPage(props) {
  return <ProjectsContent projects={props.projects} />;
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
