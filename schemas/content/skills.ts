import { z } from "zod";

export const SingleSkillDataSchema = z.object({
  iconName: z.string(),
  title: z.string(),
  iconColourHex: z.string(),
});

export const AllSkillsDataSchema = z.object({
  categoryTitle: z.string(),
  skills: z.array(SingleSkillDataSchema),
});
