import styles from "./Volunteering.module.scss";
import {VolunteeringData} from "@/content/volunteering.content";
import VolunteerCard from "@/components/sections/other/volunteering/volunteeringCard/VolunteeringCard";

const Volunteering = () => {
    return (
        <div id={`volunteering`} className={`${styles.volunteering} w-full`}>
            <h1 className={`${styles.title}`}>Volunteering</h1>
            <div className={`description`}>I always try to give back where I can!</div>
            <div className={`${styles.cards} w-full grid gap-2 justify-center items-start`}>
                {VolunteeringData.map(function (volunteer:volunteeringData, index:number) {
                        return (
                            <VolunteerCard
                                data={volunteer}
                                key={index}
                            />
                        )
                    }
                )}
            </div>
        </div>

    );
}

export default Volunteering;
