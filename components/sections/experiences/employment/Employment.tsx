import {EmploymentData} from '@/content/employment.content';
import styles from "./Employment.module.scss";
import EmploymentCard from "@/components/sections/experiences/employment/employmentcard/EmploymentCard";


const Employment = () => {
    return (
      <section
        className={`${styles.employment} banner_page page`}
        id={`employment`}
      >
        <section className={`titleWrapper | w-full flex justify-center`}>
          <h1 className={`${styles.title}`}>Employment</h1>
        </section>
        <section className={`flex flex-col justify-start w-full gap-3`}>
          {EmploymentData.map(function (data: employmentData, index: number) {
            return <EmploymentCard data={data} key={index} />;
          })}
        </section>
      </section>
    );
}

export default Employment;
