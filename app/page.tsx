"use client";

import styles from "./page.module.scss";

import ScrollSpy from "react-ui-scrollspy";
import Grid from "@mui/material/Unstable_Grid2";
import FadeInUpAnimation from "@/components/ui/animations/FadeInUpAnimation";

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
      <Grid container spacing={0} className={`${styles.content} | w-full m-0`}>
        <Grid
          xs={12}
          sm={12}
          md={9}
          lg={9}
          className={`${styles.center} | flex flex-col bg-white h-full`}
        >
          <ScrollSpy
            updateHistoryStack={false}
            scrollThrottle={200}
            useBoxMethod={true}
          >
            <section id="biography">
              <div id="about" className={``}>
                <FadeInUpAnimation>
                  <Biography />
                </FadeInUpAnimation>
              </div>
            </section>
            <section id="employment">
              <FadeInUpAnimation>
                <div id="experiences">
                  <Employment />
                </div>
              </FadeInUpAnimation>
            </section>
            <section id={`projects`}>
              <FadeInUpAnimation>
                <Projects />
              </FadeInUpAnimation>
            </section>
            <section id="skills">
              <FadeInUpAnimation>
                <Skills />
              </FadeInUpAnimation>
            </section>
            <section id="achievements">
              <section id="other">
                <FadeInUpAnimation>
                  <Achievements />
                </FadeInUpAnimation>
              </section>
            </section>
            <section id="volunteering">
              <FadeInUpAnimation>
                <Volunteering />
              </FadeInUpAnimation>
            </section>
          </ScrollSpy>
        </Grid>
        <Grid
          xs={0}
          sm={0}
          md={3}
          lg={3}
          className={`${styles.right} | h-full`}
        >
          <section className={`hidden md:flex md:flex-col items-center`}>
            <ScrollSpyNavigation />
          </section>
        </Grid>
      </Grid>
    </section>
  );
}
