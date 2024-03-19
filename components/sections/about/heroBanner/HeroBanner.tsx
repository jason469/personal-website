"use client";

import styles from "./HeroBanner.module.scss";

import { heroImageInfo } from "@/content/homeBanner.content";
import HeroImage from "@/components/ui/common/heroImage/heroImage";

const HeroBanner = () => {
  return (
    <section className={`${styles.image} | w-full`}>
      <HeroImage
        sourceImagePath={heroImageInfo.imagePath}
        compressedImagePath={heroImageInfo.compressedImagePath}
        title={heroImageInfo.title}
      ></HeroImage>
    </section>
  );
};

export default HeroBanner;
