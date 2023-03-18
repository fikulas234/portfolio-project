import classes from "./homepage.module.css";

const HomePageContent = () => {
  return (
    <div className={classes.content}>
      <h1>Welcome to my portfolio website</h1>
      <p>
        The idea for this portfolio was that it looks like a kind of
        &quot;file-based&quot; system where you can navigate through it. I just
        started learning <span>Next.js </span>and this was a great opportunity
        to make something practical with the newly acquired knowledge. It was a
        fun experience and it has helped me to understand some of this framework
        concepts and why it is so powerful and useful.
      </p>
      <p className={classes.look}>Take a look!</p>
    </div>
  );
};

export default HomePageContent;
