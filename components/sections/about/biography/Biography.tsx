import styles from "./Biography.module.scss";

import { BiographyData } from "@/content/biography.content";
import parse from "html-react-parser";

const Biography = () => {
  return (
    <section
      className={`${styles.biography} | w-full`}
      id={`biography`}
    >
      <div id="about" className={`p-4 md:p-0`}>
        <article className={`flex flex-col items-center w-full`}>
          <h1 className={`${styles.title}`}>About me</h1>
          <article className={`flex flex-col my-4 w-full gap-3`}>
            <h3 className={`${styles.subtitle} | subtitle`}>
              {parse(`${BiographyData.motto}`)}
            </h3>
            <p className={`${styles.description}`}>
              {parse(`${BiographyData.description}`)}
            </p>
          </article>
        </article>
      </div>
    </section>
  );
};

export default Biography;
