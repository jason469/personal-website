import styles from "./Achievements.module.scss";

import { AchievementsData } from "@/content/achievements.content";
import AchievementsCard from "@/components/sections/other/achievements/achievementsCard/AchievementsCard";

const Achievements = () => {
  return (
    <div className={`${styles.achievements}`}>
      <div
        className={`w-full flex flex-row gap-5 justify-center px-5 md:pl-0 md:gap-10`}
      >
        <h1 className={`${styles.title}`}>Achievements</h1>
        <section className={`${styles.items} | flex flex-col gap-6`}>
          {AchievementsData.map(function (
            data: achievementData,
            index: number
          ) {
            return <AchievementsCard data={data} key={index} />;
          })}
        </section>
      </div>
    </div>
  );
};

export default Achievements;
