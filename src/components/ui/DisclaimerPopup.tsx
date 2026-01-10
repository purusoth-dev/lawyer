'use client';

import { useState, useEffect } from 'react';
import { Scale } from 'lucide-react';

export default function DisclaimerPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem('disclaimerAccepted');
    if (!hasAccepted) {
      setShowPopup(true);
      // Prevent scrolling when popup is open
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('disclaimerAccepted', 'true');
    setShowPopup(false);
    document.body.style.overflow = 'unset';
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-primary-950/95 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-up">
        {/* Header */}
        <div className="bg-primary-900 px-6 py-5 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-accent-500/20 flex items-center justify-center">
              <Scale className="w-6 h-6 text-accent-400" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-bold text-white">
                Disclaimer
              </h2>
              <p className="text-neutral-300 text-sm">
                Bar Council of India Rules
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="prose prose-neutral max-w-none">
            <p className="text-neutral-700 leading-relaxed mb-4">
              The Bar Council of India does not permit advertisement or solicitation 
              by advocates in any form or manner. By accessing this website, 
              <strong> www.skslawassociates.in</strong>, you acknowledge and confirm that 
              you are seeking information relating to <strong>SKS Law Associates</strong> of 
              your own accord and that there has been no form of solicitation, 
              advertisement or inducement by SKS Law Associates or its members.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-4">
              The content of this website is for informational purposes only and 
              should not be interpreted as soliciting or advertisement. No 
              material/information provided on this website should be construed 
              as legal advice. SKS Law Associates shall not be liable for 
              consequences of any action taken by relying on the material/information 
              provided on this website.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              The contents of this website are the intellectual property of 
              SKS Law Associates.
            </p>
          </div>

          {/* Checkbox */}
          <div className="mt-6 p-4 bg-neutral-50 rounded-xl border border-neutral-200">
            <p className="text-primary-900 font-medium text-center">
              I accept the above disclaimer and wish to proceed.
            </p>
          </div>

          {/* Button */}
          <button
            onClick={handleAccept}
            className="w-full mt-6 bg-primary-900 hover:bg-primary-800 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <span>PROCEED TO WEBSITE</span>
          </button>
        </div>
      </div>
    </div>
  );
}
