import fs from "fs";
import path from "path";

import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "projects");

export function getProjectsFiles() {
  return fs.readdirSync(projectsDirectory);
}

export function getProjectData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(projectsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export const getAllProjects = () => {
  const postFiles = getProjectsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getProjectData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.id < postB.id ? -1 : 1
  );

  return sortedPosts;
};
