import { z } from "zod";

export const HeroImageInfoSchema = z.object({
  imagePath: z.string(),
  compressedImagePath: z.string(),
  title: z.string()
})
