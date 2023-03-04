import { useRouter } from "next/router";
import RightSideContent from "./main-content";
import Card from "../layout/card";
import NavigationElements from "../left-navigation/navigation";

import classes from "./about-me.module.css";

function AboutMeContent() {
  return (
    <div>
      <Card>
        <NavigationElements />
        <RightSideContent>
          <div className={classes.text}>
            <h1>Hello, my name is Filip</h1>
            <p>
              I&apos;m a junior front-end developer. About a year ago I started
              my learning journey and first time I wrote a few lines of code by
              myself and saw the effect from it I fell in love with coding
              instantly. Since then I have remained curious and every day I try
              to learn something new.
            </p>
            <p>
              I&apos;m also passionate about gaming, computers and tech in
              general.
            </p>
          </div>
        </RightSideContent>
      </Card>
    </div>
  );
}

export default AboutMeContent;
