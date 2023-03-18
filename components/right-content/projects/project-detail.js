import Image from "next/image";
import classes from "./project-detail.module.css";

import PolovniAutomobili from "@/projects/1-polovni-automobili";
import FitnessWeb from "@/projects/2-fitness-coach";
import ShakesRecipes from "@/projects/3-shakes-recipes";
import InteractiveCardDetails from "@/projects/4-interactive-card-details";
import NotificationTab from "@/projects/5-notification-tab";
import ProfilePage from "@/projects/6-profile-page";

const ProjectDetailContent = (props) => {
  const { project } = props;

  const fixPath = project.slug.replace(/^.{2}/g, "");
  const imagePath = `/images/project-images/${fixPath}.PNG`;

  return (
    <div className={classes.project}>
      <div className={classes.image}>
        <Image src={imagePath} width={1200} height={800} alt={fixPath} />
      </div>
      {fixPath === "polovni-automobili" && <PolovniAutomobili />}
      {fixPath === "fitness-coach" && <FitnessWeb />}
      {fixPath === "shakes-recipes" && <ShakesRecipes />}
      {fixPath === "interactive-card-details" && <InteractiveCardDetails />}
      {fixPath === "notification-tab" && <NotificationTab />}
      {fixPath === "profile-page" && <ProfilePage />}
    </div>
  );
};

export default ProjectDetailContent;
