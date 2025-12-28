'use client';

import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-neutral-50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 */}
          <div className="relative mb-8">
            <h1 className="text-[150px] md:text-[200px] font-heading font-bold text-primary-100 leading-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-full p-6 shadow-xl">
                <Search className="w-12 h-12 text-primary-800" />
              </div>
            </div>
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let us help you find what you need.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              <Home className="w-5 h-5 mr-2" />
              Go to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <p className="text-neutral-500 mb-4">Or visit these popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/practice"
                className="text-accent-600 hover:text-accent-700 font-medium"
              >
                Practice Areas
              </Link>
              <span className="text-neutral-300">|</span>
              <Link
                href="/lawyers"
                className="text-accent-600 hover:text-accent-700 font-medium"
              >
                Our Lawyers
              </Link>
              <span className="text-neutral-300">|</span>
              <Link
                href="/contact"
                className="text-accent-600 hover:text-accent-700 font-medium"
              >
                Contact Us
              </Link>
              <span className="text-neutral-300">|</span>
              <Link
                href="/blog"
                className="text-accent-600 hover:text-accent-700 font-medium"
              >
                Legal Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

