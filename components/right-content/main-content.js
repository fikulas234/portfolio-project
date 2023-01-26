import classes from "./main-content.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function RightSideContent(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  const router = useRouter();
  const currentUrl = router.asPath;

  return (
    <div className={classes.content}>
      <div className={classes.time}>
        {/* {`${date.toLocaleDateString()}` + " " + `${date.toLocaleTimeString()}`} */}
        1/25/2023
      </div>
      <div className={classes.url_path}>
        <p>{`homepage` + `${currentUrl}`}</p>
      </div>
      {currentUrl === "/" ? "Some content" : props.children}
    </div>
  );
}

export default RightSideContent;
