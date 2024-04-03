import styles from "./Biography.module.scss";

import { BiographyData } from "@/content/src/biography.content";
import parse from "html-react-parser";

const Biography = () => {
  return (
    <section className={`${styles.biography} | w-full p-8 md:p-0`}>
      <article className={`flex flex-col items-center w-full`}>
        <h1 className={`${styles.title}`}>About me</h1>
        <article className={`flex flex-col w-full gap-3`}>
          <h3 className={`${styles.subtitle} | text-center`}>
            {parse(`${BiographyData.motto}`)}
          </h3>
          <p className={`${styles.description}`}>
            {parse(`${BiographyData.description}`)}
          </p>
        </article>
      </article>
    </section>
  );
};

export default Biography;
