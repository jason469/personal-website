import styles from "./VolunteeringCard.module.scss";
import parse from "html-react-parser";

import HoverCard from "react-png-hovercard";
import Image from "next/image";

type volunteeringCardProp = {
  data: volunteeringData;
};

export default function VolunteerCard({ data }: volunteeringCardProp) {
  return (
    <div className={`${styles.card} | h-full px-6 py-6 bg-white flex flex-col`}>
      <div className={`${styles.card__header} | mb-10`}>
        <a href={data.website} target="_blank">
          <h4>{data.company}</h4>
        </a>
        <p className={`italic`}>
          {data.title} ({data.startYear} - {data.endYear})
        </p>
      </div>
      <div className={`${styles.card__content} | h-full`}>
        <a href={data.website} target="_blank" className={`h-full`}>
          <HoverCard
            animationSpeed={500}
            className={`w-full | ${styles.hoverWrapper}`}
            height={200}
            front={
              <article className={`flex flex-col gap-4 justify-between w-full`}>
                <div className={`${styles.card__imageWrapper}`}>
                  <Image
                    src={`/sections/volunteering/logos/${data.logoName}`}
                    alt={` ${data.title}`}
                    fill={true}
                    style={{
                      objectFit: "contain",
                    }}
                    className={`${styles.card__imageWrapper__image}`}
                  />
                </div>
                <p>{parse(data.shortDescription)}</p>
              </article>
            }
            back={
              <article
                className={`${styles.back} | flex flex-col items-center justify-center w-full gap-2 flex-wrap p-4 rounded-none | hover:bg-primary-grey-500 transition-duration-500`}
              >
                <div className={`${styles.card__additional_content} | p-0 rounded-none`}>
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
      </div>
    </div>
  );
}
