import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
  author: z.string().min(1).max(100),
  title: z.string().min(1).max(200),
  date: z.coerce.date().min(new Date('2000-01-01')).max(new Date()),
});

const dev = defineCollection({
  type: 'content',
  schema: postSchema,
});

const life = defineCollection({
  type: 'content',
  schema: postSchema,
});

const home = defineCollection({
  type: 'content',
  schema: z.object({}), // No specific schema for now, as it's a single page
});

export const collections = { life, dev, home };
