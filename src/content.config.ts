import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      slug: z.string(),
      title: z.string(),
      date: z.string(),
      description: z.object({
        main: z.string(),
        extra: z.array(z.string()),
      }),
      thumbnail: image(),
    }),
});

export const collections = { blog };
