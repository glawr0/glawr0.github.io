import { rssSchema } from '@astrojs/rss';
import { defineCollection, z } from 'astro:content';

const dev = defineCollection({
  type: 'content',
  schema: rssSchema,
});

const life = defineCollection({
  type: 'content',
  schema: rssSchema,
});

const home = defineCollection({
  type: 'content',
  schema: z.object({}), // No specific schema for now, as it's a single page
});

export const collections = { life, dev, home };
