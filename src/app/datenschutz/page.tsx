import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | TripleSystems',
  description: 'Privacy Policy of TripleSystems - Information about how we handle your data.',
};

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-dark-950 pt-24 pb-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-accent-400 transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to homepage
          </Link>

          <h1 className="heading-1 text-gray-100 mb-8">Privacy Policy</h1>

          <div className="prose prose-invert prose-gray max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="heading-3 text-gray-100 mb-4">1. Privacy at a Glance</h2>
              <h3 className="text-lg font-semibold text-gray-200 mb-2">General Information</h3>
              <p className="text-gray-400">
                The following information provides a simple overview of what happens to your
                personal data when you visit this website. Personal data is any data with which
                you can be personally identified. Detailed information on the subject of data
                protection can be found in our privacy policy listed below this text.
              </p>
            </section>

            {/* Data Controller */}
            <section>
              <h2 className="heading-3 text-gray-100 mb-4">2. Data Controller</h2>
              <div className="text-gray-400 space-y-1">
                <p>Deniz Granito</p>
                <p>TripleSystems</p>
                <p>Theresienstr. 18</p>
                <p>87629 Füssen</p>
                <p>Germany</p>
                <p className="mt-4">Email: tripleaiagents@gmail.com</p>
              </div>
              <p className="text-gray-400 mt-4">
                The data controller is the natural or legal person who alone or jointly with
                others decides on the purposes and means of processing personal data.
              </p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="heading-3 text-gray-100 mb-4">3. Data Collection on this Website</h2>

              <h3 className="text-lg font-semibold text-gray-200 mb-2 mt-6">Local Storage</h3>
              <p className="text-gray-400">
                We use the browser&apos;s local storage (localStorage) to store your cookie consent
                decision. This storage is technically necessary to remember your preference and
                is not used for tracking or marketing purposes.
              </p>

              <h3 className="text-lg font-semibold text-gray-200 mb-2 mt-6">Contact Form</h3>
              <p className="text-gray-400">
                If you send us inquiries via the contact form, your information from the inquiry
                form, including the contact details you provided there, will be stored by us for
                the purpose of processing the inquiry and in case of follow-up questions. We do
                not share this data without your consent.
              </p>
              <p className="text-gray-400 mt-4">
                The processing of this data is based on Art. 6 para. 1 lit. b GDPR, if your
                inquiry is related to the fulfillment of a contract or is necessary for the
                implementation of pre-contractual measures. In all other cases, the processing
                is based on our legitimate interest in the effective processing of inquiries
                addressed to us (Art. 6 para. 1 lit. f GDPR) or on your consent (Art. 6 para.
                1 lit. a GDPR).
              </p>
              <p className="text-gray-400 mt-4">
                When you submit the contact form, your data is transmitted via a webhook to
                our self-hosted n8n automation platform for the purpose of processing your
                inquiry. The n8n instance is hosted on servers provided by Hostinger International
                Ltd. (Kaunas, Lithuania). Hostinger acts as a sub-processor on our behalf. The
                processing is based on Art. 6 para. 1 lit. b GDPR (pre-contractual measures)
                and Art. 6 para. 1 lit. f GDPR (legitimate interest in efficient inquiry
                processing).
              </p>
              <p className="text-gray-400 mt-4">
                The data you enter in the contact form will remain with us until you request us
                to delete it, revoke your consent to storage, or the purpose for data storage
                no longer applies. Mandatory statutory provisions – in particular retention
                periods – remain unaffected.
              </p>

              <h3 className="text-lg font-semibold text-gray-200 mb-2 mt-6">Server Log Files</h3>
              <p className="text-gray-400">
                The provider of the pages automatically collects and stores information in
                so-called server log files, which your browser automatically transmits to us.
                These are:
              </p>
              <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                <li>Browser type and browser version</li>
                <li>Operating system used</li>
                <li>Referrer URL</li>
                <li>Hostname of the accessing computer</li>
                <li>Time of the server request</li>
                <li>IP address</li>
              </ul>
              <p className="text-gray-400 mt-4">
                This data is not merged with other data sources. The collection of this data
                is based on Art. 6 para. 1 lit. f GDPR. The website operator has a legitimate
                interest in the technically error-free presentation and optimization of their
                website – for this purpose, the server log files must be collected.
              </p>
            </section>

            {/* External Services */}
            <section>
              <h2 className="heading-3 text-gray-100 mb-4">4. External Services and Third Parties</h2>

              <h3 className="text-lg font-semibold text-gray-200 mb-2 mt-6">Hosting</h3>
              <p className="text-gray-400">
                This website is hosted by Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789,
                USA). When you visit our website, your personal data (e.g. IP addresses, browser
                information) is processed on Vercel&apos;s servers. Vercel may transfer data to
                servers in the USA. We have entered into a data processing agreement with Vercel.
                The use of Vercel is based on Art. 6 para. 1 lit. f GDPR (legitimate interest
                in a reliable and fast website delivery).
              </p>
              <p className="text-gray-400 mt-4">
                For data transfers to the USA, Vercel relies on EU Standard Contractual Clauses
                to ensure an adequate level of data protection.
              </p>

              <h3 className="text-lg font-semibold text-gray-200 mb-2 mt-6">Supabase (Database)</h3>
              <p className="text-gray-400">
                Contact form submissions are stored in a database provided by Supabase Inc.
                (970 Toa Payoh North #07-04, Singapore 318992). Supabase acts as a sub-processor
                on our behalf. The data stored includes the information you provide in the contact
                form (name, email, company, role, need, description). Supabase may process data
                on servers in the USA. We rely on EU Standard Contractual Clauses to ensure an
                adequate level of data protection. The processing is based on Art. 6 para. 1 lit. b
                GDPR (pre-contractual measures) and Art. 6 para. 1 lit. f GDPR (legitimate interest
                in efficient inquiry management).
              </p>

              <h3 className="text-lg font-semibold text-gray-200 mb-2 mt-6">Google Gmail (Email Notifications)</h3>
              <p className="text-gray-400">
                When you submit the contact form, an email notification containing your inquiry
                data is sent via Google Gmail (Google Ireland Limited, Gordon House, Barrow Street,
                Dublin 4, Ireland). Google acts as a sub-processor for email delivery. Google may
                transfer data to servers in the USA. We rely on EU Standard Contractual Clauses
                to ensure an adequate level of data protection. The processing is based on Art. 6
                para. 1 lit. f GDPR (legitimate interest in timely processing of inquiries).
              </p>

              <h3 className="text-lg font-semibold text-gray-200 mb-2 mt-6">Social Media Links</h3>
              <p className="text-gray-400">
                Our website contains links to our social media profiles (X/Twitter, LinkedIn,
                GitHub). These are simple links – no data is transmitted to these platforms
                unless you click on the links. Only when you click on a link and visit the
                respective platform do their privacy policies apply.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="heading-3 text-gray-100 mb-4">5. Your Rights</h2>
              <p className="text-gray-400">
                You have the right at any time to receive free information about the origin,
                recipient, and purpose of your stored personal data. You also have the right
                to request the correction or deletion of this data. If you have given consent
                to data processing, you can revoke this consent at any time for the future.
                You also have the right, under certain circumstances, to request the restriction
                of the processing of your personal data.
              </p>

              <h3 className="text-lg font-semibold text-gray-200 mb-2 mt-6">Right to Information</h3>
              <p className="text-gray-400">
                You have the right to request confirmation as to whether relevant data is being
                processed and to receive information about this data as well as further
                information and a copy of the data in accordance with legal requirements.
              </p>

              <h3 className="text-lg font-semibold text-gray-200 mb-2 mt-6">Right to Rectification</h3>
              <p className="text-gray-400">
                You have the right to request the completion of data concerning you or the
                correction of inaccurate data concerning you.
              </p>

              <h3 className="text-lg font-semibold text-gray-200 mb-2 mt-6">
                Right to Erasure (&ldquo;Right to be Forgotten&rdquo;)
              </h3>
              <p className="text-gray-400">
                You have the right to request that relevant data be deleted immediately, and we
                are obligated to delete personal data immediately, provided the corresponding
                requirements are met.
              </p>

              <h3 className="text-lg font-semibold text-gray-200 mb-2 mt-6">
                Right to Restriction of Processing
              </h3>
              <p className="text-gray-400">
                You have the right to request the restriction of processing of data concerning
                you.
              </p>

              <h3 className="text-lg font-semibold text-gray-200 mb-2 mt-6">Right to Data Portability</h3>
              <p className="text-gray-400">
                You have the right to receive the data concerning you, which you have provided
                to us, in a structured, commonly used and machine-readable format.
              </p>

              <h3 className="text-lg font-semibold text-gray-200 mb-2 mt-6">Right to Object (Art. 21 GDPR)</h3>
              <p className="text-gray-400">
                If your personal data is processed on the basis of legitimate interests pursuant
                to Art. 6 para. 1 lit. f GDPR, you have the right to object to the processing of
                your personal data at any time pursuant to Art. 21 GDPR, provided there are grounds
                relating to your particular situation. We will then no longer process the personal
                data unless we can demonstrate compelling legitimate grounds for the processing
                which override your interests, rights and freedoms, or the processing serves the
                establishment, exercise or defence of legal claims.
              </p>

              <h3 className="text-lg font-semibold text-gray-200 mb-2 mt-6">Right to Lodge a Complaint with a Supervisory Authority</h3>
              <p className="text-gray-400">
                You have the right to lodge a complaint with a supervisory authority if you
                believe that the processing of personal data concerning you violates the GDPR.
              </p>
            </section>

            {/* SSL/TLS */}
            <section>
              <h2 className="heading-3 text-gray-100 mb-4">6. SSL/TLS Encryption</h2>
              <p className="text-gray-400">
                This site uses SSL or TLS encryption for security reasons and to protect the
                transmission of confidential content, such as requests you send to us as the
                site operator. You can recognize an encrypted connection by the fact that the
                address line of the browser changes from &ldquo;http://&rdquo; to &ldquo;https://&rdquo; and by the
                lock symbol in your browser line.
              </p>
            </section>

            {/* Updates */}
            <section>
              <h2 className="heading-3 text-gray-100 mb-4">7. Updates to this Privacy Policy</h2>
              <p className="text-gray-400">
                This privacy policy is currently valid as of: February 2026.
              </p>
              <p className="text-gray-400 mt-4">
                Due to the further development of our website or due to changed legal or
                regulatory requirements, it may be necessary to change this privacy policy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
