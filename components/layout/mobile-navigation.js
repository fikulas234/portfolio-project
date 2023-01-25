import Link from "next/link";
import { useRouter } from "next/router";

import classes from "./mobile-navigation.module.css";

function MobileNavigation() {
  const router = useRouter();
  const currentUrl = router.asPath;

  return (
    <section className={classes.mobile_nav}>
      <ul>
        <li>
          <Link
            href="/about-me"
            className={
              currentUrl === "/about-me"
                ? `${classes.link_active}`
                : `${classes.link}`
            }
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            href="/skills"
            className={
              currentUrl === "/skills"
                ? `${classes.link_active}`
                : `${classes.link}`
            }
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={
              currentUrl === "/projects"
                ? `${classes.link_active}`
                : `${classes.link}`
            }
          >
            Projects
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default MobileNavigation;
