import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import {
  articleSchema,
  categorySchema,
  viewSchema,
} from "~/lib/schema";

const API_BASE_URL = import.meta.env.API_URL;

const articleCollection = defineCollection({
  loader: async () => {
    const response = await fetch(`${API_BASE_URL}/article`);
    const data = await response.json();
    return data.results;
  },
  schema: articleSchema,
});

const viewCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/views" }),
  schema: viewSchema,
});

const categoryCollection = defineCollection({
  loader: glob({ pattern: "**/index.json", base: "./src/content/categories" }),
  schema: categorySchema,
});

export const collections = {
  articles: articleCollection,
  views: viewCollection,
  categories: categoryCollection,
};
