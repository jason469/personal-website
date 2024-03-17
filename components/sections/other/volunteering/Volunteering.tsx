import styles from "./Volunteering.module.scss";

import { VolunteeringData } from "@/content/volunteering.content";
import VolunteerCard from "@/components/sections/other/volunteering/volunteeringCard/VolunteeringCard";
import Grid from "@mui/material/Unstable_Grid2";

const Volunteering = () => {
  return (
    <div className={`${styles.volunteering}`}>
        <div
          className={`${styles.headings} | w-full mb-6 flex flex-col items-center`}
        >
          <h1 className={`${styles.title}`}>Volunteering</h1>
        </div>
        <Grid container spacing={2} className={``}>
          {VolunteeringData.map(function (
            volunteer: volunteeringData,
            index: number
          ) {
            return (
              <Grid xs={12} sm={6} lg={4}>
                <VolunteerCard data={volunteer} key={index} />
              </Grid>
            );
          })}
        </Grid>
    </div>
  );
};

export default Volunteering;
