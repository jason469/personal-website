"use client";

import styles from "./HeroBanner.module.scss";

import { heroImagePaths } from "@/content/homeBanner.content";
import HeroImage from "@/components/ui/common/heroImage/heroImage";

const HeroBanner = () => {
  return (
    <section
      className={`${styles.image} | w-full`}
    >
        {heroImagePaths.map((imagePath, i) => {
          return <HeroImage image={imagePath} key={i}></HeroImage>;
        })}
    </section>
  );
};

export default HeroBanner;
