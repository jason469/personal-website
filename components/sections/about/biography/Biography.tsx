import styles from './Biography.module.scss'

const Biography = () => {

    return (
        <section className={`${styles.biography} | flex flex-col items-center g-3 w-full`} id={`biography`}>
            <article className={`flex flex-col items-center py-6 w-full`}>
                <h1 className={`${styles.title}`}>About me</h1>
                <article className={`my-4 w-full`}>
                    <h3>
                        Born in New Zealand, I'm a full-stack developer who's passionate about website and application
                        design.
                    </h3>
                </article>
            </article>
        </section>
    )
        ;
}

export default Biography;
