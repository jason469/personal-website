import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import styles from "./VolunteeringCard.module.scss";
import parse from "html-react-parser";

import HoverCard from "react-png-hovercard";
import Image from "next/image";

const ExpandMore: any = styled((props) => {
  const { expand, ...other }: any = props;
  return <IconButton {...other} />;
})(({ theme, expand }: any) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

type volunteeringCardProp = {
  data: volunteeringData;
};

export default function VolunteerCard({ data }: volunteeringCardProp) {
  return (
    <div>
      <Card className={`${styles.card}`}>
        <CardHeader
          title={
            <a href={data.website} target="_blank">
              {data.company}
            </a>
          }
          subheader={`${data.title} (${data.startYear} - ${data.endYear})`}
          className={`${styles.card__header}`}
        />
        <CardContent className={`${styles.card__content}`}>
          <a href={data.website} target="_blank">
            <HoverCard
              animationSpeed={500}
              margin={10}
              className={`w-full | ${styles.hoverWrapper}`}
              height={300}
              front={
                <article
                  className={`flex flex-col justify-center items-center text-center w-full p-2`}
                >
                  <div className={`${styles.card__imageWrapper}`}>
                    <Image
                      src={`/sections/volunteering/logos/${data.logoName}`}
                      alt={` ${data.title}`}
                      width={200}
                      height={200}
                      className={`${styles.card__imageWrapper__image}`}
                    />
                  </div>
                  <p>{parse(data.shortDescription)}</p>
                </article>
              }
              back={
                <article
                  className={`flex flex-col items-center justify-center w-full gap-2 flex-wrap p-4`}
                >
                  <div className={`${styles.card__additional_content} | p-0`}>
                    {parse(data.longDescription)}
                    <br />
                    <a href={data.website} target="_blank">
                      Click here to see their website!
                    </a>
                  </div>
                </article>
              }
            />
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
