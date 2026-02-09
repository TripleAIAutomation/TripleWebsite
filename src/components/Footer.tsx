import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-gray-800/50">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Image
                src="/LOGO.png"
                alt="TripleSystems Logo"
                width={32}
                height={32}
                className="drop-shadow-[0_0_8px_rgba(245,158,11,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(245,158,11,0.5)] transition-all"
              />
              <span className="font-semibold text-xl text-gray-100">TripleSystems</span>
            </Link>
            <p className="text-gray-500 max-w-sm">
              The unified business platform. Financial intelligence, AI-powered CRM,
              and workflow automation — all in one place.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-gray-100 font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-500 hover:text-accent-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#product" className="text-gray-500 hover:text-accent-400 transition-colors">
                  Product
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-500 hover:text-accent-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-500 hover:text-accent-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-gray-100 font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://x.com/TripleAutomate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-accent-400 transition-colors"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/deniz-g-989a543a1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-accent-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/TripleAIAutomation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-accent-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} TripleSystems. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/impressum" className="text-gray-600 hover:text-accent-400 transition-colors">
              Imprint
            </Link>
            <Link href="/datenschutz" className="text-gray-600 hover:text-accent-400 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
