import { useRouter } from "next/router";

import Card from "@/components/layout/card";
import NavigationElements from "@/components/left-navigation/navigation";
import RightSideContent from "@/components/right-content/main-content";
import ProjectDetailContent from "@/components/right-content/projects/project-detail";

import { getProjectData, getProjectsFiles } from "@/lib/projects-util";

const ProjectsPage = (props) => {
  const router = useRouter();
  const currentUrl = router.asPath;
  const confPath = /[^/]*$/.exec(currentUrl)[0];
  return (
    <Card>
      <NavigationElements />
      <RightSideContent>
        <ProjectDetailContent project={props.project} />
      </RightSideContent>
    </Card>
  );
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const projectData = getProjectData(slug);

  return {
    props: {
      project: projectData,
    },
  };
}

export function getStaticPaths() {
  const projectFilesNames = getProjectsFiles();

  const slugs = projectFilesNames.map((fileName) =>
    fileName.replace(/\.js$/, "")
  );

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default ProjectsPage;
