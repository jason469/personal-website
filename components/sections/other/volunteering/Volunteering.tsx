// import {VolunteeringData} from './VolunteeringData.js';
// import VolunteerCard from "../../ui/VolunteerCard";
import styles from "./Volunteering.module.scss";

const Volunteering = () => {
    return (
        <div id={`volunteering`} className={`page banner_page | ${styles.volunteering}`}>
            <h1 className={`title`}>Volunteering</h1>
            <div className={`description`}>I always try to give back where I can!</div>
            {/*<div className={`${styles.cards}`}>*/}
            {/*    {VolunteeringData.map(function (volunteer, index) {*/}
            {/*            return (*/}
            {/*                <VolunteerCard*/}
            {/*                    data={volunteer}*/}
            {/*                    key={index}*/}
            {/*                />*/}
            {/*            )*/}
            {/*        }*/}
            {/*    )}*/}
            {/*</div>*/}
        </div>

    );
}

export default Volunteering;
