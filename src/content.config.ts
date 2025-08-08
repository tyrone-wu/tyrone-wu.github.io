import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogSchema = z.object({
  slug: z.string(),
  title: z.string(),
  date: z.date(),
  description: z.object({
    main: z.string(),
    extra: z.array(z.string()),
  }),
  nav: z.optional(
    z.array(
      z.object({
        title: z.string(),
        href: z.string(),
        subheaders: z.optional(
          z.array(
            z.object({
              title: z.string(),
              href: z.string(),
              subheaders: z.optional(
                z.array(
                  z.object({
                    title: z.string(),
                    href: z.string(),
                  }),
                ),
              ),
            }),
          ),
        ),
      }),
    ),
  ),
});

const blog = defineCollection({
  loader: glob({ pattern: "*.{md,mdx}", base: "./src/content/blog" }),
  schema: blogSchema,
});

const homelabBlog = defineCollection({
  loader: glob({ pattern: "homelab.mdx", base: "./src/content/homelab" }),
  schema: blogSchema,
});

export const collections = { blog, homelabBlog };
