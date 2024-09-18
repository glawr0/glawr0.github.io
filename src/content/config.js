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

const links = defineCollection({
  type: 'content',
  schema: z.object({
    links: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
      date: z.string().date(),
    }))
  })
});

export const collections = { life, dev, home, links };
