import styles from "./dropdown.module.scss";

import { useEffect, useState } from "react";
import Link from "next/link";

import { navItem } from "@/types/navbar";

type dropdownProps = {
  itemId: string;
  dropdownData: Array<navItem>;
  showDropdownId: string;
};

function Dropdown({ itemId, dropdownData, showDropdownId }: dropdownProps) {
  const [dropdown, setDropdown] = useState(false); // Toggles whether we show the dropdown or not

  useEffect(() => {
    showDropdownId === itemId ? setDropdown(true) : setDropdown(false);
  }, [showDropdownId]);

  return (
    <>
      <article className={`${dropdown ? styles.submenu : styles.hiddenMenu} | transition ease-in duration-150 `}>
        {dropdownData.map((item) => {
          return (
            <Link
              href={`/#${item.scrollId}`}
              className={`${styles.title} | w-full h-full text-white p-3 overflow-hidden hover:bg-primary-a30 transition duration-200 ease-in`}
              key={item.title}
            >
              <p>{item.title}</p>
            </Link>
          );
        })}
      </article>
    </>
  );
}

export default Dropdown;
