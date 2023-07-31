"use client"

import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {faSuitcase} from "@fortawesome/free-solid-svg-icons"
import {TimelineOppositeContent} from "@mui/lab";
import {useState, useRef} from "react";
import styles from "./EmploymentCard.module.scss";
import ReactCardFlip from "react-card-flip";
import AnimateHeight from 'react-animate-height';
import parse from 'html-react-parser';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image"



type employmentCardProps = {
    data: employmentData
}

function EmploymentCard({data}:employmentCardProps) {
    const frontCard = useRef<HTMLDivElement>(document.createElement("div"));
    const backCard = useRef<HTMLDivElement>(document.createElement("div"));
    const [height, setHeight] = useState(110)
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
        setHeight(isFlipped ? frontCard.current.clientHeight + 10 : backCard.current.clientHeight + 10)
    };


    return (
        <div id={`${styles["timelineCard"]}`}>
            <TimelineItem
            >
                <TimelineOppositeContent
                    sx={{m: 'auto 0'}}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                    className={`${styles.timelineOppositeContent}`}
                >
                    {data.startDate} - {data.endDate}
                </TimelineOppositeContent>
                <TimelineSeparator
                    className={`${styles.timelineSeperator}`}
                >
                    <TimelineConnector
                        className={`${styles.timelineConnector}`}
                    />
                    <TimelineDot
                        // color="black_theme"
                        variant="outlined"
                    >
                        <FontAwesomeIcon icon={faSuitcase} className={``}/>

                        {/*<WorkHistoryIcon*/}
                        {/*    style={{color: `${data.category.color}`}}*/}
                        {/*/>*/}
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent
                    sx={{
                        py: '12px',
                        px: 2,
                        textAlign: 'left',
                    }}
                    className={`${styles.left_side}`}
                >
                    <Image
                        src={`/sections/employment/logos/${data.logoName}`}
                        className={`${styles.left_side__image}`}
                        alt={data.company}
                        fill={true}
                    />
                    <div
                        onClick={flipCard}
                        className={`${styles.timelineContent}`}
                    >
                        <ReactCardFlip
                            isFlipped={isFlipped}
                            flipDirection="horizontal"
                            flipSpeedBackToFront={2}
                            flipSpeedFrontToBack={2}
                        >
                            <div id="front">
                                <AnimateHeight
                                    duration={500}
                                    height={height}
                                >
                                    <div
                                        className={`${styles.content}`}
                                        ref={frontCard}
                                    >
                                        <div
                                            className={`${styles.content__role}`}
                                        >
                                            <div className={`${styles.content__role__title}`}>{data.role}</div>
                                            <div className={`${styles.content__role__company}`}>- {data.company}</div>
                                        </div>
                                        <div
                                            className={`${styles.help_text}`}
                                        >
                                            Click for more details
                                        </div>
                                    </div>
                                </AnimateHeight>
                            </div>
                            <div id="back">
                                <AnimateHeight
                                    duration={500}
                                    height={height}
                                >
                                    <div className={`${styles.content}`}
                                         ref={backCard}
                                    >
                                        <div
                                            className={`${styles.content__role}`}
                                        >
                                            <div className={`${styles.content__role__title}`}>{data.role}</div>
                                            <div className={`${styles.content__role__company}`}>- {data.company}</div>
                                        </div>
                                        <div className={`${styles.content__date}`}>{data.startDate} - {data.endDate}</div>
                                        <div
                                            className={`${styles.content__description}`}
                                        >
                                            {parse(`${data.description}`)}
                                        </div>
                                    </div>
                                </AnimateHeight>
                            </div>
                        </ReactCardFlip>
                    </div>
                </TimelineContent>
            </TimelineItem>
        </div>
    )
        ;
}

export default EmploymentCard