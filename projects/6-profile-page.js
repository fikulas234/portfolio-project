import classes from "../components/right-content/projects/single-project/profile-page.module.css";
import Link from "next/link";
import Head from "next/head";

const ProfilePage = () => {
  return (
    <div className={classes.project_content}>
      <Head>
        <title>Profile Page</title>
      </Head>
      <h1>Profile Page</h1>
      <p>
        This was some simple project at the beggining of my journey to learn
        Frontend technologies. The page was done in pure HTML/CSS.
        <Link
          href="https://www.bootdey.com/snippets/view/profile-with-data-and-skills"
          target="_blank"
        >
          This
        </Link>{" "}
        was the inspiration where it was made with Bootstrap but I wanted to
        exercise css so I made it without any css framework.
      </p>
      <div className={classes.demo}>
        <Link href="https://fikulas234.github.io/profile-page/" target="_blank">
          See DEMO
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
