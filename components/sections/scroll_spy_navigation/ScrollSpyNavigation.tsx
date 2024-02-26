import styles from './ScrollSpyNavigation.module.scss'
import Link from "next/link";


const ScrollSpyNavigation = () => {

    return (
        <section className={`${styles.nav} | h-full`}>
            <Link
                href={'/#biography'}
                className={`${styles.nav__link} ${styles.nav__link__noBorder}`}
                data-to-scrollspy-id="biography"
            >
                <p
                >
                    Biography
                </p>
            </Link>
            <Link
                href={'/#employment'}
                className={`${styles.nav__link}`}
                data-to-scrollspy-id="employment"
            >
                <p>
                    Employment
                </p>
            </Link>
            <Link
                href={'/#projects'}
                className={`${styles.nav__link}`}
                data-to-scrollspy-id="projects"
            >
                <p>
                    Projects
                </p>
            </Link>
            <Link
                href={'/#skills'}
                className={`${styles.nav__link}`}
                data-to-scrollspy-id="skills"
            >
                <p>
                    Skills
                </p>
            </Link>
            <Link
                href={'/#achievements'}
                className={`${styles.nav__link}`}
                data-to-scrollspy-id="achievements"
            >
                <p>
                    Achievements
                </p>
            </Link>
            <Link
                href={'/#volunteering'}
                className={`${styles.nav__link}`}
                data-to-scrollspy-id="volunteering"
            >
                <p>
                    Volunteering
                </p>
            </Link>
            <Link
                href={'/#contact'}
                className={`${styles.nav__link}`}
                data-to-scrollspy-id="footer"
            >
                <p>
                    Contact Me!
                </p>
            </Link>
        </section>
    );
}

export default ScrollSpyNavigation;
