import styles from "./AchievementsCard.module.scss";

type achievementsCardProps = {
    data: achievementData
}

export default function AchievementsCard({data}:achievementsCardProps) {
    return (
        <div className={`${styles.card} | p-1 w-full`}>
            <h3 className={`mt-0 mb-1`}>
                <h6>{data.name}</h6>
            </h3>
            <div className={`italic mb-2`}>
                <p>{data.company} - <strong><em>{data.year}</em></strong></p>
            </div>
            <div className={`${styles.item__description}`}>
                <p>{data.description}</p>
            </div>
        </div>
    )
}
