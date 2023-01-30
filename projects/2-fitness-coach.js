import classes from "../components/right-content/projects/single-project/fitness-coach.module.css";
import Link from "next/link";

const FitnessWeb = () => {
  return (
    <div className={classes.project_content}>
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
