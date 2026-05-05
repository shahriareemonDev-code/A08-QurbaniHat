import Link from "next/link";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Xmark } from "@gravity-ui/icons";

const Footer = () => {
  return (
    <footer className="mt-20">

      {/* 🌌 PREMIUM BACKGROUND */}
      <div className="relative bg-gradient-to-br from-green-100 via-white to-yellow-100 overflow-hidden">

        {/* glow effects */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-green-300 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-300 opacity-20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

          {/* 🔥 GRID */}
          <div className="grid md:grid-cols-3 gap-10">

            {/* LOGO */}
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/images qurbani (3).png"
                  alt="logo"
                  width={50}
                  height={50}
                />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  QurbaniHat
                </h2>
              </div>

              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                Premium Qurbani marketplace with verified farms,
                transparent pricing and doorstep delivery.
              </p>
            </div>

            {/* LINKS */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Explore</h3>

              <ul className="space-y-3 text-sm">
                {[
                  { name: "Home", href: "/" },
                  { name: "All Animals", href: "/all-animals" },
                  { name: "About", href: "/about" },
                  { name: "Contact", href: "/contact" },
                ].map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="group relative inline-block text-gray-600 hover:text-green-600 transition"
                    >
                      {link.name}
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-green-500 to-orange-400 transition-all group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT + SOCIAL */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>

              <p className="text-sm text-gray-600">📍 Bangladesh</p>
              <p className="text-sm text-gray-600">📞 +880 1234-567890</p>
              <p className="text-sm text-gray-600 mb-5">
                ✉️ support@qurbanihat.com
              </p>

              {/* 🔥 PREMIUM SOCIAL ICONS */}
              <div className="flex gap-4">

                {/* Facebook */}
                <div className="group p-[2px] rounded-full bg-gradient-to-r from-green-500 to-orange-400 hover:scale-110 transition">
                  <div className="bg-white rounded-full p-3 group-hover:bg-transparent transition">
                    <FaFacebookF className="text-green-600 group-hover:text-white text-lg" />
                  </div>
                </div>

                {/* Instagram */}
                <div className="group p-[2px] rounded-full bg-gradient-to-r from-orange-400 to-pink-500 hover:scale-110 transition">
                  <div className="bg-white rounded-full p-3 group-hover:bg-transparent transition">
                    <BsInstagram className="text-orange-500 group-hover:text-white text-lg" />
                  </div>
                </div>

                {/* X */}
                <div className="group p-[2px] rounded-full bg-gradient-to-r from-gray-700 to-black hover:scale-110 transition">
                  <div className="bg-white rounded-full p-3 group-hover:bg-transparent transition">
                    <Xmark className="text-gray-800 group-hover:text-white text-lg" />
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-gray-200 my-10"></div>

          {/* BOTTOM */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-3">

            <p className="text-gray-500">
              © {new Date().getFullYear()} QurbaniHat. All rights reserved.
            </p>

            <p className="text-gray-600">
              Built with{" "}
              <span className="font-semibold bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
                Shariare Emon
              </span>
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;