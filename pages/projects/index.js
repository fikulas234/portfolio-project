import ProjectsContent from "@/components/right-content/projects/projects";
import { AllProjects } from "@/helpers/all-projects";

function ProjectsPage(props) {
  return <ProjectsContent projects={props.projects} />;
}

export function getStaticProps() {
  const allPosts = AllProjects();

  return {
    props: {
      projects: allPosts,
    },
  };
}

export default ProjectsPage;
