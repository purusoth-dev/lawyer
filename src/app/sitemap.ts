import { MetadataRoute } from 'next';

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://skslawassociates.in';

  // Static pages with priority settings
  const pages = [
    { route: '', priority: 1.0, changeFreq: 'weekly' as ChangeFrequency },
    { route: '/about', priority: 0.8, changeFreq: 'monthly' as ChangeFrequency },
    { route: '/practice', priority: 0.9, changeFreq: 'monthly' as ChangeFrequency },
    { route: '/contact', priority: 0.8, changeFreq: 'monthly' as ChangeFrequency },
    { route: '/privacy-policy', priority: 0.3, changeFreq: 'yearly' as ChangeFrequency },
    { route: '/terms', priority: 0.3, changeFreq: 'yearly' as ChangeFrequency },
    { route: '/disclaimer', priority: 0.3, changeFreq: 'yearly' as ChangeFrequency },
  ];

  const staticPages: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${baseUrl}${page.route}`,
    lastModified: new Date(),
    changeFrequency: page.changeFreq,
    priority: page.priority,
  }));

  return staticPages;
}
