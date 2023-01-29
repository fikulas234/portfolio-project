import Link from "next/link";
import Image from "next/image";

import classes from "./project-item.module.css";

const ProjectItem = (props) => {
  const { title, img, slug } = props.projects;

  const pathFix = slug.replace(/^.{2}/g, "");
  const imagePath = `/images/project-images/${pathFix}.PNG`;
  const linkPath = `/projects/${slug}`;

  return (
    <li className={classes.project}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image src={imagePath} alt={slug} width={300} height={200} />
        </div>
        <div className={classes.content}>
          <h3>{pathFix}</h3>
          <p>See more</p>
        </div>
      </Link>
    </li>
  );
};

export default ProjectItem;
