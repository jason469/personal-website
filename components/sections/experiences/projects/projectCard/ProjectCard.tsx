import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, CardActions } from "@mui/material";
import styles from "./ProjectCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

type projectCardProps = {
  data: projectData;
};

export default function ProjectCard({ data }: projectCardProps) {
  return (
    <Card className={`${styles.card}`}>
      <CardActionArea
        className={`hover:bg-primary-grey-500 transition-duration-500`}
      >
        <a href={data.website.link} target="_blank">
          <CardContent className={`${styles.card__content}`}>
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
            <div className={`${styles.skills} | flex flex-row gap-2 mt-2`}>
              {data.skills.map(function (skill, index) {
                return (
                  <div className={`${styles.skill}`} key={index}>
                    <p className={`${styles.skill__text}`}>{skill}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </a>
      </CardActionArea>
      <CardActions>
        {data.github && (
          <a href={data.github.link} target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        )}
        <a href={data.website.link} target="_blank">
          Visit
        </a>
      </CardActions>
    </Card>
  );
}
