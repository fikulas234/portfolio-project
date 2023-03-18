import classes from "../components/right-content/projects/single-project/polovni-automobili.module.css";
import Link from "next/link";
import Head from "next/head";

const PolovniAutomobili = () => {
  return (
    <div className={classes.project_content}>
      <Head>
        <title>Polovni Automobili</title>
      </Head>
      <h1>Polovni Automobili</h1>
      <p>
        This was the first project I did after learning React.js. It's a single
        page app, which is a copy of the most popular online vehicle marketplace
        in Serbia -{" "}
        <Link href="https://www.polovniautomobili.com/" target="_blank">
          polovniautomobili.com
        </Link>
      </p>
      <div className={classes.demo}>
        <Link href="https://polovni-auti.netlify.app/" target="_blank">
          See DEMO
        </Link>
      </div>
    </div>
  );
};

export default PolovniAutomobili;
