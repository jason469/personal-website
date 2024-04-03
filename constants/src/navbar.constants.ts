import { navbarAllItems } from "@/types/navbar";

export const navbarItems: navbarAllItems = {
  navItems: [
    {
      title: "About",
      scrollId: "about",
      dropdownData: [
        {
          title: "Biography",
          scrollId: "biography",
        },
      ],
    },
    {
      title: "Experiences",
      scrollId: "experiences",
      dropdownData: [
        {
          title: "Employment",
          scrollId: "employment",
        },
        {
          title: "Projects",
          scrollId: "projects",
        },
        {
          title: "Skills",
          scrollId: "skills",
        },
      ],
    },
    {
      title: "Other",
      scrollId: "other",
      dropdownData: [
        {
          title: "Achievements",
          scrollId: "achievements",
        },
        {
          title: "Volunteering",
          scrollId: "volunteering",
        },
      ],
    },
  ],
};
