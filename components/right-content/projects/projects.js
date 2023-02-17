import RightSideContent from "../main-content";
import Card from "../../layout/card";
import NavigationElements from "../../left-navigation/navigation";
import ProjectItem from "./project-item";
import classes from "./projects.module.css";

function ProjectsContent(props) {
  const { projects } = props;

  return (
    <Card>
      <NavigationElements />
      <RightSideContent>
        <ul className={classes.grid}>
          {projects.map((item, index) => (
            <ProjectItem key={index} projects={item} />
          ))}
        </ul>
      </RightSideContent>
    </Card>
  );
}

export default ProjectsContent;
