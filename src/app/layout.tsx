import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DisclaimerPopup from '@/components/ui/DisclaimerPopup';
import siteConfig from '@/data/siteConfig.json';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.siteName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  keywords: [
    // English keywords
    'lawyer Chennai',
    'advocate Chennai',
    'law firm Chennai',
    'best lawyer in Chennai',
    'criminal lawyer Chennai',
    'family lawyer Chennai',
    'divorce lawyer Chennai',
    'property lawyer Chennai',
    'civil lawyer Chennai',
    'cheque bounce lawyer Chennai',
    'consumer court lawyer Chennai',
    'labour lawyer Chennai',
    'legal services Chennai',
    'legal services Tamil Nadu',
    'advocate near me Chennai',
    'lawyer Tambaram',
    'advocate Pammal',
    'lawyer near Pammal Chennai',
    // Tamil keywords
    'வழக்கறிஞர் சென்னை',
    'சென்னை வழக்கறிஞர்',
    'குடும்ப வழக்கறிஞர்',
    'சொத்து வழக்கறிஞர்',
    'விவாகரத்து வழக்கறிஞர்',
  ],
  authors: [{ name: siteConfig.siteName }],
  creator: siteConfig.siteName,
  publisher: siteConfig.siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    title: `${siteConfig.siteName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: siteConfig.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.siteName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

// JSON-LD Structured Data for Law Firm
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: siteConfig.siteName,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}`,
    addressLocality: siteConfig.contact.address.city,
    addressRegion: siteConfig.contact.address.state,
    postalCode: siteConfig.contact.address.pincode,
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 12.973011009914634,
    longitude: 80.14038999375651,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:00',
    closes: '22:00',
  },
  priceRange: '₹₹',
  areaServed: [
    {
      '@type': 'City',
      name: 'Chennai',
    },
    {
      '@type': 'State',
      name: 'Tamil Nadu',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Legal Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Civil Law' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Criminal Law' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Family Law' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Divorce & Maintenance' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Property Law' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cheque Bounce / NI Act' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Consumer Law' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Labour Law' } },
    ],
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <DisclaimerPopup />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

