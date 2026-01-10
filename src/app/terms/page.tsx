import { Metadata } from 'next';
import PageHeader from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for SKS Law Associates website and legal services.',
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our website or services."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose-legal">
            <p className="text-neutral-600 mb-8">
              <strong>Last Updated:</strong> December 2024
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the SKS Law Associates website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
            </p>

            <h2>2. Legal Information Disclaimer</h2>
            <p>
              The information provided on this website is for general informational purposes only and should not be considered as legal advice. Every legal matter is unique, and you should consult with a qualified attorney for advice specific to your situation.
            </p>

            <h2>3. No Attorney-Client Relationship</h2>
            <p>
              Visiting this website or submitting a contact form does not create an attorney-client relationship. Such a relationship is only established through a formal written engagement agreement signed by both parties.
            </p>

            <h2>4. Confidentiality</h2>
            <p>
              Until an attorney-client relationship is established, any information you send us may not be treated as confidential. Please do not send sensitive information through the contact form.
            </p>

            <h2>5. Use of Website</h2>
            <p>You agree to use this website only for lawful purposes and in a manner that does not:</p>
            <ul>
              <li>Infringe the rights of others</li>
              <li>Restrict or inhibit anyone else&apos;s use of the website</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Transmit harmful code or malware</li>
            </ul>

            <h2>6. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property of SKS Law Associates and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our written permission.
            </p>

            <h2>7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. These links are provided for convenience only, and we do not endorse or assume responsibility for the content of external sites.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, SKS Law Associates shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes indicates your acceptance of the new terms.
            </p>

            <h2>11. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
            </p>
            <p>
              <strong>SKS Law Associates</strong><br />
              Email: sk.saravanan@yahoo.com<br />
              Phone: +91 86829 46765
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

