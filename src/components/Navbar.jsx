'use client';

import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm px-4 sm:px-6 md:px-12 py-3 md:py-4 flex items-center justify-between">
      
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/images qurbani (3).png"
            alt="logo"
            width={40}
            height={40}
            className="sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px]"
          />
        </div>

        <h2 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
          QurbaniHat
        </h2>
      </div>

      {/* Nav Links */}
      <div className="flex gap-4 sm:gap-6 md:gap-8 text-gray-700 font-medium text-sm sm:text-base">
        <Link href="/" className="text-green-600">
          Home
        </Link>
        <Link href="/all-animals">
          All Animals
        </Link>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base">
        <Link href="/login" className="text-gray-700 hidden sm:block">
          Login
        </Link>

        <Link
          href="/register"
          className="bg-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-green-700 transition"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;