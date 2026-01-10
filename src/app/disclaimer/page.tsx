import { Metadata } from 'next';
import PageHeader from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Legal disclaimer for SKS Law Associates website - Important information about our legal services.',
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHeader
        title="Disclaimer"
        subtitle="Important legal disclaimers regarding our website and services."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose-legal">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
              <h3 className="text-amber-800 font-semibold mb-2">Important Notice</h3>
              <p className="text-amber-700 text-sm mb-0">
                As per the rules of the Bar Council of India, advocates are prohibited from soliciting work or advertising. This website is meant solely for the purpose of information and not for advertising or soliciting clients.
              </p>
            </div>

            <h2>1. General Disclaimer</h2>
            <p>
              The information contained in this website is provided for general informational purposes only and should not be construed as legal advice on any matter. The transmission and receipt of information contained on this website does not form or constitute an attorney-client relationship.
            </p>

            <h2>2. No Legal Advice</h2>
            <p>
              This website is not intended to be a source of legal advice. The content of this website contains general information and may not reflect current legal developments, verdicts, or settlements. The information contained herein should not be used as a substitute for competent legal advice from a licensed attorney.
            </p>

            <h2>3. No Attorney-Client Relationship</h2>
            <p>
              Viewing this website or contacting SKS Law Associates through this website does not create an attorney-client relationship. An attorney-client relationship can only be created through a formal written agreement between you and our firm.
            </p>

            <h2>4. Confidentiality</h2>
            <p>
              Information sent to SKS Law Associates via email or through the website&apos;s contact form is not secure and is done on a non-confidential basis. Do not send confidential or sensitive information until an attorney-client relationship has been established.
            </p>

            <h2>5. Bar Council of India Rules</h2>
            <p>
              This website strictly adheres to the Bar Council of India Rules. The content of this website is not intended to constitute solicitation or advertisement. The website is for information purposes only and is intended to provide general information about SKS Law Associates and its practice areas.
            </p>

            <h2>6. Prior Case Results</h2>
            <p>
              Any case results or outcomes mentioned on this website represent the results obtained for specific clients. Each legal matter is different, and the outcome depends on the facts of each case. Past results do not guarantee a similar outcome in future cases.
            </p>

            <h2>7. Accuracy of Information</h2>
            <p>
              While we strive to keep the information on this website accurate and up-to-date, we make no warranties or representations as to the accuracy, completeness, or timeliness of any information contained herein. Laws change frequently, and this website may not reflect the most current legal developments.
            </p>

            <h2>8. External Links</h2>
            <p>
              Links to external websites are provided for convenience and informational purposes only. SKS Law Associates does not endorse the content of any linked websites and is not responsible for the accuracy or content of external sites.
            </p>

            <h2>9. Use at Your Own Risk</h2>
            <p>
              Your use of this website is at your own risk. SKS Law Associates is not responsible for any damages or losses arising from your use of or inability to use this website.
            </p>

            <h2>10. Jurisdiction</h2>
            <p>
              SKS Law Associates is licensed to practice law in India. The information on this website is intended for residents of India only and should not be construed as legal advice for any other jurisdiction.
            </p>

            <h2>Contact</h2>
            <p>
              If you have any questions regarding this disclaimer, please contact us at sk.saravanan@yahoo.com.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

