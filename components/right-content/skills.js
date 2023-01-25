import Image from "next/image";

import RightSideContent from "./main-content";
import Card from "../layout/card";
import NavigationElements from "../left-navigation/navigation";

import classes from "./skills.module.css";

function SkillsContent() {
  return (
    <Card>
      <NavigationElements />
      <RightSideContent>
        <div className={classes.images}>
          <Image
            src="images/icons/nextjs-original-wordmark.svg"
            height={150}
            width={150}
            alt="react logo"
          />
          <Image
            src="images/icons/react-original-wordmark.svg"
            height={150}
            width={150}
            alt="react logo"
          />
          <Image
            src="images/icons/javascript-original.svg"
            height={150}
            width={150}
            alt="react logo"
          />
          <Image
            src="images/icons/css3-plain-wordmark.svg"
            height={150}
            width={150}
            alt="react logo"
          />
          <Image
            src="images/icons/html5-plain-wordmark.svg"
            height={150}
            width={150}
            alt="react logo"
          />
          <Image
            src="images/icons/git-plain-wordmark.svg"
            height={150}
            width={150}
            alt="react logo"
          />
        </div>
      </RightSideContent>
    </Card>
  );
}

export default SkillsContent;
