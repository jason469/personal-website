import styles from './Biography.module.scss'
import { BiographyData } from '@/content/biography.content';
import parse from "html-react-parser";

const Biography = () => {

    return (
      <section
        className={`${styles.biography} | flex flex-col items-center g-3 w-full`}
        id={`biography`}
      >
        <article className={`flex flex-col items-center py-6 w-full`}>
          <h1 className={`${styles.title}`}>About me</h1>
          <article className={`my-4 w-full`}>
            <h3 className={`${styles.subtitle}`}>{parse(`${BiographyData.text}`)}</h3>
          </article>
        </article>
      </section>
    );
}

export default Biography;
