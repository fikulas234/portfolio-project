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
              I&apos;m a junior front-end developer. About year ago I started my
              learning journey and first time I wrote a few lines of code by
              myself and saw the effect from it I fell in love with coding
              instantly. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Aliquam dignissim malesuada tincidunt. Phasellus vehicula
              mattis lectus, nec malesuada arcu vestibulum et. Integer pharetra
              nisl at tortor molestie, a blandit arcu lobortis. In non molestie
              orci, eget iaculis lectus. Maecenas ullamcorper tellus nec ipsum
              dictum, eu pulvinar magna vestibulum. Integer posuere euismod
              nisi. Duis ac quam sed felis cursus pellentesque quis et augue.
              Aenean quis posuere leo. Curabitur tellus tortor, sollicitudin et
              tristique sed, ultricies at nibh. Nulla vel accumsan velit, in
              venenatis metus. Sed rutrum urna id orci sagittis, non luctus
              felis molestie. Suspendisse ullamcorper interdum elit, nec
              pellentesque leo varius ut. Nulla tincidunt scelerisque nisl,
              accumsan pretium metus volutpat eu. Donec vitae porta turpis.
              Etiam fringilla gravida ligula, in porta velit euismod ut. Quisque
              libero magna, malesuada in facilisis sed, venenatis non ante.
              Mauris sem nisl, posuere in turpis eget, condimentum tincidunt
              risus. Etiam lobortis orci lorem, sed sollicitudin magna tempor
              vitae. In at porta sapien. Etiam id orci vel metus tempus
              condimentum. Sed ut ligula quis nulla vehicula convallis quis ut
              lectus. Nam eu purus pretium, tempor leo sit amet, vehicula quam.
            </p>
          </div>
        </RightSideContent>
      </Card>
    </div>
  );
}

export default AboutMeContent;
