import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Tag,
} from 'lucide-react';
import { getBlogPost, getAllBlogSlugs, getBlogPosts } from '@/lib/blog';

interface Props {
  params: { slug: string };
}

// Sample content for demo
const samplePosts: Record<string, { meta: any; content: string }> = {
  'understanding-bail-provisions-india': {
    meta: {
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
    content: `
## What is Bail?

Bail is the conditional release of an accused person awaiting trial, typically requiring a sum of money or property as security. In India, the right to bail is a fundamental aspect of criminal jurisprudence, balancing the presumption of innocence with the need to ensure the accused's appearance at trial.

## Types of Bail in India

### 1. Regular Bail

Regular bail is granted to a person who is already in custody. It is applied for under **Section 437 and 439 of the Code of Criminal Procedure (CrPC)**. The court considers several factors:

- Nature and severity of the offense
- Criminal history of the accused
- Possibility of tampering with evidence
- Risk of fleeing from justice

### 2. Anticipatory Bail

Anticipatory bail can be sought **before arrest** under Section 438 of CrPC. This is particularly useful when:

- There's a genuine apprehension of arrest
- The allegations appear to be frivolous or motivated
- The applicant has a clean record

### 3. Interim Bail

Interim bail is temporary bail granted for a short period, usually until the regular bail application is decided.

## Bailable vs Non-Bailable Offenses

**Bailable Offenses:**
- Bail is a matter of right
- Police can grant bail at the station
- Examples: Minor theft, assault causing simple hurt

**Non-Bailable Offenses:**
- Bail is at court's discretion
- Application must be made before a Magistrate or Judge
- Examples: Murder, rape, kidnapping

## Steps to Apply for Bail

1. **Engage a competent lawyer** familiar with criminal law
2. **Prepare necessary documents** - ID proof, address proof, surety details
3. **File bail application** before appropriate court
4. **Appear for hearing** with sureties
5. **Comply with bail conditions** if granted

## Important Supreme Court Judgments on Bail

- **Arnesh Kumar vs State of Bihar (2014)**: Established guidelines to prevent unnecessary arrests
- **Sanjay Chandra vs CBI (2012)**: Emphasized that bail is the rule, jail is the exception
- **Dataram Singh vs State of UP (2018)**: Reinforced the principle of presumption of innocence

## Our Role in Bail Matters

At Sharma & Associates, we have successfully secured bail in hundreds of cases. Our approach includes:

- Immediate response to arrest situations
- Thorough preparation of bail applications
- Strong arguments based on established precedents
- Regular follow-up until release

**Need help with a bail application?** [Contact us](/contact) for immediate assistance.
    `,
  },
  'mutual-consent-divorce-process': {
    meta: {
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
    content: `
## Understanding Mutual Consent Divorce

Mutual consent divorce is the simplest and most amicable way to end a marriage in India. It's governed by different personal laws depending on religion, but the fundamental principle remains the same - both parties agree to separate.

## Eligibility Criteria

- Married for at least **one year**
- Living separately for at least **one year**
- Both parties consent to divorce
- Unable to live together
- Mutually agreed on terms (alimony, custody, property)

## Step-by-Step Process

### Step 1: First Motion
Both parties file a joint petition stating:
- Date and place of marriage
- Period of living separately
- Reasons for inability to cohabit
- Agreement on alimony and custody

### Step 2: Cooling Off Period (6 Months)
After the first motion, the court mandates a 6-month waiting period. This can be waived in exceptional circumstances as per the Supreme Court's ruling in **Amardeep Singh vs Harveen Kaur (2017)**.

### Step 3: Second Motion
After the cooling period:
- Both parties appear before court
- Confirm their consent
- Court examines the petition
- Decree of divorce is granted

## Documents Required

1. Marriage certificate
2. Address proof of both parties
3. Photographs
4. Income proof
5. Settlement agreement (if any)
6. Proof of separation

## Alimony and Maintenance

Mutual consent allows flexibility in deciding:
- One-time settlement amount
- Monthly maintenance
- Property division
- Children's expenses

## Child Custody Arrangements

Parents can agree on:
- Primary custody with one parent
- Joint custody arrangements
- Visitation schedules
- Financial responsibilities

## Timeline

- First Motion: 1-2 hearings
- Cooling Period: 6 months (can be waived)
- Second Motion: 1-2 hearings
- **Total: 6-18 months typically**

## Our Expertise in Divorce Matters

Ms. S. Kavitha has handled 200+ divorce cases with sensitivity and professionalism. We ensure:

- Complete confidentiality
- Fair negotiations
- Child's welfare priority
- Quick resolution

**Going through a difficult time?** [Schedule a consultation](/contact) to discuss your options.
    `,
  },
  'gst-compliance-small-businesses': {
    meta: {
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
    content: `
## GST Registration Thresholds

### Mandatory Registration
- Turnover exceeds **₹40 lakhs** (₹20 lakhs for special category states)
- Inter-state supply of goods
- E-commerce operators
- Persons making taxable supplies on behalf of others

### Voluntary Registration
Businesses below threshold can register voluntarily to:
- Claim input tax credit
- Enhance business credibility
- Participate in government tenders

## Key GST Returns for Small Businesses

### GSTR-1 (Outward Supplies)
- Due: 11th of following month
- Details of all sales

### GSTR-3B (Summary Return)
- Due: 20th of following month
- Payment of tax liability

### GSTR-9 (Annual Return)
- Due: 31st December
- Consolidated annual summary

## Common Compliance Mistakes

1. **Late filing of returns** - Attracts interest and penalties
2. **Incorrect HSN codes** - Leads to classification disputes
3. **Not reconciling ITC** - Results in denied credits
4. **Missing invoices** - Creates audit issues
5. **Wrong GSTIN entry** - Invalid transactions

## Input Tax Credit (ITC) Rules

You can claim ITC if:
- You have a valid tax invoice
- Goods/services are received
- Supplier has filed their return
- Tax has been deposited

## Composition Scheme Benefits

For small businesses (turnover up to ₹1.5 Cr):
- Pay tax at 1% (goods) or 6% (services)
- Quarterly returns instead of monthly
- Simplified compliance

## Penalties for Non-Compliance

| Default | Penalty |
|---------|---------|
| Late filing | ₹50/day (₹25 CGST + ₹25 SGST) |
| Not registering | 10% of tax due or ₹10,000 |
| Fraud | 100% of tax evaded |

## Our GST Advisory Services

Mr. V. Arjun and team provide:
- GST registration assistance
- Return filing and compliance
- Assessment and audit support
- Dispute resolution

**Need GST guidance?** [Contact our tax experts](/contact) today.
    `,
  },
};

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  const sampleSlugs = Object.keys(samplePosts);
  const allSlugs = [...new Set([...slugs, ...sampleSlugs])];
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug) || samplePosts[params.slug];

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.meta.title,
    description: post.meta.excerpt,
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt,
      type: 'article',
      publishedTime: post.meta.date,
      authors: [post.meta.author],
    },
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug) || samplePosts[params.slug];

  if (!post) {
    notFound();
  }

  const { meta, content } = post;

  // Get related posts
  const allPosts = getBlogPosts().length > 0 ? getBlogPosts() : Object.values(samplePosts).map(p => p.meta);
  const relatedPosts = allPosts
    .filter((p) => p.slug !== params.slug && p.category === meta.category)
    .slice(0, 3);

  return (
    <>
      {/* Header */}
      <section className="bg-primary-900 py-16 md:py-24">
        <div className="container-custom">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-neutral-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-accent-400 font-medium mb-4">
              <Tag className="w-4 h-4" />
              {meta.category}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              {meta.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-neutral-300">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {meta.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(meta.date)}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {meta.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2">
              {/* Featured Image */}
              <div
                className="h-64 md:h-96 rounded-2xl bg-cover bg-center mb-10"
                style={{
                  backgroundImage: `url(${meta.image})`,
                  backgroundColor: '#1a365d',
                }}
              />

              {/* Article Content */}
              <div className="prose-legal">
                <MDXRemote source={content} />
              </div>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-neutral-200">
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-primary-900 flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share this article:
                  </span>
                  <div className="flex gap-2">
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Author Card */}
              <div className="bg-neutral-50 rounded-xl p-6 mb-8">
                <h3 className="font-heading font-semibold text-primary-900 mb-4">
                  About the Author
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary-200 flex items-center justify-center">
                    <span className="font-heading font-bold text-primary-800 text-xl">
                      {meta.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-primary-900">
                      {meta.author}
                    </div>
                    <div className="text-sm text-neutral-500">
                      Senior Advocate
                    </div>
                  </div>
                </div>
                <Link href="/lawyers" className="text-accent-600 text-sm font-medium">
                  View Profile →
                </Link>
              </div>

              {/* CTA Card */}
              <div className="bg-primary-900 rounded-xl p-6 mb-8">
                <h3 className="font-heading text-xl font-semibold text-white mb-3">
                  Need Legal Help?
                </h3>
                <p className="text-neutral-300 text-sm mb-4">
                  Our experts are ready to assist you with your legal matters.
                </p>
                <Link href="/contact" className="btn-primary w-full text-center">
                  Free Consultation
                </Link>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div>
                  <h3 className="font-heading font-semibold text-primary-900 mb-4">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        className="block group"
                      >
                        <h4 className="font-medium text-primary-900 group-hover:text-accent-600 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-sm text-neutral-500 mt-1">
                          {formatDate(relatedPost.date)}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

