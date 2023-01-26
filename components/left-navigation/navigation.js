import classes from "./navigation.module.css";
import { useRouter } from "next/router";
import Links from "@/helpers/left-nav-links";

const NavigationElements = () => {
  const router = useRouter();
  const currentUrl = router.asPath;

  return (
    <section className={classes.navigation}>
      <ul>
        <Links url={currentUrl} />
      </ul>
    </section>
  );
};

export default NavigationElements;
