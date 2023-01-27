import Image from "next/image";
import reactMarkdown from "react-markdown";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import classes from "./project-detail.module.css";

const ProjectDetailContent = (props) => {
  const { project } = props;

  const imagePath = `/images/project-images/${project.img}`;

  return (
    <div className={classes.project}>
      <div className={classes.image}>
        <Image src={imagePath} width={600} height={600} />
      </div>
      <ReactMarkdown>{project.content}</ReactMarkdown>
    </div>
  );
};

export default ProjectDetailContent;
