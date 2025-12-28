import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Clock,
  CheckCircle,
  Users,
  Quote,
  Folder,
} from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';
import caseStudiesData from '@/data/caseStudies.json';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Explore our landmark case studies showcasing successful outcomes in Criminal Law, Corporate Law, Property Disputes, and more. Real results for real clients.',
};

export default function CasesPage() {
  const featuredCases = caseStudiesData.caseStudies.filter((c) => c.featured);
  const otherCases = caseStudiesData.caseStudies.filter((c) => !c.featured);

  return (
    <>
      <PageHeader
        title="Case Studies"
        subtitle="Explore our track record of success. These cases demonstrate our expertise and commitment to achieving the best outcomes for our clients."
      />

      {/* Featured Cases */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Featured Cases"
            subtitle="Our most impactful legal victories that showcase our expertise across different practice areas."
          />

          <div className="space-y-16">
            {featuredCases.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? '' : ''
                }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative">
                    <div
                      className="h-80 lg:h-96 rounded-2xl bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${caseStudy.image})`,
                        backgroundColor: '#1a365d',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent rounded-2xl" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="bg-accent-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                          {caseStudy.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 mb-4">
                    {caseStudy.title}
                  </h3>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-6 mb-6 text-sm">
                    <div className="flex items-center gap-2 text-neutral-600">
                      <Users className="w-4 h-4 text-accent-500" />
                      <span>{caseStudy.client}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-600">
                      <Clock className="w-4 h-4 text-accent-500" />
                      <span>{caseStudy.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600 font-medium">
                      <CheckCircle className="w-4 h-4" />
                      <span>{caseStudy.outcome}</span>
                    </div>
                  </div>

                  <p className="text-neutral-600 mb-6">{caseStudy.summary}</p>

                  {/* Expandable Content */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-primary-900 mb-2">
                        The Challenge
                      </h4>
                      <p className="text-neutral-600 text-sm">
                        {caseStudy.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-900 mb-2">
                        Our Approach
                      </h4>
                      <p className="text-neutral-600 text-sm">
                        {caseStudy.approach}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-900 mb-2">
                        The Result
                      </h4>
                      <p className="text-neutral-600 text-sm">{caseStudy.result}</p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-neutral-50 rounded-xl p-4 border-l-4 border-accent-500">
                    <Quote className="w-6 h-6 text-accent-400 mb-2" />
                    <p className="text-neutral-700 italic">
                      &ldquo;{caseStudy.testimonial}&rdquo;
                    </p>
                    <p className="text-sm text-neutral-500 mt-2">— Client</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Cases */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <SectionHeader
            title="More Success Stories"
            subtitle="Additional cases that demonstrate our breadth of expertise."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherCases.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url(${caseStudy.image})`,
                    backgroundColor: '#1a365d',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-accent-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {caseStudy.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-primary-900 mb-3">
                    {caseStudy.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1 text-neutral-600">
                      <Clock className="w-4 h-4" />
                      <span>{caseStudy.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      <span>{caseStudy.outcome}</span>
                    </div>
                  </div>

                  <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                    {caseStudy.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-primary-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent-400 mb-2">
                2000+
              </div>
              <div className="text-neutral-300">Cases Handled</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent-400 mb-2">
                95%
              </div>
              <div className="text-neutral-300">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent-400 mb-2">
                ₹500Cr+
              </div>
              <div className="text-neutral-300">Value of Cases</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-accent-400 mb-2">
                All India
              </div>
              <div className="text-neutral-300">Court Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-6">
            <Folder className="w-8 h-8 text-accent-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-6">
            Have a Similar Case?
          </h2>
          <p className="text-neutral-600 text-lg mb-8 max-w-2xl mx-auto">
            Every case is unique, but our experience across thousands of matters means
            we can provide informed guidance. Let&apos;s discuss how we can help you
            achieve a favorable outcome.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4 group">
            Discuss Your Case
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}

