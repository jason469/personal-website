import { z } from "zod";

export const GitHubDataSchema = z.object({
  link: z.string(),
});

export const WebsiteDataSchema = z.object({
  title: z.string(),
  link: z.string(),
});

export const ProjectDataSchema = z.object({
  title: z.string(),
  description: z.string(),
  skills: z.array(z.string()),
  github: GitHubDataSchema.optional(),
  website: WebsiteDataSchema,
  logoName: z.string(),
  inDevelopment: z.boolean().optional(),
});
