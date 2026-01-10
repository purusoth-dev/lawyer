import Link from "next/link";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import siteConfig from "@/data/siteConfig.json";

const highlights = ["5 Years of Legal Excellence"];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-primary-950 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/hero-bg.jpg)",
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight mb-6">
              Trusted Legal
              <span className="block text-gradient">Expertise in</span>
              <span className="block">Chennai</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-xl leading-relaxed">
              SKS Law Associates delivers exceptional legal representation with
              over 5 years of experience. We are expert in
              civil,criminal,property,mcop,Family Law, we fight for your rights.
              We are always ready to help you.
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
                Book Consultation
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
                <div className="flex justify-center">
                  <div className="text-center p-8 bg-white/10 rounded-xl">
                    <div className="text-5xl font-heading font-bold text-accent-400 mb-2">
                      {siteConfig.stats.yearsExperience}
                    </div>
                    <div className="text-neutral-300 text-lg">Years Experience</div>
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
