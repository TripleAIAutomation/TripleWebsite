import Link from 'next/link';

export const metadata = {
  title: 'Imprint | TripleSystems',
  description: 'Imprint and legal information from TripleSystems.',
};

export default function Impressum() {
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

          <h1 className="heading-1 text-gray-100 mb-8">Imprint</h1>

          <div className="prose prose-invert prose-gray max-w-none space-y-8">
            {/* Information according to § 5 TMG */}
            <section>
              <h2 className="heading-3 text-gray-100 mb-4">Information according to § 5 DDG</h2>
              <div className="text-gray-400 space-y-1">
                <p>Deniz Granito</p>
                <p>TripleSystems</p>
                <p>Theresienstr. 18</p>
                <p>87629 Füssen</p>
                <p>Germany</p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="heading-3 text-gray-100 mb-4">Contact</h2>
              <div className="text-gray-400 space-y-1">
                <p>Email: tripleaiagents@gmail.com</p>
              </div>
            </section>

            {/* Responsible for content */}
            <section>
              <h2 className="heading-3 text-gray-100 mb-4">
                Responsible for content according to § 18 Abs. 2 MStV
              </h2>
              <div className="text-gray-400 space-y-1">
                <p>Deniz Granito</p>
                <p>Theresienstr. 18</p>
                <p>87629 Füssen</p>
              </div>
            </section>

            {/* Dispute resolution */}
            <section>
              <h2 className="heading-3 text-gray-100 mb-4">Dispute Resolution</h2>
              <p className="text-gray-400">
                The European Commission provides a platform for online dispute resolution (OS):{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-400 hover:text-accent-300 transition-colors"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-gray-400 mt-4">
                We are not willing or obligated to participate in dispute resolution proceedings
                before a consumer arbitration board.
              </p>
            </section>

            {/* Liability for content */}
            <section>
              <h2 className="heading-3 text-gray-100 mb-4">Liability for Content</h2>
              <p className="text-gray-400">
                As a service provider, we are responsible for our own content on these pages in
                accordance with general laws pursuant to § 7 para. 1 DDG. According to §§ 8 to 10
                DDG, however, we are not obligated as a service provider to monitor transmitted or
                stored third-party information or to investigate circumstances that indicate
                illegal activity.
              </p>
              <p className="text-gray-400 mt-4">
                Obligations to remove or block the use of information under general laws remain
                unaffected. However, liability in this regard is only possible from the point in
                time at which a concrete infringement of the law becomes known. Upon becoming
                aware of such violations, we will remove this content immediately.
              </p>
            </section>

            {/* Liability for links */}
            <section>
              <h2 className="heading-3 text-gray-100 mb-4">Liability for Links</h2>
              <p className="text-gray-400">
                Our offer contains links to external websites of third parties, on whose contents
                we have no influence. Therefore, we cannot assume any liability for these external
                contents. The respective provider or operator of the pages is always responsible
                for the contents of the linked pages. The linked pages were checked for possible
                legal violations at the time of linking. Illegal contents were not recognizable
                at the time of linking.
              </p>
              <p className="text-gray-400 mt-4">
                However, a permanent control of the contents of the linked pages is not reasonable
                without concrete evidence of a violation of the law. Upon becoming aware of legal
                violations, we will remove such links immediately.
              </p>
            </section>

            {/* Copyright */}
            <section>
              <h2 className="heading-3 text-gray-100 mb-4">Copyright</h2>
              <p className="text-gray-400">
                The content and works created by the site operators on these pages are subject to
                German copyright law. The reproduction, editing, distribution and any kind of
                exploitation outside the limits of copyright require the written consent of the
                respective author or creator. Downloads and copies of this site are only permitted
                for private, non-commercial use.
              </p>
              <p className="text-gray-400 mt-4">
                Insofar as the content on this site was not created by the operator, the copyrights
                of third parties are respected. In particular, third-party content is identified
                as such. Should you nevertheless become aware of a copyright infringement, please
                inform us accordingly. Upon becoming aware of legal violations, we will remove
                such content immediately.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
