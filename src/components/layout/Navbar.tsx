'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, Scale } from 'lucide-react';
import { cn } from '@/lib/utils';
import siteConfig from '@/data/siteConfig.json';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/practice', label: 'Practice Areas' },
  // { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-900 text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-2 hover:text-accent-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2 hover:text-accent-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-neutral-300">
              {siteConfig.hours.weekdays}: {siteConfig.hours.time}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white shadow-lg py-2'
            : 'bg-white/95 backdrop-blur-sm py-4'
        )}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-primary-800 flex items-center justify-center group-hover:bg-primary-900 transition-colors">
                <Scale className="w-6 h-6 text-accent-400" />
              </div>
              <div>
                <h1 className="font-heading text-xl font-bold text-primary-900">
                  SKS Law Associates
                </h1>
                <p className="text-xs text-neutral-500 hidden sm:block">
                  Advocates & Legal Consultants
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-md transition-all duration-200',
                    pathname === link.href
                      ? 'text-accent-600 bg-accent-50'
                      : 'text-neutral-700 hover:text-accent-600 hover:bg-neutral-50'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-neutral-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-primary-800" />
              ) : (
                <Menu className="w-6 h-6 text-primary-800" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={cn(
              'lg:hidden overflow-hidden transition-all duration-300',
              isOpen ? 'max-h-[500px] mt-4' : 'max-h-0'
            )}
          >
            <div className="bg-neutral-50 rounded-xl p-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'block px-4 py-3 rounded-lg transition-all duration-200',
                    pathname === link.href
                      ? 'text-accent-600 bg-white font-medium shadow-sm'
                      : 'text-neutral-700 hover:bg-white hover:text-accent-600'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Link href="/contact" className="btn-primary w-full text-center">
                  Book Consultation
                </Link>
              </div>
              <div className="pt-4 px-4 space-y-2 text-sm text-neutral-600">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.contact.phoneDisplay}
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

