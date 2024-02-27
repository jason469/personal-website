import styles from "./CategoryRow.module.scss";
// @ts-ignore
import Image from "next/image";

function CategoryRow({ categoryTitle, skills }: allSkillsData) {
  return (
    <div
      className={`${styles.categoryRow} | flex flex-row w-full gap-2 justify-center`}
    >
      {skills.map(function (skill: singleSkillData) {
        return (
          <Image
            src={`/sections/skills/logos/${skill.iconName}`}
            alt={skill.title}
            width={30}
            height={30}
            className={`${styles.skillLogo} hidden md:block`}
          />
        );
      })}
    </div>
  );
}

export default CategoryRow;
