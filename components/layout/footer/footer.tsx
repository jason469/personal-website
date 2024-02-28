import styles from "./footer.module.scss";
import Contact from "@/components/sections/contact/Contact";


const Footer = () => {
    return (
        <section id={`footer`} className={`${styles.footer} | raised_box`}>
            <Contact/>
        </section>
    );
}

export default Footer;
