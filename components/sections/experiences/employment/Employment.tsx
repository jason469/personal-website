import styles from "./Employment.module.scss";

import { EmploymentData } from "@/content/employment.content";
import EmploymentCard from "@/components/sections/experiences/employment/employmentcard/EmploymentCard";

const Employment = () => {
  return (
    <section className={`${styles.employment}`}>
      <section className={`titleWrapper | w-full flex justify-center`}>
        <h1 className={`${styles.title}`}>Employment</h1>
      </section>
      <section className={`flex flex-col justify-start w-full gap-5`}>
        {EmploymentData.map(function (data: employmentData, index: number) {
          return <EmploymentCard data={data} key={index} />;
        })}
      </section>
    </section>
  );
};

export default Employment;
