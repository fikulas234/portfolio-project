import { useRouter } from "next/router";

import classes from "./mobile-navigation.module.css";
import MobileLinks from "@/helpers/mobile-nav-links";

function MobileNavigation() {
  const router = useRouter();
  const currentUrl = router.asPath;

  return (
    <section className={classes.mobile_nav}>
      <ul>
        <MobileLinks url={currentUrl} />
      </ul>
    </section>
  );
}

export default MobileNavigation;
