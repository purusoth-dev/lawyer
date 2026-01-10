import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import { getBlogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Legal Blog',
  description:
    'Stay informed with our legal blog. Articles on Criminal Law, Family Law, Corporate Law, GST, Property matters, and more by our expert advocates.',
};

// Sample blog posts for initial display
const samplePosts = [
  {
    slug: 'understanding-bail-provisions-india',
    title: 'Understanding Bail Provisions in India: A Complete Guide',
    excerpt:
      'Learn about the different types of bail, conditions for granting bail, and your rights when arrested in India. This comprehensive guide covers anticipatory bail, regular bail, and interim bail.',
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
      'A comprehensive guide to obtaining a mutual consent divorce, including timeline, documents required, and legal procedures. Know your rights and options.',
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
      'Essential GST compliance requirements, common mistakes to avoid, and tips for small business owners in Tamil Nadu. Stay compliant and avoid penalties.',
    date: '2024-12-05',
    author: 'Mr. V. Arjun',
    category: 'GST & Taxation',
    image: '/images/blog/gst-compliance.jpg',
    readTime: '10 min read',
  },
  {
    slug: 'property-registration-tamil-nadu',
    title: 'Property Registration in Tamil Nadu: Complete Guide 2024',
    excerpt:
      'Everything you need to know about property registration in Tamil Nadu - stamp duty, registration charges, documents required, and the step-by-step process.',
    date: '2024-11-28',
    author: 'Mr. R. Sharma',
    category: 'Property Law',
    image: '/images/blog/property-registration.jpg',
    readTime: '12 min read',
  },
  {
    slug: 'consumer-rights-refund-policy',
    title: 'Know Your Consumer Rights: Getting Refunds Made Easy',
    excerpt:
      'Understanding your rights as a consumer in India. Learn how to file complaints, claim refunds, and get compensation for defective products or deficient services.',
    date: '2024-11-20',
    author: 'Ms. S. Kavitha',
    category: 'Consumer Protection',
    image: '/images/blog/consumer-rights.jpg',
    readTime: '7 min read',
  },
  {
    slug: 'cheque-bounce-legal-remedies',
    title: 'Cheque Bounce Cases: Legal Remedies Under Section 138',
    excerpt:
      'What to do when a cheque bounces? Understanding the legal provisions under the Negotiable Instruments Act and how to initiate proceedings.',
    date: '2024-11-15',
    author: 'Mr. V. Arjun',
    category: 'NI Act',
    image: '/images/blog/cheque-bounce.jpg',
    readTime: '9 min read',
  },
];

const categories = [
  'All',
  'Criminal Law',
  'Family Law',
  'Property Law',
  'Corporate Law',
  'GST & Taxation',
  'Consumer Protection',
  'NI Act',
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  // Get MDX posts or use sample posts
  const mdxPosts = getBlogPosts();
  const posts = mdxPosts.length > 0 ? mdxPosts : samplePosts;
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <>
      <PageHeader
        title="Legal Insights"
        subtitle="Stay informed with our latest articles on legal developments, practical advice, and important updates from the legal system."
      />

      {/* Categories */}
      <section className="py-8 bg-white border-b border-neutral-100">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <span
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                  category === 'All'
                    ? 'bg-primary-800 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-primary-100 hover:text-primary-800'
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                className="h-80 lg:h-[400px] rounded-2xl bg-cover bg-center relative overflow-hidden group"
                style={{
                  backgroundImage: `url(${featuredPost.image})`,
                  backgroundColor: '#1a365d',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-accent-600 font-medium mb-4">
                  <Tag className="w-4 h-4" />
                  {featuredPost.category}
                </div>
                <Link href={`/blog/${featuredPost.slug}`}>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-4 hover:text-accent-600 transition-colors">
                    {featuredPost.title}
                  </h2>
                </Link>
                <p className="text-neutral-600 text-lg mb-6">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 mb-6">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {formatDate(featuredPost.date)}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="btn-primary group"
                >
                  Read Article
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-2xl font-heading font-bold text-primary-900 mb-8">
            Latest Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block relative h-48 overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage: `url(${post.image})`,
                      backgroundColor: '#1a365d',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </Link>

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
                      Read
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-primary-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Stay Updated with Legal News
          </h2>
          <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest legal updates, case law
            summaries, and practical legal tips delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-accent-500 outline-none"
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

