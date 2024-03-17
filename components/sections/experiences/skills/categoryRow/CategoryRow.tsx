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
import { TbBrandNextjs } from "react-icons/tb";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

function CategoryRow({
  categoryTitle,
  skills,
}: allSkillsData) {
  function getIcon(iconName: string, iconColourHex: string) {
    if (iconName == "SiPython") {
      return (
        <SiPython
          className={`${styles.skillLogo}`}
          style={{ color: `${iconColourHex}` }}
        />
      );
    } else if (iconName == "SiJavascript") {
      return (
        <SiJavascript
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "SiTypescript") {
      return (
        <SiTypescript
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "SiNodedotjs") {
      return (
        <SiNodedotjs
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "SiReact") {
      return (
        <SiReact
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "SiAngular") {
      return (
        <SiAngular
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "SiHtml5") {
      return (
        <SiHtml5
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "SiCss3") {
      return (
        <SiCss3
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "SiSass") {
      return (
        <SiSass
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "SiTailwindcss") {
      return (
        <SiTailwindcss
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "SiJquery") {
      return (
        <SiJquery
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "SiDjango") {
      return (
        <SiDjango
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "SiExpress") {
      return (
        <SiExpress
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "SiFastapi") {
      return (
        <SiFastapi
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "SiGraphql") {
      return (
        <SiGraphql
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "SiPostgresql") {
      return (
        <SiPostgresql
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "SiMongodb") {
      return (
        <SiMongodb
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "SiRedis") {
      return (
        <SiRedis
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "SiGithub") {
      return (
        <SiGithub
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "SiGit") {
      return (
        <SiGit
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "SiMicrosoftword") {
      return (
        <SiMicrosoftword
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "SiMicrosoftexcel") {
      return (
        <SiMicrosoftexcel
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "SiMicrosoftpowerpoint") {
      return (
        <SiMicrosoftpowerpoint
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "SiFigma") {
      return (
        <SiFigma
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "SiCanva") {
      return (
        <SiCanva
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "SiDocker") {
      return (
        <SiDocker
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "SiAmazonaws") {
      return (
        <SiAmazonaws
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "SiContentful") {
      return (
        <SiContentful
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else if (iconName == "TbBrandNextjs") {
      return (
        <TbBrandNextjs
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    } else {
      //if (iconName == "SiSanity")
      return (
        <SiSanity
          className={`${styles.skillLogo}`}
          style={{ color: iconColourHex }}
        />
      );
    }
  }

  return (
    <div
      className={`${styles.categoryRow} | flex flex-row w-full gap-2 justify-center flex-wrap`}
    >
      {skills.map(function (skill: singleSkillData) {
        return (
          <Tooltip title={skill.title}>
            <IconButton className={`${styles.iconButton}`}>
              {getIcon(skill.iconName, skill.iconColourHex)}
            </IconButton>
          </Tooltip>
        );
      })}
    </div>
  );
}

export default CategoryRow;
