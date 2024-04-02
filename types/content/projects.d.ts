import { z } from "zod";
import {
  GitHubDataSchema,
  WebsiteDataSchema,
  ProjectDataSchema,
} from "@/schemas/content/projects";

type githubData = z.infer<typeof GitHubDataSchema>;
type websiteData = z.infer<typeof WebsiteDataSchema>;
type projectData = z.infer<typeof ProjectDataSchema>;
