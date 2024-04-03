import { z } from "zod";

interface INavItemSchema {
  title: string;
  scrollId: string;
  dropdownData?: INavItemSchema[];
}

const NavItemSchema: z.ZodType<INavItemSchema> = z.lazy(() =>
  z.object({
    title: z.string(),
    scrollId: z.string(),
    dropdownData: z.array(NavItemSchema).optional(),
  })
);

export const NavBarAllItemsSchema = z.object({
  navItems: z.array(NavItemSchema),
});
