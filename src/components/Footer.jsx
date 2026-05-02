import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
         <footer className="bg-white shadow-inner mt-10">
            <div className="max-w-7xl mx-auto px-6 py-8">

                
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    
                    <div className="text-center md:text-left">
                        <h2 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            QurbaniHat
                        </h2>
                        <p className="text-gray-500 text-sm mt-1">
                            Trusted platform for buying qurbani animals
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-6 text-sm font-medium">
                        <Link href="/" className="hover:text-green-600 transition">
                            Home
                        </Link>
                        <Link href="/animals" className="hover:text-yellow-600 transition">
                            Animals
                        </Link>
                        <Link href="/about" className="hover:text-red-600 transition">
                            About Us
                        </Link>
                        <Link href="/contact" className="hover:text-orange-600 transition">
                            Contact info
                        </Link>
                    </div>

                    {/* Social */}
                    <div className="flex gap-4">

                        <span className="text-gray-400 hover:text-green-500 cursor-pointer"></span>
                        <span className="text-gray-400 hover:text-yellow-500 cursor-pointer"></span>
                        <span className="text-gray-400 hover:text-red-500 cursor-pointer"></span>
                    </div>

                </div>

                
                <div className="border-t mt-6 pt-4 text-center text-sm text-gray-500">
                    ©2026 QurbaniHat. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;