"use client";

import styles from "./HeroBanner.module.scss";

import { HeroImageInfo } from "@/content/src/homeBanner.content";
import HeroImage from "@/components/ui/common/heroImage/heroImage";

const HeroBanner = () => {
  return (
    <section className={`${styles.image} | w-full`}>
      <HeroImage
        sourceImagePath={HeroImageInfo.sourceImagePath}
        compressedImagePath={HeroImageInfo.compressedImagePath}
        title={HeroImageInfo.title}
      ></HeroImage>
    </section>
  );
};

export default HeroBanner;
