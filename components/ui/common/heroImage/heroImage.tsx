import styles from "./heroImage.module.scss";

import Image from "next/image";

type heroImageProps = {
  sourceImagePath: string;
  compressedImagePath: string;
  title: string;
  children?: any;
};

const HeroImage = ({ sourceImagePath, compressedImagePath, title, children }: heroImageProps) => (
  <section className={`${styles.heroWrapper}`}>
    <section className={`${styles.imageWrapper}`}>
      <Image
        priority={true}
        quality={100}
        src={sourceImagePath}
        layout="fill"
        className={`${styles.heroImage}`}
        style={{
          objectFit: "cover",
        }}
        alt={title}
        placeholder="blur"
        blurDataURL={compressedImagePath}
      />
    </section>
  </section>
);

export default HeroImage;
