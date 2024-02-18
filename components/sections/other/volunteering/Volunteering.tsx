import styles from "./Volunteering.module.scss";
import {VolunteeringData} from "@/content/volunteering.content";
import VolunteerCard from "@/components/sections/other/volunteering/volunteeringCard/VolunteeringCard";

const Volunteering = () => {
    return (
      <section id={`volunteering`} className={`${styles.volunteering} w-full`}>
        <div className={`titleWrapper | w-full flex justify-center`}>
          <h1 className={`${styles.title}`}>Volunteering</h1>
        </div>
        <article className={`description`}>
          I always try to give back where I can!
        </article>
        <section
          className={`${styles.cards} w-full grid gap-2 justify-center items-start`}
        >
          {VolunteeringData.map(function (
            volunteer: volunteeringData,
            index: number
          ) {
            return <VolunteerCard data={volunteer} key={index} />;
          })}
        </section>
      </section>
    );
}

export default Volunteering;
