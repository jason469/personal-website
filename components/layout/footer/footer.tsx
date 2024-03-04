import styles from "./footer.module.scss";
import Contact from "@/components/sections/contact/Contact";


const Footer = () => {
    return (
        <section id={`footer`} className={`${styles.footer}`}>
            <Contact/>
        </section>
    );
}

export default Footer;
