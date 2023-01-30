import classes from "../components/right-content/projects/single-project/shakes-recipes.module.css";
import Link from "next/link";

const ShakesRecipes = () => {
  return (
    <div className={classes.project_content}>
      <h1>Shakes Recipes</h1>
      <p>
        The idea for this project was that you can input all the ingredients you
        have and get back shakes recipes which contains that ingerdients.
        Project was done at the beggining of my journey with learning JavaScript
        so even tho it has some bugs it was stll valuable for my learning at the
        time.
      </p>
      <div className={classes.demo}>
        <Link
          href="https://fikulas234.github.io/get-recipe-from-ingredients/"
          target="_blank"
        >
          See DEMO
        </Link>
      </div>
    </div>
  );
};

export default ShakesRecipes;
