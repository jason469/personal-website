import styles from './Contact.module.scss'
import {faFile} from "@fortawesome/free-solid-svg-icons"
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
        <section className={`${styles.page}`} id="contact">
            <article className={`flex flex-row items-center gap-2 text-white`}>
                <a href="mailto:Jliu21500@gmail.com" target="_blank" className={`bold hover:text-primary-purple-500`}
                   rel="noreferrer">
                    <p>Jliu21500@gmail.com</p>
                </a>
            </article>
            <article className={`flex flex-row gap-2`}>
                <article className={`${styles.item}`}>
                    <a href="https://www.linkedin.com/in/jasonliudev/" target="_blank">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className={`${styles.logo}`}
                        />
                    </a>
                </article>
                <article id={`${styles["buttons"]}`} className={styles.contacts__item}>
                    <a href={`https://github.com/jason469`} target="_blank">
                        <FontAwesomeIcon
                            icon={faGithub}
                            className={`${styles.logo}`}
                        />
                    </a>
                </article>
                <article className={styles.contacts__item}>
                    <a href={"/contact/files/Jason Liu CV.pdf"} target="_blank">
                        <FontAwesomeIcon
                            icon={faFile}
                            className={`${styles.logo}`}
                        />
                    </a>
                </article>
            </article>
        </section>
    );
}

export default Contact;
