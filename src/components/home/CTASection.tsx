import Link from 'next/link';
import { Phone, ArrowRight, Clock, MapPin } from 'lucide-react';
import siteConfig from '@/data/siteConfig.json';

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/cta-bg.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-primary-950/95" />
      </div>

      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Get Legal Consultation Today
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
            Don&apos;t face legal challenges alone. Our experienced advocates are
            ready to listen to your case and provide expert guidance. Contact us today to discuss your case.
          </p>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-10 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-500/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent-400" />
              </div>
              <div className="text-left">
                <div className="text-white font-medium">Office Hours</div>
                <div className="text-neutral-300 text-sm">
                  {siteConfig.hours.weekdays}: {siteConfig.hours.time}
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-500/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent-400" />
              </div>
              <div className="text-left">
                <div className="text-white font-medium">Our Location</div>
                <div className="text-neutral-300 text-sm">
                  {siteConfig.contact.address.line1}, {siteConfig.contact.address.city}
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-lg px-8 py-4 group"
            >
              Book Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-900"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent" />
    </section>
  );
}

