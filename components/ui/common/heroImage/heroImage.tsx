import Image from 'next/image'
import styles from "./heroImage.module.scss"

type heroImageProps = {
    image: string,
    children?: any
}

const HeroImage = ({image, children}: heroImageProps) => (
    <section className={`${styles.heroWrapper}`}>
        <section className={`${styles.imageWrapper}`}>
            <Image
                priority
                src={image}
                layout="fill"
                className={`${styles.heroImage}`}
                style={{
                    objectFit: "cover",

            }}
                alt={""}
            />
        </section>
    </section>
);

export default HeroImage;
