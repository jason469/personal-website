"use client";

import styles from "./EducationCard.module.scss";
import parse from "html-react-parser";

type educationCardProps = {
  data: educationData;
};

function EducationCard({ data }: educationCardProps) {
  return (
    <article>
      <h6 className={`bold uppercase leading-4 mt-0 mb-2 text-center`}>
        {parse(`${data.university}`)}
      </h6>
      <article>
        <p className={`w-full flex | justify-between`}>
          <p className={`italic`}>{parse(`${data.qualification}`)}</p>
          <p className={`font-bold`}>{parse(`${data.yearCompleted}`)}</p>
        </p>
      </article>
      <article className={`font-bold`}>
        <p>{parse(`${data.score}`)}</p>
      </article>
      <article className={`mt-4`}>{parse(`${data.description}`)}</article>
    </article>
  );
}

export default EducationCard;
