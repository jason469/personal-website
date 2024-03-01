"use client";

import styles from "./EmploymentCard.module.scss";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useState } from "react";

type employmentCardProps = {
  data: employmentData;
};

function EmploymentCard({ data }: employmentCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article
      className={`cursor-pointer w-full gap-3 | ${styles.employmentCard}`}
    >
      <Accordion className={`${styles.accordian}`}>
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={faAngleDown} className={`p-0`} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className={`
          ${styles.summaryWrapper} |
          ${isExpanded ? styles.expanded : styles.notExpanded}
          `}
          onClick={toggleExpanded}
        >
          <div className={`${styles.summary} | text-secondary-a80`}>
            <p className={`${styles.company} | font-bold text-secondary-a50`}>
              {data.company}
            </p>
            <p className={`${styles.dates}`}>
              {data.startDate} - {data.endDate}
            </p>
            <p className={`${styles.role} | italic`}>{data.role}</p>
          </div>
        </AccordionSummary>
        <AccordionDetails className={`${styles.descriptionWrapper}`}>
          <p className={`${styles.description} | text-secondary-a70`}>
            <ul className={`${styles.list}`}>
              {data.description.map(function (
                bulletPoint: string,
                index: number
              ) {
                return (
                  <li key={index} className={`${styles.list__point}`}>
                    <p>{bulletPoint}</p>
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
