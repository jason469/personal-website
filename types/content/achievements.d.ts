import { z } from "zod";
import { AchievementDataSchema } from "@/schemas/content/achievements";

type achievementData = z.infer<typeof AchievementDataSchema>;
