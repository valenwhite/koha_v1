// src/content/config.mjs
import { defineCollection, z } from "astro:content";

const shows = defineCollection({
  schema: z.object({
    title: z.string(),
    year: z.number(),
    image: z.string(),
    tagline: z.string(),
    description: z.string(),
    logoInvert: z.boolean(),
  }),
});

const people = defineCollection({
  schema: z.object({
    name: z.string(),
    role: z.string(),
    image: z.string()
  }),
});

export const collections = { shows, people };