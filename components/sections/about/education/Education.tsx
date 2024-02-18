import { EducationData } from '@/content/education.content';
import styles from './Education.module.scss'
import FadeInLeftAnimation from "@/components/ui/animations/FadeInLeftAnimation";
import EducationCard from './educationCard/EducationCard';

const Education = () => {
    return (
      <section id={`education`}>
        <FadeInLeftAnimation>
          <article
            className={`${styles.education} w-full flex g-4 justify-center items-center rounded-md`}
          >
            <article className={`${styles.title}`}>
              <h1>Education</h1>
            </article>
            <article className={``}>
              <article className={`${styles.education__items} | p-2`}>
                {EducationData.map(function (
                  data: educationData,
                ) {
                  return <EducationCard data={data} key={data.yearCompleted} />;
                })}
              </article>
            </article>
          </article>
        </FadeInLeftAnimation>
      </section>
    );
}

export default Education;
