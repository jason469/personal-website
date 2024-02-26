import styles from "./CategoryRow.module.scss";
// @ts-ignore
import Image from 'next/image'

function CategoryRow({ categoryTitle, skills }: allSkillsData) {
  return (
    <div className={`${styles.categoryRow} | flex flex-row w-full gap-2 justify-center`}>
      {skills.map(function (skill: singleSkillData) {
        return (
          <div className={`relative object-contain w-10 h-10 | ${styles.imageWrapper}`}>
            <Image
              src={`/sections/skills/logos/${skill.iconName}`}
              alt={skill.title}
              fill={true}
              className={`${styles.skillLogo} hidden md:block`}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CategoryRow;
