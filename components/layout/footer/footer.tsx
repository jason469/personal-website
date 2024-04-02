import styles from "./footer.module.scss";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <section
      id={`footer`}
      className={`${styles.footer} | flex flex-col md:flex-row items-center justify-center gap-2 md:gap-20`}
    >
      <article className={`${styles.left}`}>
        <a
          href="mailto:Jliu21500@gmail.com"
          target="_blank"
          className={`text-white hover:text-secondary-a10`}
          rel="noreferrer"
        >
          <p className={`${styles.email} | font-epilogue`}>
            Jliu21500@gmail.com
          </p>
        </a>
      </article>
      <article className={`${styles.right} | flex flex-row gap-4`}>
        <a href="https://www.linkedin.com/in/jasonliudev/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className={`${styles.logo}`} />
        </a>
        <a href={`https://github.com/jason469`} target="_blank">
          <FontAwesomeIcon icon={faGithub} className={`${styles.logo}`} />
        </a>
      </article>
    </section>
  );
};

export default Footer;
