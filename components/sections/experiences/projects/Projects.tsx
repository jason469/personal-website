import { projects } from "@/content/projects.content";
import styles from "./Projects.module.scss";
import FadeInLeftAnimation from "@/components/ui/animations/FadeInLeftAnimation";
import ProjectCard from "@/components/sections/experiences/projects/projectCard/ProjectCard";

const Projects = () => {
  return (
    <section id={`projects`} className={`${styles.projects}`}>
      <FadeInLeftAnimation>
        <article className={`w-full flex flex-col items-center`}>
          <section className={`titleWrapper | w-full flex justify-center`}>
            <h1 className={`${styles.title}`}>Personal Projects</h1>
          </section>
          <article className={`description`}>
            <strong>My favourite things to work on in my spare time!</strong>
            <br />
            Please note that due to limited server resources, these apps may
            take some time to load when opened for the first time. <br />
            Subsequents pages loads will be faster however.
          </article>
          <section className={`${styles.list_of_projects}`}>
            {projects.map(function (project: projectData, index: number) {
              return <ProjectCard data={project} key={index} />;
            })}
          </section>
        </article>
      </FadeInLeftAnimation>
    </section>
  );
};

export default Projects;
