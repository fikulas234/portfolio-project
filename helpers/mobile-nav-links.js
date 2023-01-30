import { Fragment } from "react";
import Link from "next/link";
import classes from "@/components/layout/mobile-navigation.module.css";

export default function MobileLinks(props) {
  const confPath = "/" + props.url.split("/")[1];

  const navLinks = [
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
      {navLinks.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className={
              confPath === link.href ? classes.link_active : classes.link
            }
          >
            {link.text}
          </Link>
        </li>
      ))}
    </Fragment>
  );
}
