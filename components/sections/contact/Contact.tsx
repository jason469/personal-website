import styles from "./Contact.module.scss";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <section className={`${styles.page}`} id="contact">
      <article
        className={`${styles.left} | flex flex-row items-center justify-center gap-2 text-white`}
      >
        <a
          href="mailto:Jliu21500@gmail.com"
          target="_blank"
          className={`bold hover:text-primary-purple-500`}
          rel="noreferrer"
        >
          <p className={`${styles.email} | font-epilogue`}>Jliu21500@gmail.com</p>
        </a>
      </article>
      <article className={`${styles.left} | flex flex-row gap-4`}>
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

export default Contact;
