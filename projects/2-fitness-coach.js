import classes from "../components/right-content/projects/single-project/fitness-coach.module.css";
import Link from "next/link";
import Head from "next/head";

const FitnessWeb = () => {
  return (
    <div className={classes.project_content}>
      <Head>
        <title>Fitness Coach</title>
      </Head>
      <h1>Fitness Coach</h1>
      <p>
        My friend who is a personal coach wanted some simple web page where he
        can advertise himself. It was done in vanilla JavaScript.
      </p>
      <div className={classes.demo}>
        <Link
          href="https://fikulas234.github.io/fitness-project/"
          target="_blank"
        >
          See DEMO
        </Link>
      </div>
    </div>
  );
};

export default FitnessWeb;
