import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import Icon from '@/components/ui/Icon';
import practiceAreasData from '@/data/practiceAreas.json';

export const metadata: Metadata = {
  title: 'Practice Areas',
  description:
    'Explore our comprehensive legal services including Criminal Law, Family Law, Corporate Law, Property Disputes, GST & Taxation, and more. Expert advocates in Chennai.',
};

export default function PracticePage() {
  return (
    <>
      <PageHeader
        title="Practice Areas"
        subtitle="Comprehensive legal services across all major areas of law. Our experienced advocates provide expert representation tailored to your needs."
      />

      {/* Practice Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {practiceAreasData.practiceAreas.map((area, index) => (
              <div
                key={area.id}
                id={area.id}
                className={`grid lg:grid-cols-2 gap-12 items-center scroll-mt-24 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center">
                      <Icon
                        name={area.icon}
                        className="w-7 h-7 text-primary-800"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900">
                        {area.title}
                      </h2>
                      <p className="text-neutral-500 text-sm">{area.titleTamil}</p>
                    </div>
                  </div>

                  <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                    {area.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {area.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-neutral-700"
                      >
                        <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="btn-primary group"
                  >
                    Consult for {area.title}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative">
                    <div
                      className="h-80 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center"
                    >
                      <Icon
                        name={area.icon}
                        className="w-32 h-32 text-primary-300"
                      />
                    </div>
                    {/* Decorative */}
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-500/10 rounded-xl -z-10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Need Legal Help in Another Area?
          </h2>
          <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
            Our practice extends beyond the areas listed. If you have a legal matter
            not covered here, contact us for a consultation. We may be able to help
            or refer you to a trusted specialist.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4 group">
            Contact Us Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}

