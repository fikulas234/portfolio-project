import Link from "next/link";
import classes from "./navigation.module.css";
import { useRouter } from "next/router";

const NavigationElements = () => {
  const router = useRouter();
  const currentUrl = router.asPath;

  return (
    <section className={classes.navigation}>
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
        <li>
          <Link
            href="/resources"
            className={
              currentUrl === "/resources"
                ? `${classes.link_active}`
                : `${classes.link}`
            }
          >
            Resources
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default NavigationElements;
