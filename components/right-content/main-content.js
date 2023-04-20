import Link from "next/link";
import Image from "next/image";
import { FiMinimize2, FiMaximize } from "react-icons/fi";
import { AiFillCloseSquare } from "react-icons/ai";

import classes from "./main-content.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import HomePageContent from "./homepage";

function RightSideContent(props) {
  const visibility = props.visibility;

  const [spinnerClass, setSpinnerClass] = useState("showSpinner");

  const router = useRouter();
  const currentUrl = router.asPath.includes("?") ? "/" : router.asPath;
  const strIndexClickable = currentUrl.indexOf(
    "/",
    currentUrl.indexOf("/") + 1
  );
  const strIndexNonclickable = currentUrl.lastIndexOf("/");
  const clickablePath = currentUrl.substring(0, strIndexClickable);
  const nonclickablePath = currentUrl.substring(strIndexNonclickable + 1);

  useEffect(() => {
    const timer = setTimeout(() => setSpinnerClass("hideSpinner"), 600);
    return function cleanup() {
      clearInterval(timer);
    };
  }, [spinnerClass]);

  return (
    <div className={classes.content}>
      <div className={classes.url_path}>
        <p>
          {
            <Link href="/">
              <Image
                src="/images/icons/homepage-house.svg"
                width={14}
                height={14}
                alt="house icon"
              />
              homepage
            </Link>
          }
          <Link href={clickablePath}>{clickablePath}</Link>/
          <span>{nonclickablePath}</span>
          <span className={classes[spinnerClass]}></span>
        </p>
      </div>
      <div className={classes.content_wrapper}>
        <div
          className={`${classes.content_wrapper_options} ${classes[visibility]}`}
        >
          <span className={classes.content_minimize} />
          <span className={classes.content_maximize} />
          <span className={classes.content_close} />
        </div>
        {currentUrl === "/" ? <HomePageContent /> : props.children}
      </div>
    </div>
  );
}

export default RightSideContent;
