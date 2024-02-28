"use client";

import HeroImage from "../../../../components/ui/common/heroImage/heroImage";
import { heroImagePaths } from "../../../../content/homeBanner.content";
import styles from "./HeroBanner.module.scss";

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
