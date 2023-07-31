import styles from './Education.module.scss'
import FadeInLeftAnimation from "@/components/ui/animations/FadeInLeftAnimation";

const Education = () => {
    return (
        <div className={``}>
            <FadeInLeftAnimation>
                <div id={`education`}
                     className={`${styles.education} w-full flex g-4 justify-center items-center rounded-md`}>
                    <div className={`${styles.title}`}>
                        <h1>Education</h1>
                    </div>
                    <div className={``}>
                        <div className={`${styles.education__items} | p-2`}>
                            <h6 className={`bold uppercase leading-4 mt-0 mb-2 text-center`}>
                                University of Auckland
                            </h6>
                            <div className={`italic`}>
                                <p>Bachelors in Mechatronics Engineering (Hons), earned Nov 2021.</p>
                            </div>
                            <div className={`font-bold`}>
                                <p>8.0 GPA</p>
                            </div>
                            <div className={`mt-4`}>
                                <p>Fresh out of high school, I spent four years working towards my Bachelors in
                                    Mechatronics
                                    Engineering. It was here that I gained exposure to circuit design, control systems
                                    theory,
                                    IoT and software development. And although my passion now lies in web development,
                                    studying
                                    at
                                    University helped me build a focused and eager mindset.
                                    <br/><br/>
                                    University was also where I practised a plethora of my professional and personal
                                    skills. I
                                    was involved in a number of student committees and boards, all aimed towards
                                    building a
                                    healthier and happier student community. I also took part in various speech and case
                                    competitions, all to better develop my speaking and presentation skills.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInLeftAnimation>
        </div>
    );
}

export default Education;