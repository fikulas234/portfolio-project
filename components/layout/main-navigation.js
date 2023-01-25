import Link from "next/link";

import MobileNavigation from "./mobile-navigation";

import classes from "./main-navigation.module.css";
import { Fragment } from "react";

const MainNavigation = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          FT
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <MobileNavigation />
    </Fragment>
  );
};

export default MainNavigation;
