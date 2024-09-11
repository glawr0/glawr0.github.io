import { defineCollection, z } from "astro:content";

const dev = defineCollection({
    type: "content",
    schema: z.object({
        author: z.string(),
        title: z.string(),
        date: z.coerce.date(),
    })
});

const life = defineCollection({
    type: "content",
    schema: z.object({
        author: z.string(),
        title: z.string(),
        date: z.coerce.date(),
    })
});

export const collections = {life, dev};