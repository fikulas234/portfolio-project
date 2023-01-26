import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import RightSideContent from "./main-content";
import Card from "../layout/card";
import NavigationElements from "../left-navigation/navigation";

import classes from "./skills.module.css";

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
          <Image
            src="images/icons/nextjs-original-wordmark.svg"
            height={150}
            width={150}
            alt="react logo"
            onClick={imgPathHandler}
          />

          <Image
            src="images/icons/react-original-wordmark.svg"
            height={150}
            width={150}
            alt="react logo"
            onClick={imgPathHandler}
          />
          <Image
            src="images/icons/javascript-original.svg"
            height={150}
            width={150}
            alt="react logo"
            onClick={imgPathHandler}
          />
          <Image
            src="images/icons/css3-plain-wordmark.svg"
            height={150}
            width={150}
            alt="react logo"
            onClick={imgPathHandler}
          />
          <Image
            src="images/icons/html5-plain-wordmark.svg"
            height={150}
            width={150}
            alt="react logo"
            onClick={imgPathHandler}
          />
          <Image
            src="images/icons/git-plain-wordmark.svg"
            height={150}
            width={150}
            alt="react logo"
            onClick={imgPathHandler}
          />
        </div>
      </RightSideContent>
    </Card>
  );
}

export default SkillsContent;
