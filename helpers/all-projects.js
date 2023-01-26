import { Fragment } from "react";

const projects = [
  {
    title: "Polovni Automobili",
    img: "polovni-automobili.PNG",
    slug: "polovni-automobili",
    text: "This was the first project I did after learning React. It's a single page app, which is a copy of the most popular online vehicle marketplace in Serbia - polovniautomobili.com",
  },
  {
    title: "Fitness Coach",
    img: "fitness-web.PNG",
    slug: "fitness-coach",
    text: "My friend who is a personal coach wanted some simple web page where he can advertise himself. It was done in vanilla javascript, but it's not totally finished.",
  },
];

export const AllProjects = () => {
  return projects;
};

export const currentProject = (path) => {
  return (
    <Fragment>
      {projects.map((project) => (
        <div></div>
      ))}
    </Fragment>
  );
};
