import RightSideContent from "./main-content";
import Card from "../layout/card";
import NavigationElements from "../left-navigation/navigation";

function ProjectsContent() {
  return (
    <div>
      <Card>
        <NavigationElements />
        <RightSideContent>Projects</RightSideContent>
      </Card>
    </div>
  );
}

export default ProjectsContent;
