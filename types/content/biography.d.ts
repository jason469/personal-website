import { z } from "zod";
import { BiographyDataSchema } from "@/schemas/content/biography";

type biographyData = z.infer<typeof BiographyDataSchema>;
