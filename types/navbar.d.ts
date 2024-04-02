import { z } from "zod";
import { NavBarItemsSchema, NavItemSchema } from "@/schemas/navbar";

type navItem = z.infer<typeof NavItemSchema>;
type navbarItems = z.infer<typeof NavBarItemsSchema>;
