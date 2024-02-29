import styles from "./CategoryRow.module.scss";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiAngular,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiJquery,
  SiDjango,
  SiExpress,
  SiFastapi,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGithub,
  SiGit,
  SiMicrosoftword,
  SiMicrosoftexcel,
  SiMicrosoftpowerpoint,
  SiFigma,
  SiCanva,
  SiDocker,
  SiAmazonaws,
  SiContentful,
  SiSanity,
} from "react-icons/si";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";


function CategoryRow({ categoryTitle, skills }: allSkillsData) {
  function getIcon(iconName: string) {
    if (iconName == "SiPython") {
      return <SiPython className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiJavascript") {
      return <SiJavascript className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiTypescript") {
      return <SiTypescript className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiNodedotjs") {
      return <SiNodedotjs className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiReact") {
      return <SiReact className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiAngular") {
      return <SiAngular className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiHtml5") {
      return <SiHtml5 className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiCss3") {
      return <SiCss3 className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiSass") {
      return <SiSass className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiTailwindcss") {
      return <SiTailwindcss className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiJquery") {
      return <SiJquery className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiDjango") {
      return <SiDjango className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiExpress") {
      return <SiExpress className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiFastapi") {
      return <SiFastapi className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiGraphql") {
      return <SiGraphql className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiPostgresql") {
      return <SiPostgresql className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiMongodb") {
      return <SiMongodb className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiRedis") {
      return <SiRedis className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiGithub") {
      return <SiGithub className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiGit") {
      return <SiGit className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiMicrosoftword") {
      return <SiMicrosoftword className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiMicrosoftexcel") {
      return <SiMicrosoftexcel className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiMicrosoftpowerpoint") {
      return <SiMicrosoftpowerpoint className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiFigma") {
      return <SiFigma className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiCanva") {
      return <SiCanva className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiDocker") {
      return <SiDocker className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiAmazonaws") {
      return <SiAmazonaws className={`${styles.skillLogo}`} />;
    } else if (iconName == "SiContentful") {
      return <SiContentful className={`${styles.skillLogo}`} />;
    } else {//if (iconName == "SiSanity")
      return <SiSanity className={`${styles.skillLogo}`} />;
    }
  }

  return (
    <div
      className={`${styles.categoryRow} | flex flex-row w-full gap-2 justify-center flex-wrap`}
    >
      {skills.map(function (skill: singleSkillData) {
        return (
          <Tooltip title={skill.title}>
            <IconButton className={`${styles.iconButton}`}>{getIcon(skill.iconName)}</IconButton>
          </Tooltip>
        );
      })}
    </div>
  );
}

export default CategoryRow;
