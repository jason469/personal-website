"use client";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./EmploymentCard.module.scss";
import Accordion from "@mui/material/Accordion";
import parse from "html-react-parser";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type employmentCardProps = {
  data: employmentData;
};

function EmploymentCard({ data }: employmentCardProps) {
  return (
    <article
      className={`cursor-pointer w-full gap-3 | ${styles.employmentCard}`}
    >
      <Accordion>
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faAngleDown} className={`p-0`} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className={`${styles.summaryWrapper}`}
        >
          <div className={`${styles.summary}`}>
            <p className={`${styles.company}`}>{data.company}</p>
            <p className={`${styles.dates}`}>
              {data.startDate} - {data.endDate}
            </p>
            <p className={`${styles.role}`}>{data.role}</p>
          </div>
        </AccordionSummary>
        <AccordionDetails className={`${styles.descriptionWrapper}`}>
          <p className={`${styles.description}`}>
            <ul>
              {data.description.map(function (
                bulletPoint: string,
                index: number
              ) {
                return <li key={index}>{bulletPoint}</li>;
              })}
            </ul>
          </p>
        </AccordionDetails>
      </Accordion>
    </article>
  );
}

export default EmploymentCard;
