import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogSchema = ({ image }: any) =>
  z.object({
    slug: z.string(),
    title: z.string(),
    date: z.string(),
    description: z.object({
      main: z.string(),
      extra: z.array(z.string()),
    }),
    thumbnail: image(),
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
  loader: glob({ pattern: "homelab.mdx", base: "./src/content/about" }),
  schema: blogSchema,
});

export const collections = { blog, homelabBlog };
