import Link from 'next/link';
import { Phone, ArrowRight, CheckCircle } from 'lucide-react';
import siteConfig from '@/data/siteConfig.json';

const highlights = [
  '25+ Years of Legal Excellence',
  'Free Initial Consultation',
  '95% Success Rate',
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-primary-950 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950/95 to-primary-950/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-600/5 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent-500/20 border border-accent-500/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
              <span className="text-accent-400 text-sm font-medium">
                Trusted by 5000+ Clients Across India
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight mb-6">
              Trusted Legal
              <span className="block text-gradient">Expertise Across</span>
              <span className="block">India</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-xl leading-relaxed">
              Sharma & Associates delivers exceptional legal representation with
              over 25 years of experience. From criminal defense to corporate law,
              we fight for your rights.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4 mb-10">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2 text-neutral-200"
                >
                  <CheckCircle className="w-5 h-5 text-accent-500" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn-primary text-lg px-8 py-4 group"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="btn-white text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Floating Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white/10 rounded-xl">
                    <div className="text-4xl font-heading font-bold text-accent-400 mb-2">
                      {siteConfig.stats.yearsExperience}
                    </div>
                    <div className="text-neutral-300">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-xl">
                    <div className="text-4xl font-heading font-bold text-accent-400 mb-2">
                      {siteConfig.stats.casesWon}
                    </div>
                    <div className="text-neutral-300">Cases Won</div>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-xl">
                    <div className="text-4xl font-heading font-bold text-accent-400 mb-2">
                      {siteConfig.stats.happyClients}
                    </div>
                    <div className="text-neutral-300">Happy Clients</div>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-xl">
                    <div className="text-4xl font-heading font-bold text-accent-400 mb-2">
                      {siteConfig.stats.successRate}
                    </div>
                    <div className="text-neutral-300">Success Rate</div>
                  </div>
                </div>

                {/* Decorative */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent-500/30 rounded-xl" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-500/20 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

