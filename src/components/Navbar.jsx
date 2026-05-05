'use client';

import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const [open, setOpen] = useState(false);

  const handleLogOut = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="relative w-full bg-white shadow-sm px-4 sm:px-6 md:px-12 py-3 md:py-4 flex items-center justify-between">

      <div className="flex items-center gap-2">
        <Image
          src="/images qurbani (3).png"
          alt="logo"
          width={40}
          height={40}
        />

        <h2 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
          QurbaniHat
        </h2>
      </div>

      <div className="hidden md:flex gap-8 text-gray-700 font-medium text-sm sm:text-base">
        <Link href="/" className="text-green-600">
          Home
        </Link>
        <Link href="/all-animals">
          All Animals
        </Link>
        <Link href="/profile">
          Profile
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-4">

        {!user && (
          <div className="flex gap-3 items-center">
            <Link href="/login" className="bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700">
              Login
            </Link>

            <Link href="/register" className="bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700">
              Register
            </Link>
          </div>
        )}

        {user && (
          <div className="flex items-center gap-3">
            <Avatar>
              <Avatar.Image 
              alt=" "
              src={user?.image}
              referrerPolicy='no-referrer' />
              <Avatar.Fallback>
                {user?.name?.charAt(0)}
              </Avatar.Fallback> 
            </Avatar>

            <button
              onClick={handleLogOut}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg"
            >
              Log out
            </button>
          </div>
        )}
      </div>

      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

     
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col gap-4 p-4 md:hidden z-50">

          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href="/all-animals" onClick={() => setOpen(false)}>
            All Animals
          </Link>

          {!user && (
            <>
              <Link href="/login" onClick={() => setOpen(false)}>
                Login
              </Link>

              <Link href="/register" onClick={() => setOpen(false)}>
                Register
              </Link>
            </>
          )}

          {user && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar>
                  <Avatar.Image src={user?.image} />
                  <Avatar.Fallback>
                    {user?.name?.charAt(0)}
                  </Avatar.Fallback>
                </Avatar>

                <span>{user?.name}</span>
              </div>

              <button
                onClick={handleLogOut}
                className="bg-red-500 text-white px-3 py-1.5 rounded-lg"
              >
                Logout
              </button>
            </div>
          )}

        </div>
      )}

    </nav>
  );
};

export default Navbar;