import RightSideContent from "./main-content";
import Card from "../layout/card";
import NavigationElements from "../left-navigation/navigation";
import classes from "./resources.module.css";
import Link from "next/link";

const ResourcesContent = () => {
  return (
    <Card>
      <NavigationElements />
      <RightSideContent>
        <div className={classes.content}>
          <h1>Resources</h1>
          <p>
            Here you will find resources I have used while learning front-end
            technologies. Maybe it will be usefull for someone starting learning
            journey so I will leave links where you can find resources and
            courses.
          </p>
          <p>
            <Link href="https://www.theodinproject.com/" target="_blank">
              The Odin Project
            </Link>{" "}
            - overall, one of the best free resources for learning front-end. It
            also has very nice and helpfull community!
          </p>
          <p>
            <Link
              href="https://www.udemy.com/course/the-complete-javascript-course/?utm_campaign=website1010&utm_medium=website1010&utm_source=mycoupon"
              target="_blank"
            >
              The Complete JavaScript Course 2023: From Zero to Expert!
            </Link>{" "}
            - personally, I have found that Jonas Schmedtmann has the best
            approach in teaching complicated concepts so it is easy to
            understand.
          </p>
          <p>
            <Link
              href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/?couponCode=D_0223"
              target="_blank"
            >
              React.js course
            </Link>{" "}
            - great React.js course from Maximilian Schwarzmüller who is also a
            great teacher.
          </p>
          <p>
            <Link
              href="https://www.udemy.com/course/nextjs-react-the-complete-guide/?couponCode=D_0223"
              target="_blank"
            >
              Next.js course
            </Link>{" "}
            - another great course from Maximilian Schwarzmüller but for
            Next.js.
          </p>
        </div>
      </RightSideContent>
    </Card>
  );
};

export default ResourcesContent;
