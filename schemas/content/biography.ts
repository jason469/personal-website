import { z } from "zod";

export const BiographyDataSchema = z.object({
  motto: z.string(),
  description: z.string(),
});
