// import ProjectCard from "../../ui/ProjectCard";
// import {projects} from "./ProjectData";
import styles from "./Projects.module.scss";
import FadeInLeftAnimation from "@/components/ui/animations/FadeInLeftAnimation";
// import SlideInBlock from "../../ui/animation/SlideInBlock";

const Projects = () => {
    return (
        <div className={``}>
            <FadeInLeftAnimation>
                <div id={`personal-projects`} className={`page | ${styles.project_page}`}>
                    <h1 className={`title`}>Personal Projects</h1>
                    <div className={`description`}>
                        <strong>My favourite things to work on in my spare time!</strong><br/>
                        Please note that due to limited server resources, these apps may take some time to load when opened for the
                        first time. <br/>Subsequents pages loads will be faster however.
                    </div>
                    {/*<div className={`${styles.list_of_projects}`}>*/}
                    {/*    {projects.map(function (project, index) {*/}
                    {/*        return (*/}
                    {/*            <ProjectCard data={project}*/}
                    {/*                         key={index}*/}
                    {/*                         className={`${styles.list_of_projects__column__project_card}`}*/}

                    {/*            />*/}
                    {/*        )*/}
                    {/*    })}*/}
                    {/*</div>*/}
                </div>
            </FadeInLeftAnimation>
        </div>
    );
}

export default Projects;
