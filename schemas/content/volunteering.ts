import { z } from "zod";

export const VolunteeringDataSchema = z.object({
    title: z.string(),
    company: z.string(),
    startYear: z.string(),
    endYear: z.string(),
    logoName: z.string(),
    shortDescription: z.string(),
    longDescription: z.string(),
    website: z.string()
});
