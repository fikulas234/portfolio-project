import classes from "../components/right-content/projects/single-project/notification-tab.module.css";
import Link from "next/link";
import Head from "next/head";

const NotificationTab = () => {
  return (
    <div className={classes.project_content}>
      <Head>
        <title>Notification Tab</title>
      </Head>
      <h1>Notification Tab</h1>
      <p>
        This was some simple challenge from
        <Link href="https://www.frontendmentor.io/" target="_blank">
          frontendmentor.io
        </Link>
        . For this I used HTML, CSS and a little bit of a JavaScript.
      </p>
      <div className={classes.demo}>
        <Link
          href="https://fikulas234.github.io/notifications-tab/"
          target="_blank"
        >
          See DEMO
        </Link>
      </div>
    </div>
  );
};

export default NotificationTab;
