"use client"

import styles from './HeroBanner.module.scss'
import Image from "next/image"

const HeroBanner = () => {
    return (
        <section className={`${styles.banner}`} id={"hero-photo"}>
            <Image
                src={`/sections/heroBanner/ProfileWithText/Profile1.svg`}
                alt="Profile Image"
                className={`${styles.banner__photo}`}
                priority
                layout="fill"
                objectFit="cover"
                objectPosition="center"
            />
        </section>
    );
}

export default HeroBanner;
