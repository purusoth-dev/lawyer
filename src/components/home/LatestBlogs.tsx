import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import type { BlogPost } from '@/types';

// Sample blog posts data
const latestPosts: BlogPost[] = [
  {
    slug: 'understanding-bail-provisions-india',
    title: 'Understanding Bail Provisions in India: A Complete Guide',
    excerpt:
      'Learn about the different types of bail, conditions for granting bail, and your rights when arrested in India.',
    date: '2024-12-15',
    author: 'Mr. R. Sharma',
    category: 'Criminal Law',
    image: '/images/blog/bail-provisions.jpg',
    readTime: '8 min read',
  },
  {
    slug: 'mutual-consent-divorce-process',
    title: 'Mutual Consent Divorce in India: Step-by-Step Process',
    excerpt:
      'A comprehensive guide to obtaining a mutual consent divorce, including timeline, documents required, and legal procedures.',
    date: '2024-12-10',
    author: 'Ms. S. Kavitha',
    category: 'Family Law',
    image: '/images/blog/divorce-process.jpg',
    readTime: '6 min read',
  },
  {
    slug: 'gst-compliance-small-businesses',
    title: 'GST Compliance for Small Businesses: What You Need to Know',
    excerpt:
      'Essential GST compliance requirements, common mistakes to avoid, and tips for small business owners in Tamil Nadu.',
    date: '2024-12-05',
    author: 'Mr. V. Arjun',
    category: 'GST & Taxation',
    image: '/images/blog/gst-compliance.jpg',
    readTime: '10 min read',
  },
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function LatestBlogs() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <SectionHeader
          title="Latest Legal Insights"
          subtitle="Stay informed with our latest articles on legal developments, case studies, and practical advice."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <Link href={`/blog/${post.slug}`} className="block relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${post.image})`,
                    backgroundColor: '#1a365d',
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h3 className="font-heading text-xl font-semibold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-accent-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="btn-secondary group">
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

