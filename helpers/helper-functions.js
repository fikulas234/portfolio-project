import { Fragment } from "react";
import Link from "next/link";
import classes from "@/components/left-navigation/navigation.module.css";

export default function Links(props) {
  const NAVIGATION_LINKS = [
    {
      text: "About Me",
      href: "/about-me",
    },
    {
      text: "Skills",
      href: "/skills",
    },
    {
      text: "Projects",
      href: "/projects",
    },
    {
      text: "Resources",
      href: "/resources",
    },
  ];

  return (
    <Fragment>
      {NAVIGATION_LINKS.map((link, index) => {
        <li key={index}>
          <Link
            className={
              props.url === link.href
                ? `${classes.link_active}`
                : `${classes.link}`
            }
          >
            {link.text}
          </Link>
        </li>;
      })}
    </Fragment>
  );
}
