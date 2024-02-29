import styles from "./ProjectCard.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

type projectCardProps = {
  data: projectData;
};

export default function ProjectCard({ data }: projectCardProps) {
  return (
    <div
      className={`${styles.card} | flex flex-col justify-between bg-white h-full`}
    >
      <div className={`${styles.card__info} | h-full`}>
        <a href={data.website.link} target="_blank">
          <div
            className={`${styles.card__content} | flex flex-col justify-between h-full gap-3`}
          >
            <div className={`${styles.logo} | px-6 pt-6`}>
              <div className={`${styles.imageWrapper}`}>
                <Image
                  src={`/sections/projects/logos/${data.logoName}`}
                  alt={` ${data.logoName}`}
                  fill={true}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <div
              className={`${styles.text} | px-6 py-3 h-full | hover:bg-primary-a10 duration-300`}
            >
              {data.inDevelopment && <p className={`italic`}>In development</p>}
              <p className={`${styles.description}`}>{data.description}</p>
            </div>
            <div
              className={`${styles.skills} | flex flex-row gap-2 flex-wrap px-6 items-baseline`}
            >
              {data.skills.map(function (skill, index) {
                return (
                  <div className={`${styles.skill}`} key={index}>
                    <p className={`${styles.skill__text}`}>{skill}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </a>
      </div>
      <div
        className={`${styles.card__actions} | flex flex-row align-baseline gap-6 | px-6 py-3`}
      >
        {data.github && (
          <a href={data.github.link} target="_blank" className={`=`}>
            <FontAwesomeIcon
              icon={faGithub}
              className={`${styles.logo} | align-middle`}
            />
          </a>
        )}
        <a href={data.website.link} target="_blank">
          <p className={`${styles.appLink}`}>Visit</p>
        </a>
      </div>
    </div>
  );
}
