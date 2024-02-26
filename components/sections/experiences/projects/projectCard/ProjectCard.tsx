import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
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
      <CardActionArea className={`hover:bg-primary-grey-500`}>
        <a href={data.website.link} target="_blank">
          <CardContent className={`${styles.card__content}`}>
            <div className={`bold text-primary-purple mt-2 `}>
              <a href={data.website.link} target="_blank">
                <Image
                  src={`/sections/projects/logos/${data.logoName}`}
                  alt={` ${data.logoName}`}
                  width={200}
                  height={200}
                />
              </a>
            </div>
            {data.inDevelopment && (
              <Typography
                variant="body2"
                color="text.secondary"
                className={`italic`}
              >
                In development
              </Typography>
            )}
            <Typography variant="body2" color="text.secondary">
              {data.description}
            </Typography>
            <div className={`flex flex0row gap-2 mt-2`}>
              {data.skills.map(function (skill, index) {
                return (
                  <div
                    className={`bg-primary-grey-250 rounded-md p-2`}
                    key={index}
                  >
                    <p>{skill}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </a>
      </CardActionArea>
      <CardActions>
        {data.github && (
          <Button size="small" color="primary">
            <a href={data.github.link} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Button>
        )}
        <Button size="small" color="primary">
          <a href={data.website.link} target="_blank">
            Visit
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}
