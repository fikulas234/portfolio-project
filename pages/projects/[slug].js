import { useRouter } from "next/router";

import Card from "@/components/layout/card";
import NavigationElements from "@/components/left-navigation/navigation";
import RightSideContent from "@/components/right-content/main-content";
import ProjectDetailContent from "@/components/right-content/projects/project-detail";

const ProjectsPage = () => {
  const router = useRouter();
  const currentUrl = router.asPath;
  const confPath = /[^/]*$/.exec(currentUrl)[0];
  return (
    <Card>
      <NavigationElements />
      <RightSideContent>
        <ProjectDetailContent path={confPath} />
      </RightSideContent>
    </Card>
  );
};

export default ProjectsPage;
