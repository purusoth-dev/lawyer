import Link from 'next/link';
import {
  Scale,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
} from 'lucide-react';
import siteConfig from '@/data/siteConfig.json';
import practiceAreasData from '@/data/practiceAreas.json';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/practice', label: 'Practice Areas' },
  { href: '/lawyers', label: 'Our Team' },
  { href: '/cases', label: 'Case Studies' },
  { href: '/blog', label: 'Legal Blog' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-white">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary-800 flex items-center justify-center">
                <Scale className="w-6 h-6 text-accent-400" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold">
                  {siteConfig.siteName}
                </h3>
              </div>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              {siteConfig.tagline}. With over {siteConfig.stats.yearsExperience}{' '}
              years of experience, we provide comprehensive legal services across
              Tamil Nadu and India.
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-accent-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-accent-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-accent-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent-500"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-accent-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent-500"></span>
              Practice Areas
            </h4>
            <ul className="space-y-3">
              {practiceAreasData.practiceAreas.slice(0, 7).map((area) => (
                <li key={area.id}>
                  <Link
                    href={`/practice#${area.id}`}
                    className="text-neutral-300 hover:text-accent-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{area.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent-500"></span>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-start gap-3 text-neutral-300 hover:text-accent-400 transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 text-accent-500" />
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-3 text-neutral-300 hover:text-accent-400 transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 text-accent-500" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-neutral-300">
                <MapPin className="w-5 h-5 mt-0.5 text-accent-500 flex-shrink-0" />
                <span>
                  {siteConfig.contact.address.line1},<br />
                  {siteConfig.contact.address.line2},<br />
                  {siteConfig.contact.address.city},{' '}
                  {siteConfig.contact.address.state} -{' '}
                  {siteConfig.contact.address.pincode}
                </span>
              </li>
              <li className="flex items-start gap-3 text-neutral-300">
                <Clock className="w-5 h-5 mt-0.5 text-accent-500" />
                <span>
                  {siteConfig.hours.weekdays}
                  <br />
                  {siteConfig.hours.time}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm text-center md:text-left">
              © {currentYear} {siteConfig.siteName}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-neutral-400">
              <Link
                href="/privacy-policy"
                className="hover:text-accent-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-accent-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/disclaimer"
                className="hover:text-accent-400 transition-colors"
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

