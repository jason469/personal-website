import { z } from "zod";
import {
  TagDataSchema,
  EmploymentDataSchema,
} from "@/schemas/content/employment";

type tagData = z.infer<typeof TagDataSchema>;
type employmentData = z.infer<typeof EmploymentDataSchema>;
