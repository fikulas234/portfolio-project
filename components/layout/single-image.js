import classes from "./single-image.module.css";

function SingleImage(props) {
  return <div className={classes.image}>{props.children}</div>;
}

export default SingleImage;
