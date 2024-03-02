import styles from "./Biography.module.scss";

import { BiographyData } from "@/content/biography.content";
import parse from "html-react-parser";
import FadeInLeftAnimation from "@/components/ui/animations/FadeInLeftAnimation";

const Biography = () => {
  return (
    <section className={`${styles.biography} | w-full`} id={`biography`}>
      <FadeInLeftAnimation>
        <div id="about" className={`p-4 md:p-0`}>
          <article className={`flex flex-col items-center w-full`}>
            <h1 className={`${styles.title}`}>About me</h1>
            <article className={`flex flex-col w-full gap-3`}>
              <h3 className={`${styles.subtitle}`}>
                {parse(`${BiographyData.motto}`)}
              </h3>
              <p className={`${styles.description}`}>
                {parse(`${BiographyData.description}`)}
              </p>
            </article>
          </article>
        </div>
      </FadeInLeftAnimation>
    </section>
  );
};

export default Biography;
