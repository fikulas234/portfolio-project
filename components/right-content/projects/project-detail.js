import Image from "next/image";
import { useRouter } from "next/router";

import classes from "./project-detail.module.css";

import PolovniAutomobili from "@/projects/1-polovni-automobili";
import FitnessWeb from "@/projects/2-fitness-web";

const ProjectDetailContent = (props) => {
  const { project } = props;

  const router = useRouter();
  const currentUrl = router.asPath;
  const confPath = /[^/]*$/.exec(currentUrl)[0];
  const fixPath = confPath.replace(/^.{2}/g, "");

  const imagePath = `/images/project-images/${fixPath}.PNG`;

  return (
    <div className={classes.project}>
      <div className={classes.image}>
        <Image src={imagePath} width={600} height={600} alt={fixPath} />
      </div>
      {fixPath === "polovni-automobili" && <PolovniAutomobili />}
      {fixPath === "fitness-web" && <FitnessWeb />}
    </div>
  );
};

export default ProjectDetailContent;
