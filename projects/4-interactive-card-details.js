import classes from "../components/right-content/projects/single-project/interactive-card.module.css";
import Link from "next/link";

const InteractiveCardDetails = () => {
  return (
    <div className={classes.project_content}>
      <h1>Interactive Card Details</h1>
      <p>
        This was challenge from
        <Link href="https://www.frontendmentor.io/" target="_blank">
          frontendmentor.io
        </Link>
        . For this I used HTML, CSS and JavaScript for validation.
      </p>
      <div className={classes.demo}>
        <Link
          href="https://fikulas234.github.io/interactive-card-details/"
          target="_blank"
        >
          See DEMO
        </Link>
      </div>
    </div>
  );
};

export default InteractiveCardDetails;
