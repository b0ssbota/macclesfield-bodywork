import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function CookiePolicy() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-electric/5 to-purple/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link to="/" className="hover:text-electric transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gray-700 font-medium">Cookie Policy</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-gray-500">Last updated: January 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <div className="space-y-10 text-gray-600 leading-relaxed text-sm">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site. Cookies allow us to recognise your device and store some information about your preferences or past actions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">How We Use Cookies</h2>
              <p>Macclesfield Body Work uses cookies for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly. They enable core features such as page navigation and access to secure areas. The website cannot function correctly without these cookies.</li>
                <li><strong>Analytics Cookies:</strong> We use analytics cookies to understand how visitors interact with our website. This helps us improve the site's functionality and user experience. These cookies collect information anonymously.</li>
                <li><strong>Functional Cookies:</strong> These cookies allow our website to remember choices you make (such as your preferred language or the region you are in) and provide enhanced, more personalised features.</li>
                <li><strong>Marketing Cookies:</strong> These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant adverts on other sites.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg text-left text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 font-semibold text-gray-900 border-b">Cookie Name</th>
                      <th className="px-4 py-3 font-semibold text-gray-900 border-b">Purpose</th>
                      <th className="px-4 py-3 font-semibold text-gray-900 border-b">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3">_ga</td>
                      <td className="px-4 py-3">Google Analytics — distinguishes unique users</td>
                      <td className="px-4 py-3">2 years</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">_gid</td>
                      <td className="px-4 py-3">Google Analytics — distinguishes unique users</td>
                      <td className="px-4 py-3">24 hours</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">cookie_consent</td>
                      <td className="px-4 py-3">Stores your cookie consent preference</td>
                      <td className="px-4 py-3">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Third-Party Cookies</h2>
              <p>
                In some cases, we use cookies provided by trusted third parties. The following section details which third-party cookies you might encounter through this site:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>Google Analytics is used to help us understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit.</li>
                <li>Google Maps may set cookies when the embedded map on our contact page is loaded.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Managing Cookies</h2>
              <p>
                You can control and manage cookies in various ways. Most browsers allow you to refuse or accept cookies, delete cookies, and set preferences. You can manage your cookie settings through your browser:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>Chrome: Settings &gt; Privacy and Security &gt; Cookies</li>
                <li>Firefox: Options &gt; Privacy &amp; Security</li>
                <li>Safari: Preferences &gt; Privacy</li>
                <li>Edge: Settings &gt; Cookies and Site Permissions</li>
              </ul>
              <p className="mt-3">
                Please note that disabling cookies may affect the functionality of this and many other websites that you visit.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at{' '}
                <a href="mailto:cars@maccgarage.com" className="text-electric hover:underline">
                  cars@maccgarage.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
