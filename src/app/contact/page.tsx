import { Metadata } from 'next';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle,
} from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import ContactForm from '@/components/contact/ContactForm';
import siteConfig from '@/data/siteConfig.json';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Sharma & Associates for legal consultation. Book a free consultation with our experienced advocates in Chennai. Call +91 98765 43210.',
};

const features = [
  'Free initial consultation',
  'Response within 24 hours',
  'Confidential communication',
  'No obligation to proceed',
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Have a legal question? We're here to help. Reach out for a free initial consultation with our experienced advocates."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <h2 className="text-2xl font-heading font-bold text-primary-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-neutral-600 mb-8">
                  Whether you need immediate legal assistance or want to discuss
                  your case, our team is ready to help. Contact us through any of
                  the following methods.
                </p>

                {/* Contact Details */}
                <div className="space-y-6 mb-8">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500 transition-colors">
                      <Phone className="w-6 h-6 text-accent-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-900">Call Us</h3>
                      <p className="text-accent-600 font-medium">
                        {siteConfig.contact.phoneDisplay}
                      </p>
                      <p className="text-sm text-neutral-500">
                        Available {siteConfig.hours.weekdays}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500 transition-colors">
                      <Mail className="w-6 h-6 text-accent-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-900">Email Us</h3>
                      <p className="text-accent-600 font-medium">
                        {siteConfig.contact.email}
                      </p>
                      <p className="text-sm text-neutral-500">
                        We respond within 24 hours
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-900">
                        Visit Our Office
                      </h3>
                      <p className="text-neutral-600">
                        {siteConfig.contact.address.line1},<br />
                        {siteConfig.contact.address.line2},<br />
                        {siteConfig.contact.address.city},{' '}
                        {siteConfig.contact.address.state} -{' '}
                        {siteConfig.contact.address.pincode}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-900">
                        Office Hours
                      </h3>
                      <p className="text-neutral-600">
                        {siteConfig.hours.weekdays}
                        <br />
                        {siteConfig.hours.time}
                      </p>
                      <p className="text-sm text-neutral-500">
                        {siteConfig.hours.sunday}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="bg-neutral-50 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageCircle className="w-5 h-5 text-accent-600" />
                    <h3 className="font-semibold text-primary-900">
                      Why Contact Us?
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-neutral-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-neutral-50 rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-heading font-bold text-primary-900 mb-2">
                  Book a Free Consultation
                </h2>
                <p className="text-neutral-600 mb-8">
                  Fill out the form below and one of our advocates will get back to
                  you within 24 hours to discuss your case.
                </p>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 relative">
        <iframe
          src={siteConfig.contact.mapEmbed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500"
          title="Sharma & Associates Office Location"
        />
        {/* Overlay Card */}
        <div className="absolute top-8 left-8 bg-white rounded-xl shadow-xl p-6 max-w-sm hidden md:block">
          <h3 className="font-heading font-semibold text-primary-900 mb-2">
            {siteConfig.siteName}
          </h3>
          <p className="text-sm text-neutral-600 mb-4">
            {siteConfig.contact.address.line1}, {siteConfig.contact.address.city}
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.city}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-600 text-sm font-medium hover:underline"
          >
            Get Directions →
          </a>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 bg-primary-900">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-heading font-bold text-white mb-4">
            Need Urgent Legal Assistance?
          </h2>
          <p className="text-neutral-300 mb-6">
            For emergencies like arrests or urgent court matters, call us
            immediately.
          </p>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="btn-primary text-lg px-8 py-4"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call {siteConfig.contact.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}

