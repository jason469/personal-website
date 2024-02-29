import styles from "./Skills.module.scss";

import { SkillsData } from "@/content/skills.content";
import CategoryRow from "@/components/sections/experiences/skills/categoryRow/CategoryRow";

const Skills = () => {

  return (
    <section className={`${styles.skillPage}`} id={"skills"}>
      <section className={`titleWrapper | w-full flex justify-center`}>
        <h1 className={`${styles.title}`}>Skills</h1>
      </section>

      <section
        className={`flex flex-col flex-wrap gap-6 w-full justify-center items-center`}
      >
        {SkillsData.map(function (categorySkills: allSkillsData) {
          return (
            <CategoryRow
              categoryTitle={categorySkills.categoryTitle}
              skills={categorySkills.skills}
              key={categorySkills.categoryTitle}
            />
          );
        })}
      </section>
    </section>
  );
};

export default Skills;
