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
      <article className={`italic`}>
        <p>
          {parse(`${data.qualification}`)}, earned{" "}
          {parse(`${data.yearCompleted}`)}.
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
