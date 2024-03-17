import styles from "./Projects.module.scss";

import { projects } from "@/content/projects.content";
import ProjectCard from "@/components/sections/experiences/projects/projectCard/ProjectCard";
import Grid from "@mui/material/Unstable_Grid2";

const Projects = () => {
  return (
    <div className={`w-full flex flex-col items-center | ${styles.projects}`}>
      <div
        className={`${styles.headings} | w-full mb-6 flex flex-col items-center`}
      >
        <h1 className={`${styles.title}`}>Personal Projects</h1>
        <article className={`${styles.description}`}>
          <strong>My favourite things to work on in my spare time!</strong>
          <br />
          <p>
            Please note that due to limited server resources, these apps may
            take some time to load when opened for the first time. <br />
            Subsequents pages loads will be faster however.
          </p>
        </article>
      </div>
      <Grid container spacing={2} className={``}>
        {projects.map(function (project: projectData, index: number) {
          return (
            <Grid xs={12} sm={6} lg={4}>
              <ProjectCard data={project} key={index} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Projects;
