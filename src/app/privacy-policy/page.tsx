import { Metadata } from 'next';
import PageHeader from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Sharma & Associates - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose-legal">
            <p className="text-neutral-600 mb-8">
              <strong>Last Updated:</strong> December 2024
            </p>

            <h2>1. Introduction</h2>
            <p>
              Sharma & Associates (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our legal services.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide, including:</p>
            <ul>
              <li>Name and contact details (email, phone number, address)</li>
              <li>Professional information</li>
              <li>Information about your legal matter</li>
              <li>Payment information (when applicable)</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address and browser type</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
              <li>Device information</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information for:</p>
            <ul>
              <li>Providing legal services and consultations</li>
              <li>Responding to your inquiries</li>
              <li>Sending relevant legal updates (with your consent)</li>
              <li>Improving our website and services</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2>4. Attorney-Client Privilege</h2>
            <p>
              Communications between you and our attorneys may be protected by attorney-client privilege. We maintain strict confidentiality of all client information in accordance with the Bar Council of India rules and applicable laws.
            </p>

            <h2>5. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties except:
            </p>
            <ul>
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights or the rights of others</li>
              <li>To trusted service providers who assist in our operations</li>
            </ul>

            <h2>6. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2>8. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. You can set your browser to refuse cookies, but some features may not function properly.
            </p>

            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have questions about this privacy policy, please contact us at:
            </p>
            <p>
              <strong>Sharma & Associates</strong><br />
              123, Anna Salai, Opposite High Court<br />
              Chennai, Tamil Nadu - 600002<br />
              Email: contact@sharmaassociates.in<br />
              Phone: +91 98765 43210
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

