import { MetadataRoute } from 'next';
import { getAllBlogSlugs } from '@/lib/blog';

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://skslawassociates.in';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    '',
    '/about',
    '/practice',
    '/lawyers',
    '/cases',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '/blog' ? 'weekly' : 'monthly') as ChangeFrequency,
    priority: route === '' ? 1 : 0.8,
  }));

  // Blog posts
  const blogSlugs = getAllBlogSlugs();
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
