"use client";

import styles from "./page.module.scss";

import ScrollSpy from "react-ui-scrollspy";
import Grid from "@mui/material/Unstable_Grid2";

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
      <Grid container spacing={2} className={`w-full`}>
        <Grid
          xs={1}
          sm={1}
          md={1}
          lg={2}
          className={`${styles.left} | h-full`}
        ></Grid>
        <Grid
          xs={10}
          sm={10}
          md={8}
          lg={7}
          className={`${styles.center} | flex flex-col h-full`}
        >
          <ScrollSpy offsetBottom={100} scrollThrottle={80} useBoxMethod>
            <Biography />
            <Employment />
            <Projects />
            <Skills />
            <Achievements />
            <Volunteering />
          </ScrollSpy>
        </Grid>
        <Grid
          xs={1}
          sm={1}
          md={3}
          lg={3}
          className={`${styles.right} | h-full`}
        >
          <section className={`hidden md:flex md:flex-col items-center w-full`}>
            <ScrollSpyNavigation />
          </section>
        </Grid>
      </Grid>
    </section>
  );
}
