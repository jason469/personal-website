"use client"

import styles from './HeroBanner.module.scss'
import Image from "next/image"

const HeroBanner = () => {
    return (
        <div className={`${styles.banner}`} id={"hero-photo"}>
            <Image
                src={`/sections/heroBanner/ProfileWithText/Profile1.svg`}
                alt="Profile Image"
                className={`${styles.banner__photo}`}
                fill={true}
            />
        </div>
    );
}

export default HeroBanner;
