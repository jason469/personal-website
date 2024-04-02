import { z } from "zod";
import {
  SingleSkillDataSchema,
  AllSkillsDataSchema,
} from "@/schemas/content/skills";

type singleSkillData = z.infer<typeof SingleSkillDataSchema>;
type allSkillsData = z.infer<typeof AllSkillsDataSchema>;
