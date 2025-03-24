import { reference, z } from "astro:content";

export const articleSchema = () => z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  country: z.string(),
  category: reference("categories"),
  content: z.string(),
  summary: z.string(),
  leftAnalysis: z.string(),
  centerAnalysis: z.string(),
  rightAnalysis: z.string(),
  factAnalysis: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  postedAt: z.string().datetime(),
  tags: z.array(z.string()),
  cover: z.string(),
  coverRights: z.string().nullable(),
  subArticles: z.array(
    z.object({
      id: z.string(),
      url: z.string(),
      sourceId: z.string(),
      title: z.string(),
      country: z.string(),
      content: z.string(),
      createdAt: z.string().datetime(),
      postedAt: z.string().datetime(),
    })
  )
})

export const viewSchema = z.object({
  title: z.string(),
  description: z.string(),
  blocks: z.array(z.any()),
})

export const categorySchema = z.object({
  title: z.string(),
  slug: z.string().regex(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    "The string must be a slug (only lowercase letters, numbers, and hyphens)."
  ),
})
