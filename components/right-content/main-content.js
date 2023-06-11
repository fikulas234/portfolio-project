import Link from "next/link";
import Image from "next/image";

import classes from "./main-content.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import HomePageContent from "./homepage";

const swipeableRoutes = [
  {
    route: "/about-me",
    id: 0,
  },
  {
    route: "/skills",
    id: 1,
  },
  {
    route: "/projects",
    id: 2,
  },
  {
    route: "/resources",
    id: 3,
  },
];

function RightSideContent(props) {
  const visibility = props.visibility;

  const router = useRouter();
  const currentUrl = router.asPath.includes("?") ? "/" : router.asPath;
  const strIndexClickable = currentUrl.indexOf(
    "/",
    currentUrl.indexOf("/") + 1
  );
  const strIndexNonclickable = currentUrl.lastIndexOf("/");
  const clickablePath = currentUrl.substring(0, strIndexClickable);
  const nonclickablePath = currentUrl.substring(strIndexNonclickable + 1);

  const [spinnerClass, setSpinnerClass] = useState("showSpinner");

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const found = swipeableRoutes.find((element) => element.route === currentUrl);
  const [currentRouteIndex, setCurrentRouteIndex] = useState(
    found ? found.id : ""
  );

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentRouteIndex((prevIndex) =>
        prevIndex === swipeableRoutes.length - 1 ? 0 : prevIndex + 1
      );
    } else if (isRightSwipe) {
      setCurrentRouteIndex((prevIndex) =>
        prevIndex === 0 ? swipeableRoutes.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    if (found) {
      router.push(swipeableRoutes[currentRouteIndex].route);
    }
  }, [currentRouteIndex]);

  useEffect(() => {
    const timer = setTimeout(() => setSpinnerClass("hideSpinner"), 600);
    return function cleanup() {
      clearInterval(timer);
    };
  }, [spinnerClass]);

  return (
    <div
      className={classes.content}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
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
