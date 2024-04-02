import { z } from "zod";
import HeroImageInfoSchema from "@/schemas/home";

type heroImageInfo = z.infer<typeof HeroImageInfoSchema>;
