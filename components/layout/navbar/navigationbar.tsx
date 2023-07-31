"use client"

import styles from "./navigationbar.module.scss";
import Dropdown from "./dropdown/dropdown";
import {useEffect, useState} from 'react';
import Link from "next/link";
import {BounceInAnimation} from "@/components/ui/animations/BounceInAnimation";
import {navbarItems} from "@/constants/navbar.constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {debounce} from "@/utilities/navbar";

const NavigationBar = () => {
    const [showDropdownId, setShowDropdownId] = useState("");  // ID of the dropdown to be shown
    const [navbarOpen, setNavbarOpen] = useState(true)  // Toggling the navbar for mobile use
    const [showNavbar, setShowNavbar] = useState(true)  // Toggling the navbar on scroll

    const [lastScrollY, setLastScrollY] = useState(0);


    const toggleNavbar = () => setNavbarOpen(!navbarOpen)
    const handleScroll = debounce(() => {
        const currentScrollPos = window.scrollY;
        if (
            ((lastScrollY > currentScrollPos) && lastScrollY - currentScrollPos > 50) ||  // Scroll up
            currentScrollPos < 10  // At top of page
        ) {
            setShowNavbar(true);
        } else {
            setShowNavbar(false)
        }
        setLastScrollY(currentScrollPos);
    }, 100, null);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, showNavbar, handleScroll]);


    return (
        <div className={`${styles.navbar}`}>
            <section style={{top: showNavbar ? '0' : '-10vh'}} className={`${styles.navbar}`}>
                <section className={`${styles.navbar_header}`}>
                    <Link href={`/`} className={`${styles.navbar_logo}`}>
                        Jason Liu
                    </Link>
                    <article className={`${styles.toggleNavbar}`} onClick={toggleNavbar}>
                        <FontAwesomeIcon icon={faBars} className={`icon`}/>
                    </article>
                </section>
                <BounceInAnimation isVisible={navbarOpen}>
                    <article className={`${styles.nav_items} + ${navbarOpen ? ' flex' : ' hidden'}`}>
                        {navbarItems.navItems.map((item) => {
                            if (item.dropdownData) {  // Has a dropdown
                                return (
                                    <div
                                        onMouseEnter={() => {
                                            setShowDropdownId(item.title)
                                        }}
                                        onMouseLeave={() => {
                                            setShowDropdownId("")
                                        }}
                                        onClick={() => {
                                            setShowDropdownId("")
                                        }}
                                        key={item.title}
                                    >
                                        <article
                                            key={item.title}
                                            className={`${styles.nav_item}`}
                                        >
                                            <Link
                                                href={`/#${item.scrollId}`}
                                                className={`${styles.link}`}
                                            >
                                                {item.title}
                                            </Link>
                                            {<Dropdown
                                                itemId={item.title}
                                                dropdownData={item.dropdownData}
                                                showDropdownId={showDropdownId}
                                            />}
                                        </article>
                                    </div>
                                );
                            }
                            return (  // Doesn't have a dropdown
                                <li
                                    key={item.title}
                                    className={`${styles.nav_item}`}
                                >
                                    <Link
                                        href={`/#${item.scrollId}`}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </article>
                </BounceInAnimation>
            </section>
        </div>
    );
}

export default NavigationBar;