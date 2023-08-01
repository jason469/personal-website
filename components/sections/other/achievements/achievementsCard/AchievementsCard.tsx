import styles from "./AchievementsCard.module.scss";

type achievementsCardProps = {
    data: achievementData
}

export default function AchievementsCard({data}:achievementsCardProps) {
    return (
        <div className={`${styles.card} | mb-4 p-1`}>
            <h6 className={`bold uppercase leading-4 tracking-wide mt-0 mb-1`}>
                <h6>{data.name}</h6>
            </h6>
            <div className={`italic mb-2`}>
                <p>{data.company} - <strong><em>{data.year}</em></strong></p>
            </div>
            <div className={`${styles.item__description}`}>
                <p>{data.description}</p>
            </div>
        </div>
    )
}