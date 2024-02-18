"use client"

import {faSuitcase} from "@fortawesome/free-solid-svg-icons"
import {useRef, useState} from "react";
import styles from "./EmploymentCard.module.scss";
import ReactCardFlip from "react-card-flip";
import AnimateHeight from 'react-animate-height';
import parse from 'html-react-parser';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image"


type employmentCardProps = {
    data: employmentData
}

function EmploymentCard({data}: employmentCardProps) {
    const frontCard:any = useRef(null);
    const backCard:any = useRef(null);
    const [height, setHeight] = useState(110)
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
        setHeight(isFlipped ? frontCard.current.clientHeight + 10 : backCard.current.clientHeight + 10)
    };


    return (
        <article className={`cursor-pointer w-full`}>
                <div
                    className={`hidden md:block ${styles.date}`}
                >
                    {data.startDate} - {data.endDate}
                </div>
                <div
                    className={`flex flex-row items-center gap-2 ${styles.content}`}
                >
                    <Image
                        src={`/sections/employment/logos/${data.logoName}`}
                        className={`${styles.left_side__image}`}
                        alt={data.company}
                        fill={true}
                    />
                    <article
                        onClick={flipCard}
                        className={`${styles.timelineContent}`}
                    >
                        <ReactCardFlip
                            isFlipped={isFlipped}
                            flipDirection="horizontal"
                            flipSpeedBackToFront={1}
                            flipSpeedFrontToBack={1}
                        >
                            <article id="front">
                                <AnimateHeight
                                    duration={500}
                                    height={height}
                                >
                                    <article
                                        className={`p-4 bg-white ${styles.content}`}
                                        ref={frontCard}
                                    >
                                        <article
                                            className={`mb-4 flex flex-row items-baseline`}
                                        >
                                            <span className={`bold text-primary-purple`}><p>{data.role}</p></span>
                                            <span
                                                className={`ml-2 bold text-primary-blue`}>- <p>{data.company}</p></span>
                                        </article>
                                        <article
                                            className={`italic`}
                                        >
                                            Click for more details
                                        </article>
                                    </article>
                                </AnimateHeight>
                            </article>
                            <article id="back">
                                <AnimateHeight
                                    duration={500}
                                    height={height}
                                >
                                    <article className={`p-4 bg-white ${styles.content}`}
                                             ref={backCard}
                                    >
                                        <article
                                            className={`mb-4 flex flex-row items-baseline`}
                                        >
                                            <span className={`bold text-primary-purple`}>{data.role}</span>
                                            <span className={`ml-2 bold text-primary-blue`}>- {data.company}</span>
                                        </article>
                                        <article
                                            className={`block italic mb-4 md:hidden`}>{data.startDate} - {data.endDate}</article>
                                        <article
                                            className={``}
                                        >
                                            {parse(`${data.description}`)}
                                        </article>
                                    </article>
                                </AnimateHeight>
                            </article>
                        </ReactCardFlip>
                    </article>
                </div>
        </article>
    )
        ;
}

export default EmploymentCard
