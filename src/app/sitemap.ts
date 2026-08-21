import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://solsrng.robloxwikihub.com';

  const routes = [
    '',
    '/aura-simulator',
    '/crafting-calculator',
    '/tier-list',
    '/codes',
    '/biomes',
    '/equipment'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/codes' || route === '/aura-simulator' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8
  }));
}
