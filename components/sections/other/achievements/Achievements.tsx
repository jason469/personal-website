import styles from './Achievements.module.scss'
import FadeInLeftAnimation from "@/components/ui/animations/FadeInLeftAnimation";
// import {AchievementsData} from "./AchievementsData";
// import AchievementsCard from "../../ui/AchievementsCard";
// import SlideInBlock from "../../ui/animation/SlideInBlock";

const Achievements = () => {
    return (
        <div className={``} id={"achievements"}>
            <FadeInLeftAnimation>
                <div id={`${styles["accomplishments"]}`} className={`page`}>
                    <div className={`${styles.title}`}>
                        <h1 className={`title`}>Achievements</h1>
                    </div>
                    {/*<div className={`${styles.items}`}>*/}
                    {/*    {AchievementsData.map(function (accomplishment, index) {*/}
                    {/*        return (*/}
                    {/*            <AchievementsCard*/}
                    {/*                data={accomplishment}*/}
                    {/*                key={index}*/}
                    {/*            />*/}
                    {/*        )*/}
                    {/*    })}*/}
                    {/*</div>*/}
                </div>
            </FadeInLeftAnimation>
        </div>
    );
}

export default Achievements;
