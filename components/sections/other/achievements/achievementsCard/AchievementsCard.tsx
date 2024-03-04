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
            <div className={`italic mb-2 flex flex-col gap-0 md:flex-row md:gap-1`}>
                <p>{data.company}</p>
                <p className={`hidden md:block`}>-</p>
                <p><strong>({data.year})</strong></p>
            </div>
            <div className={`${styles.item__description}`}>
                <p>{data.description}</p>
            </div>
        </div>
    )
}
