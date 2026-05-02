'use client';

import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm px-6 md:px-12 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
         <div className="flex items-center gap-3">
                <Image
                    src="/images qurbani (3).png"
                    alt="logo"
                    width={50}
                    height={50}
                />
            </div>
        <span className="text-xl font-semibold text-gray-800">
          QurbaniHat
        </span>
      </div>

      
      <div className="hidden md:flex gap-8 text-gray-700 font-medium">
        <Link href="/" className="text-green-600">
          Home
        </Link>
        <Link href="/animals">
          All Animals
        </Link>
      </div>

     
      <div className="flex items-center gap-4">
        <Link href="/login" className="text-gray-700">
          Login
        </Link>

        <Link
          href="/register"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;