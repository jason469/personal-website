"use client";

import styles from "./page.module.scss";

import ScrollSpy from "react-ui-scrollspy";

import ScrollSpyNavigation from "@/components/sections/scroll_spy_navigation/ScrollSpyNavigation";
import HeroBanner from "@/components/sections/about/heroBanner/HeroBanner";
import Biography from "@/components/sections/about/biography/Biography";
import Employment from "@/components/sections/experiences/employment/Employment";
import Projects from "@/components/sections/experiences/projects/Projects";
import Skills from "@/components/sections/experiences/skills/Skills";
import Achievements from "@/components/sections/other/achievements/Achievements";
import Volunteering from "@/components/sections/other/volunteering/Volunteering";

export default function Home() {
  return (
    <section className={`flex flex-col`}>
      <HeroBanner />
      <section className={`flex flex-row`}>
        <section className={`${styles.left} | flex flex-col gap-2 h-full`}></section>
        <section className={`${styles.center} | flex flex-col h-full`}>
          <ScrollSpy offsetBottom={100} scrollThrottle={80} useBoxMethod>
            <Biography />
            <Employment />
            <Projects />
            <Skills />
            <Achievements />
            <Volunteering />
          </ScrollSpy>
        </section>
        <section className={`${styles.right} | flex flex-col h-full`}>
          <section className={`${styles.nav}`}>
            <ScrollSpyNavigation />
          </section>
        </section>
      </section>
    </section>
  );
}
