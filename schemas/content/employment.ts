import { z } from "zod";

export const TagDataSchema = z.object({
  colour: z.string(),
});

export const EmploymentDataSchema = z.object({
  role: z.string(),
  company: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  description: z.array(z.string()),
  tagData: TagDataSchema
})
