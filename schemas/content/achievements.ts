import { z } from "zod";

export const AchievementDataSchema = z.object({
  name: z.string(),
  company: z.string(),
  description: z.string(),
  year: z.number(),
});
