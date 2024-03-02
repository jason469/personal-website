import styles from "./ScrollSpyNavigation.module.scss";

import Link from "next/link";

const ScrollSpyNavigation = () => {
  return (
    <section className={`${styles.nav} | h-full`}>
      <Link
        href={"/#biography"}
        className={`${styles.nav__link}`}
        data-to-scrollspy-id="biography"
      >
        <p className={`${styles.nav__link__text}`}>Biography</p>
      </Link>
      <Link
        href={"/#employment"}
        className={`${styles.nav__link}`}
        data-to-scrollspy-id="employment"
      >
        <p className={`${styles.nav__link__text}`}>Employment</p>
      </Link>
      <Link
        href={"/#projects"}
        className={`${styles.nav__link}`}
        data-to-scrollspy-id="projects"
      >
        <p className={`${styles.nav__link__text}`}>Projects</p>
      </Link>
      <Link
        href={"/#skills"}
        className={`${styles.nav__link}`}
        data-to-scrollspy-id="skills"
      >
        <p className={`${styles.nav__link__text}`}>Skills</p>
      </Link>
      <Link
        href={"/#achievements"}
        className={`${styles.nav__link}`}
        data-to-scrollspy-id="achievements"
      >
        <p className={`${styles.nav__link__text}`}>Achievements</p>
      </Link>
      <Link
        href={"/#volunteering"}
        className={`${styles.nav__link}`}
        data-to-scrollspy-id="volunteering"
      >
        <p className={`${styles.nav__link__text}`}>Volunteering</p>
      </Link>
      <Link
        href={"/#contact"}
        className={`${styles.nav__link}`}
        data-to-scrollspy-id="footer"
      >
        <p className={`${styles.nav__link__text}`}>Contact Me!</p>
      </Link>
    </section>
  );
};

export default ScrollSpyNavigation;
