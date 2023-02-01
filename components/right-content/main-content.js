import Link from "next/link";
import Image from "next/image";

import classes from "./main-content.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import HomePageContent from "./homepage";

function RightSideContent(props) {
  const [date, setDate] = useState(new Date());

  const router = useRouter();
  const currentUrl = router.asPath;

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className={classes.content}>
      <div className={classes.time}>
        {/* {`${date.toLocaleDateString()}` + " " + `${date.toLocaleTimeString()}`} */}
      </div>
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
          {currentUrl}
        </p>
      </div>
      {currentUrl === "/" ? <HomePageContent /> : props.children}
    </div>
  );
}

export default RightSideContent;
