"use client";

import Carousel from "react-material-ui-carousel";
import HeroImage from "@/components/ui/common/heroImage/heroImage";
import { heroImagePaths } from "@/content/homeBanner.content";

const HeroBanner = () => {
  return (
    <Carousel
      interval={6000}
      animation={"slide"}
      duration={850}
      indicatorContainerProps={{
        style: {
          marginTop: "-50px", // 5
        },
      }}
    >
      {heroImagePaths.map((imagePath, i) => {
        return <HeroImage image={imagePath} key={i}></HeroImage>;
      })}
    </Carousel>
  );
};

export default HeroBanner;
