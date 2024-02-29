import styles from "./CategoryRow.module.scss";
import * as siIcons from "react-icons/si";

function CategoryRow({ categoryTitle, skills }: allSkillsData) {

  return (
    <div
      className={`${styles.categoryRow} | flex flex-row w-full gap-2 justify-center`}
    >
      {skills.map(function (skill: singleSkillData) {
        let iconName: any = skill.iconName;
        // let Icon = siIcons[iconName]
        let Icon = siIcons["SiPytest"]
        return <Icon className={`${styles.skillLogo}`} />;
      })}
    </div>
  );
}

export default CategoryRow;
