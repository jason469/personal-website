"use client";

import styles from "./EmploymentCard.module.scss";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

type employmentCardProps = {
  data: employmentData;
};

function EmploymentCard({ data }: employmentCardProps) {
  return (
    <article
      className={`cursor-pointer w-full gap-3 | ${styles.employmentCard}`}
    >
      <Accordion className={`${styles.accordian}`}>
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faAngleDown} className={`p-0`} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className={`${styles.summaryWrapper}`}
        >
          <div className={`${styles.summary}`}>
            <p className={`${styles.company} | font-bold text-primary-a50`}>{data.company}</p>
            <p className={`${styles.dates}`}>
              {data.startDate} - {data.endDate}
            </p>
            <p className={`${styles.role} | italic`}>{data.role}</p>
          </div>
        </AccordionSummary>
        <AccordionDetails className={`${styles.descriptionWrapper}`}>
          <p className={`${styles.description}`}>
            <ul className={`${styles.list}`}>
              {data.description.map(function (
                bulletPoint: string,
                index: number
              ) {
                return (
                  <li key={index} className={`${styles.list__point}`}>
                    {bulletPoint}
                  </li>
                );
              })}
            </ul>
          </p>
        </AccordionDetails>
      </Accordion>
    </article>
  );
}

export default EmploymentCard;
