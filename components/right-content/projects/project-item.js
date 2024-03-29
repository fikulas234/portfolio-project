import Link from "next/link";
import Image from "next/image";

import classes from "./project-item.module.css";

const ProjectItem = (props) => {
  const { slug } = props.projects;

  const pathFix = slug.replace(/^.{2}/g, "");
  const imagePath = `/images/project-images/${pathFix}.webp`;
  const linkPath = `/projects/${slug}`;
  const projectTitle = pathFix
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const polovniTags = ["React", "HTML", "CSS"];
  const fitnessTags = ["JS", "HTML", "CSS"];
  const shakesTags = ["JS", "HTML", "CSS"];
  const cardDetailsTags = ["JS", "HTML", "CSS"];
  const notificationTags = ["JS", "HTML", "CSS"];
  const profilePageTags = ["HTML", "CSS"];

  return (
    <li className={classes.project}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image src={imagePath} alt={slug} width={700} height={500} />
        </div>
        <div className={classes.content}>
          <h2>{projectTitle}</h2>
        </div>
      </Link>
      <div className={classes.overlay}>
        <Link href={linkPath} className={classes.overlay_link}>
          <p className={classes.overlay_text}>SEE MORE</p>
        </Link>
      </div>

      <div className={classes.tags}>
        {projectTitle === "Polovni Automobili" &&
          polovniTags.map((tag) => <span key={tag}>{tag}</span>)}
        {projectTitle === "Fitness Coach" &&
          fitnessTags.map((tag) => <span key={tag}>{tag}</span>)}
        {projectTitle === "Shakes Recipes" &&
          shakesTags.map((tag) => <span key={tag}>{tag}</span>)}
        {projectTitle === "Interactive Card Details" &&
          cardDetailsTags.map((tag) => <span key={tag}>{tag}</span>)}
        {projectTitle === "Notification Tab" &&
          notificationTags.map((tag) => <span key={tag}>{tag}</span>)}
        {projectTitle === "Profile Page" &&
          profilePageTags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      <Link href={linkPath}>
        <p className={classes.see_more}>See more</p>
      </Link>
    </li>
  );
};

export default ProjectItem;
