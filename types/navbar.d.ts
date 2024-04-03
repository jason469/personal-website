import { z } from "zod";
import { NavBarAllItemsSchema, NavItemSchema } from "@/schemas/navbar";

type navItem = z.infer<typeof NavItemSchema>;
type navbarAllItems = z.infer<typeof NavBarAllItemsSchema>;
