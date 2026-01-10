import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import siteConfig from '@/data/siteConfig.json';

export default function AboutPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div
                  className="h-48 md:h-64 rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(/images/office-1.jpg)',
                  }}
                />
                <div
                  className="h-32 md:h-40 rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(/images/team-1.jpg)',
                  }}
                />
              </div>
              <div className="space-y-4 pt-8">
                <div
                  className="h-32 md:h-40 rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(/images/court-1.jpg)',
                  }}
                />
                <div
                  className="h-48 md:h-64 rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(/images/office-2.jpg)',
                  }}
                />
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-primary-900 text-white rounded-xl p-6 shadow-2xl hidden md:block">
              <div className="text-4xl font-heading font-bold text-accent-400">
                {siteConfig.stats.yearsExperience}
              </div>
              <div className="text-sm text-neutral-300">Years of Excellence</div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent-500/30 rounded-xl -z-10" />
          </div>

          {/* Right - Content */}
          <div>
            <div className="gold-line mb-6" />
            <h2 className="section-title mb-6">
              Chennai&apos;s Trusted Legal Partner
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Since 2020, SKS Law Associates has been at the forefront of legal
              excellence in Chennai. Our firm combines deep legal expertise with
              a genuine commitment to client success. We handle cases across all
              courts—from Magistrate Courts to the High Court.
            </p>

            <Link
              href="/about"
              className="btn-primary group"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
