import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-electric/5 to-purple/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link to="/" className="hover:text-electric transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gray-700 font-medium">Privacy Policy</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: January 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-gray-600 leading-relaxed text-sm">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Introduction</h2>
              <p>
                Macclesfield Body Work ("we", "our", "us") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal data when you visit our website or use our services. We are the bodywork division of Macclesfield Car Sales and operate in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
              <p>We may collect the following types of personal information:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li><strong>Contact Information:</strong> Name, email address, phone number, and postal address.</li>
                <li><strong>Vehicle Information:</strong> Vehicle make, model, registration number, and details of damage or repair required.</li>
                <li><strong>Images:</strong> Photographs of vehicle damage that you upload via our quote form.</li>
                <li><strong>Communication Data:</strong> Records of correspondence if you contact us by email, phone, or through our website.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, operating system, and other technology identifiers on the devices you use to access our website.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited, time spent, and navigation paths.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">How We Use Your Information</h2>
              <p>We use your personal data for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>To provide you with quotes and carry out vehicle repairs</li>
                <li>To communicate with you about your repair or enquiry</li>
                <li>To process insurance claims on your behalf</li>
                <li>To improve our website and services</li>
                <li>To comply with legal and regulatory obligations</li>
                <li>To send you marketing communications (only with your consent)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Legal Basis for Processing</h2>
              <p>We process your personal data on the following legal grounds:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li><strong>Contractual Necessity:</strong> To perform a contract with you or take steps at your request prior to entering a contract (e.g., providing a repair quote).</li>
                <li><strong>Legitimate Interests:</strong> To operate and improve our business, provided this does not override your rights.</li>
                <li><strong>Consent:</strong> Where you have given us explicit consent, such as for marketing emails.</li>
                <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Data Sharing</h2>
              <p>We may share your personal data with:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li><strong>Insurance Companies:</strong> Where we are processing a claim on your behalf.</li>
                <li><strong>Macclesfield Car Sales:</strong> Our parent company, for business administration purposes.</li>
                <li><strong>Service Providers:</strong> Trusted third parties who assist us in operating our website and business (e.g., hosting, analytics).</li>
                <li><strong>Legal Authorities:</strong> Where required by law or to protect our legal rights.</li>
              </ul>
              <p className="mt-3">We will never sell your personal data to third parties.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Data Retention</h2>
              <p>
                We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Repair records are typically retained for 6 years. Marketing data is retained until you withdraw your consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Your Rights</h2>
              <p>Under the UK GDPR, you have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li><strong>Right of Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data where there is no compelling reason for its continued processing.</li>
                <li><strong>Right to Restrict Processing:</strong> Request that we limit how we use your data.</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another organisation.</li>
                <li><strong>Right to Object:</strong> Object to the processing of your data, including direct marketing.</li>
                <li><strong>Right to Withdraw Consent:</strong> Where processing is based on consent, you may withdraw it at any time.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us using the details below.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Data Security</h2>
              <p>
                We take appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. This includes the use of encryption, secure servers, and access controls.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Cookies</h2>
              <p>
                Our website uses cookies to improve your experience. For full details on the cookies we use and how to manage them, please see our{' '}
                <Link to="/cookie-policy" className="text-electric hover:underline">Cookie Policy</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this page periodically.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us:
              </p>
              <ul className="mt-3 space-y-1">
                <li><strong>Email:</strong> <a href="mailto:cars@maccgarage.com" className="text-electric hover:underline">cars@maccgarage.com</a></li>
                <li><strong>Phone:</strong> 07307 353 951</li>
                <li><strong>Address:</strong> Unit 4, Melville Road, Macclesfield, SK10 2BN</li>
              </ul>
              <p className="mt-3">
                You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at{' '}
                <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-electric hover:underline">ico.org.uk</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
