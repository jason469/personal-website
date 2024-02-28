"use client";

import styles from "./navigationbar.module.scss";

import { useState } from "react";
import { BounceInAnimation } from "@/components/ui/animations/BounceInAnimation";
import { navbarItems } from "@/constants/navbar.constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./dropdown/dropdown";
import Link from "next/link";

const NavigationBar = () => {
  const [showDropdownId, setShowDropdownId] = useState(""); // ID of the dropdown to be shown
  const [navbarOpen, setNavbarOpen] = useState(true); // Toggling the navbar for mobile use
  const toggleNavbar = () => setNavbarOpen(!navbarOpen);

  return (
    <section
      className={`${styles.navbar} | w-full px-10 py-4 flex items-center justify-between `}
    >
      <section className={`w-11/12 me-4 md:ms-4`}>
        <Link href={`/`} className={`my-8 md:mb-0`}>
          <h1
            className={`${styles.logo} | font-journeyBegins text-white hover:text-primary-blue-100`}
          >
            Jason Liu
          </h1>
        </Link>
        <article
          className={`text-white block text-2xl md:hidden`}
          onClick={toggleNavbar}
        >
          <FontAwesomeIcon icon={faBars} className={`icon`} />
        </article>
      </section>
      <BounceInAnimation isVisible={navbarOpen}>
        <article
          className={`flex flex-col text-center justify-end mr-4 transition duration-300 ease-in md:flex-row  | ${
            navbarOpen ? " flex" : " hidden"
          } ${styles.navbar__items}`}
        >
          {navbarItems.navItems.map((item: navItem) => {
            if (item.dropdownData) {
              // Has a dropdown
              return (
                <div
                  onMouseEnter={() => {
                    setShowDropdownId(item.title);
                  }}
                  onMouseLeave={() => {
                    setShowDropdownId("");
                  }}
                  onClick={() => {
                    setShowDropdownId("");
                  }}
                  key={item.title}
                >
                  <article
                    key={item.title}
                    className={`flex items-center h-auto`}
                  >
                    <Link
                      href={`/#${item.scrollId}`}
                      className={`${styles.link} | px-2 py-3 rounded-none text-white mr-4 uppercase hover:bg-primary-purple-750 md:px-4 md:py-6 md:rounded-md `}
                    >
                      <p>{item.title}</p>
                    </Link>
                    {
                      <Dropdown
                        itemId={item.title}
                        dropdownData={item.dropdownData}
                        showDropdownId={showDropdownId}
                      />
                    }
                  </article>
                </div>
              );
            }
            return (
              // Doesn't have a dropdown
              <li key={item.title} className={`${styles.nav_item}`}>
                <Link href={`/#${item.scrollId}`}>
                  <p>{item.title}</p>
                </Link>
              </li>
            );
          })}
        </article>
      </BounceInAnimation>
    </section>
  );
};

export default NavigationBar;
