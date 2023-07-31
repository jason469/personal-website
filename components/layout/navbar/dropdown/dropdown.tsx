import {useEffect, useState} from "react";
import styles from "./dropdown.module.scss"
import Link from "next/link";

type dropdownProps = {
    itemId: string
    dropdownData: Array<navItem>
    showDropdownId: string
}


function Dropdown({itemId, dropdownData, showDropdownId}: dropdownProps) {
    const [dropdown, setDropdown] = useState(false);  // Toggles whether we show the dropdown or not

    useEffect(() => {
        (showDropdownId === itemId) ? setDropdown(true) : setDropdown(false)
    }, [showDropdownId]);


    return (
        <>
            <article
                className={`${dropdown ? styles.submenu : "hide"} `}
            >
                {dropdownData.map((item) => {
                    return (
                        <Link
                            href={`/#${item.scrollId}`}
                            className={`w-full h-full text-white p-2 overflow-hidden hover:bg-primary-purple `}
                            key={item.title}
                        >
                            <p>{item.title}</p>
                        </Link>
                    );
                })}
            </article>
        </>
    )
        ;
}

export default Dropdown;