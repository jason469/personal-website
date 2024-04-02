import { z } from "zod";
import { VolunteeringDataSchema } from "@/schemas/content/volunteering";

type volunteeringData = z.infer<typeof VolunteeringDataSchema>;
