import { icon } from "@fortawesome/fontawesome-svg-core";
import styles from "./CategoryRow.module.scss";
// @ts-ignore
import * as siIcons from "react-icons/si";

function CategoryRow({ categoryTitle, skills }: allSkillsData) {
  return (
    <div
      className={`${styles.categoryRow} | flex flex-row w-full gap-2 justify-center`}
    >
      {skills.map(function (skill: singleSkillData) {
        // let iconName = skill.iconName
        // let Icon = siIcons[iconName]
        let Icon = siIcons["SiPython"]
        return (
          <Icon className={`${styles.skillLogo}`} />
        );
      })}
    </div>
  );
}

export default CategoryRow;
