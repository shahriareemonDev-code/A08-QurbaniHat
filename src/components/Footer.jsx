import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-20 text-gray-700">
      {/* Gradient Background */}
      <div className="bg-gradient-to-r from-green-50 via-green-100 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <Image
                src="/images qurbani (3).png"
                alt="logo"
                width={50}
                height={50}
              />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
                QurbaniHat
              </h2>
              <p className="mt-3 text-sm text-gray-600">
                Trusted online marketplace for Qurbani animals. Healthy
                livestock, transparent pricing, and doorstep delivery.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-green-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/animals" className="hover:text-green-600">
                    All Animals
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-green-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-green-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Contact
              </h3>
              <p className="text-sm">📍 Bangladesh</p>
              <p className="text-sm">📞 +880 1234-567890</p>
              <p className="text-sm">✉️ support@qurbanihat.com</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-green-200 my-6"></div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-600">
              © {new Date().getFullYear()} QurbaniHat. All rights reserved.
            </p>

            <div className="flex gap-4 mt-3 md:mt-0">
              <span className="hover:text-green-600 cursor-pointer">
                Facebook
              </span>
              <span className="hover:text-green-600 cursor-pointer">
                Instagram
              </span>
              <span className="hover:text-green-600 cursor-pointer">
                YouTube
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
