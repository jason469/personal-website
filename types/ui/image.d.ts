import { z } from "zod";
import { HeroImageSchema } from "@/schemas/ui/image";

type heroImage = z.infer<typeof HeroImageSchema>;
