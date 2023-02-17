import Link from "next/link";
import Image from "next/image";

import classes from "./project-item.module.css";

const ProjectItem = (props) => {
  const { slug } = props.projects;

  const pathFix = slug.replace(/^.{2}/g, "");
  const imagePath = `/images/project-images/${pathFix}.PNG`;
  const linkPath = `/projects/${slug}`;
  const projectTitle = pathFix
    // .replaceAll("-", " ")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <li className={classes.project}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image src={imagePath} alt={slug} width={500} height={400} />
        </div>
        <div className={classes.content}>
          <h2>{projectTitle}</h2>
          <p>See more</p>
        </div>
      </Link>
    </li>
  );
};

export default ProjectItem;
