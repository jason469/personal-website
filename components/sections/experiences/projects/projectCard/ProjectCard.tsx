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
      className={`${styles.card} | flex flex-col justify-between bg-white p-3`}
    >
      <div className={`hover:bg-primary-grey-500 transition-duration-500`}>
        <a href={data.website.link} target="_blank">
          <div className={`${styles.card__content} | flex flex-col justify-between h-full`}>
            <div className={`${styles.text}`}>
              <div className={` `}>
                <Image
                  src={`/sections/projects/logos/${data.logoName}`}
                  alt={` ${data.logoName}`}
                  width={70}
                  height={70}
                />
              </div>
              {data.inDevelopment && <p className={`italic`}>In development</p>}
              <p className={`${styles.description}`}>{data.description}</p>
            </div>
            <div
              className={`${styles.skills} | flex flex-row gap-2 mt-2 flex-wrap`}
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
        className={`${styles.card__actions} | flex flex-row align-baseline gap-2`}
      >
        {data.github && (
          <a href={data.github.link} target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        )}
        <a href={data.website.link} target="_blank">
          Visit
        </a>
      </div>
    </div>
  );
}
