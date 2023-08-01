import {projects} from "@/content/projects.content";
import styles from "./Projects.module.scss";
import FadeInLeftAnimation from "@/components/ui/animations/FadeInLeftAnimation";
import ProjectCard from "@/components/sections/experiences/projects/projectCard/ProjectCard";

const Projects = () => {
    return (
        <div className={``}>
            <FadeInLeftAnimation>
                <div id={`projects`} className={`w-full flex flex-col items-center`}>
                    <h1 className={`title`}>Personal Projects</h1>
                    <div className={`description`}>
                        <strong>My favourite things to work on in my spare time!</strong><br/>
                        Please note that due to limited server resources, these apps may take some time to load when
                        opened for the
                        first time. <br/>Subsequents pages loads will be faster however.
                    </div>
                    <div className={`${styles.list_of_projects}`}>
                        {projects.map(function (project:projectData, index:number) {
                            return (
                                <ProjectCard
                                    data={project}
                                    key={index}
                                />
                            )
                        })}
                    </div>
                </div>
            </FadeInLeftAnimation>
        </div>
    );
}

export default Projects;
