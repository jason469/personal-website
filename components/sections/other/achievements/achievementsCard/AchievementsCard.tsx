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
            <div className={`italic mb-2 flex flex-col gap-0 text-black-a60 md:flex-row md:gap-1`}>
                <p className={`text-black-a60`}>{data.company}</p>
                <p className={`text-black-a60 hidden md:black`}>-</p>
                <p className={`text-black-a60`}><strong>({data.year})</strong></p>
            </div>
            <div className={`${styles.item__description}`}>
                <p>{data.description}</p>
            </div>
        </div>
    )
}
