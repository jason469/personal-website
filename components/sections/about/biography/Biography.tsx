import styles from './Biography.module.scss'

const Biography = () => {

    return (
        <div className={`${styles.biography} | flex flex-col items-center g-3 w-full`}>
            <div className={`flex flex-col items-center py-6 w-full`}>
                <h1 className={`${styles.title}`}>About me</h1>
                <div className={`my-4 w-full`}>
                    <h3>
                        Born in New Zealand, I'm a full-stack developer who's passionate about website and application
                        design.
                    </h3>
                </div>
            </div>
        </div>
    )
        ;
}

export default Biography;
