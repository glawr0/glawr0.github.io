import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function buildItems(collection_name) {
  const collection = await getCollection(collection_name);

  const items = collection.map((post) => ({
    title: post.data.title,
    pubDate: post.data.pubDate,
    link: `/${collection_name}/${post.slug}/`,
  }));
  console.log(items);
  return items;
}

export async function GET(context) {
  const lifeItems = await buildItems('life');
  const devItems = await buildItems('dev');

  return rss({
    title: "Ged Lawrenson's Blog",
    description: "Ged's writings on life and working in technology.",
    site: context.site,
    items: [...lifeItems, ...devItems],
  });
}
