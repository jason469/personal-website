import styles from './Skills.module.scss'
import SkillCard from "@/components/sections/experiences/skills/skillCard/SkillCard";
import {DeploymentData, ManagementData, TechData} from "@/content/skills.content";


const Skills = () => {
    return (
        <section className={`${styles.skillPage}`} id={"skills"}>
            <h1 className={`title`}>Skills</h1>
            <article className={``}>
                Hover over a card to see my specific skills
            </article>

            <article className={`flex flex-col flex-wrap gap-4 w-full justify-center items-center md:flex-row`}>
                {TechData.map(function (tech: allSkillsData) {
                    return (
                        <SkillCard
                            category={tech.category}
                            skills={tech.skills}
                            key={tech.category.title}
                        />
                    )
                })}
                {ManagementData.map(function (management: allSkillsData) {
                    return (
                        <SkillCard
                            category={management.category}
                            skills={management.skills}
                            key={management.category.title}
                        />
                    )
                })}

                {DeploymentData.map(function (management: allSkillsData) {
                    return (
                        <SkillCard
                            category={management.category}
                            skills={management.skills}
                            key={management.category.title}
                        />
                    )
                })
                }
            </article>
        </section>
    );
}

export default Skills;
