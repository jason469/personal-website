import { z } from "zod";

export const HeroImageSchema = z.object({
  title: z.string(),
  sourceImagePath: z.string(),
  compressedImagePath: z.string(),
  children: z.any().optional(),
});
