import styles from './Achievements.module.scss'
import FadeInLeftAnimation from "@/components/ui/animations/FadeInLeftAnimation";
import {AchievementsData} from "@/content/achievements.content";
import AchievementsCard from "@/components/sections/other/achievements/achievementsCard/AchievementsCard";

const Achievements = () => {
    return (
        <section className={`${styles.achievements}`} id={"achievements"}>
            <FadeInLeftAnimation>
                <article id={`achievements`} className={`w-full flex flex-row gap-4 justify-center items-center rounded-md`}>
                    <article className={`${styles.title}`}>
                        <h1>Achievements</h1>
                    </article>
                    <section className={`${styles.items}`}>
                        {AchievementsData.map(function (data:achievementData, index:number) {
                            return (
                                <AchievementsCard
                                    data={data}
                                    key={index}
                                />
                            )
                        })}
                    </section>
                </article>
            </FadeInLeftAnimation>
        </section>
    );
}

export default Achievements;
