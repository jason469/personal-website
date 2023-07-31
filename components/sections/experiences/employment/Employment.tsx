import {EmploymentData} from '@/content/employment.content';
import styles from "./Employment.module.scss";
import Timeline from '@mui/lab/Timeline';


const Employment = () => {
    return (
        <section className={`${styles.employment} banner_page page`} id={`employment`}>
            <h1 className={`title`}>Employment</h1>
            <Timeline
                className={`${styles.timeline}`}
                position='left'
            >
                {EmploymentData.map(function (data:employmentData, index:number) {
                        return (
                            <TimelineCard
                                data={singleTimelineData}
                                key={index}
                            />
                        )
                    }
                )}
            </Timeline>
            {/*<div*/}
            {/*    className={`${styles.timeline}`}*/}
            {/*>*/}
            {/*    <TimelineComponent data={EmploymentData}/>*/}
            {/*</div>*/}
        </section>
    )
        ;
}

export default Employment;

