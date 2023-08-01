import styles from "./SkillCard.module.scss";
// @ts-ignore
import HoverCard from 'react-png-hovercard';
import Image from 'next/image'

function SkillCard({category, skills}: allSkillsData) {
    return (
        <div className={`${styles.skillcard}`}>
            <HoverCard
                animationSpeed={500}
                height={300}
                margin={10}
                className={`bg-white w-full`}
                front={
                    <article className={`flex flex-col justify-center items-center text-center w-full p-2`}>
                        <h3>
                            {category.title}
                        </h3>
                        <article className={`text-primary-purple flex flex-wrap`}>
                            <p>{category.description}</p>
                        </article>
                    </article>
                }
                back={
                    <article className={`flex flex-col items-center justify-center w-full gap-2 flex-wrap p-4`}>
                        {skills.map(function (skill) {
                            return (
                                <article
                                    className={`flex flex-row gap-2 items-center justify-center`}
                                    key={skill.title}
                                >
                                    <Image
                                        src={`/sections/skills/logos/${skill.iconName}`}
                                        alt={skill.title}
                                        fill={true}
                                    />
                                    {skill.title}
                                </article>
                            )
                        })}
                    </article>
                }
            />
        </div>
    );
}

export default SkillCard