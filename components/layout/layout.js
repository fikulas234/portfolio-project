import { Fragment } from "react";

import NavigationElements from "../left-navigation/navigation";
import RightSideContent from "../right-content/main-content";
import MainNavigation from "./main-navigation";
import Card from "./card";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
