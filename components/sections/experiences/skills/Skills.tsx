import styles from './Skills.module.scss'
// import SkillCard from '../../ui/SkillCard'
// import {TechData} from "./TechData.js"
// import {ManagementData} from "./ManagementData.js"
// import {DeploymentData} from "./DeploymentData.js"


const Skills = () => {
    return (
        <div className={`banner_page`} id={"skills"}>
            <h1 className={`title`}>Skills</h1>
            <div className={`description`}>
                Hover over a card to see my specific skills
            </div>

            <div className={`${styles.skills}`}>
                {/*{TechData.map(function (tech) {*/}
                {/*    return (*/}
                {/*        <SkillCard*/}
                {/*            category={tech.category}*/}
                {/*            skills={tech.skills}*/}
                {/*            key={tech.category.title}*/}
                {/*            className={`${styles.skills__column__items__card}`}*/}
                {/*        />*/}
                {/*    )*/}
                {/*})}*/}
                {/*{ManagementData.map(function (management) {*/}
                {/*    return (*/}
                {/*        <SkillCard*/}
                {/*            category={management.category}*/}
                {/*            skills={management.skills}*/}
                {/*            key={management.category.title}*/}
                {/*            className={`${styles.skills__column__items__card}`}*/}
                {/*        />*/}
                {/*    )*/}
                {/*})}*/}

                {/*{DeploymentData.map(function (management) {*/}
                {/*    return (*/}
                {/*        <SkillCard*/}
                {/*            category={management.category}*/}
                {/*            skills={management.skills}*/}
                {/*            key={management.category.title}*/}
                {/*            className={`${styles.skills__column__items__card}`}*/}
                {/*        />*/}
                {/*    )*/}
                {/*})*/}
                {/*}*/}
            </div>
        </div>
    );
}

export default Skills;
