import { useRouter } from "next/router";
import classes from "./skills.module.css";

import RightSideContent from "./main-content";
import Card from "../layout/card";
import NavigationElements from "../left-navigation/navigation";
import Images from "@/helpers/skills-images";

function SkillsContent() {
  const router = useRouter();
  const currentUrl = router.asPath;

  function imgPathHandler(e) {
    const confPath = /[^/]*$/.exec(e.target.getAttribute("src"))[0];
    router.push(currentUrl + "/" + confPath);
  }

  return (
    <Card>
      <NavigationElements />
      <RightSideContent>
        <div className={classes.images}>
          <Images clicked={imgPathHandler} />
        </div>
      </RightSideContent>
    </Card>
  );
}

export default SkillsContent;
