'use client';

import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const userData = authClient.useSession()
  const user = userData.data?.user ;
 
  const handleLogOut = async() => {
    await authClient.signOut();
  }
  return (
    <nav className="w-full bg-white shadow-sm px-4 sm:px-6 md:px-12 py-3 md:py-4 flex items-center justify-between">
      
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

      
      <div className="flex gap-4 sm:gap-6 md:gap-8 text-gray-700 font-medium text-sm sm:text-base">
        <Link href="/" className="text-green-600">
          Home
        </Link>
        <Link href="/all-animals">
          All Animals
        </Link>
      </div>

      
      <div className=" sm:gap-3 md:gap-4 text-sm sm:text-base">
       { !user && <ul className='flex gap-3 justify-center items-center'>
          <li>
            <Link href="/login" className="text-white hover:bg-green-700 bg-green-600 px-2 py-1.5 rounded-lg hidden sm:block">
          Login
        </Link>
          </li>
          <li>
            <Link
          href="/register"
          className="bg-green-600 text-white sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-green-700 transition"
        >
          Register
        </Link>
          </li>
        </ul>}

        {
          user && (
            <div className='flex gap-3'> 
                 <Avatar>
        <Avatar.Image 
        alt="" 
        src={user?.image}
        referrerPolicy="no-referrer"
         />
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar>
      <button onClick={handleLogOut} className="bg-red-500 hover:bg-red-600 cursor-pointer text-white font-medium px-2 rounded-lg transition duration-200 shadow-sm">Log out</button>
          </div>
          )
        }
        
      </div>
      
    </nav>
  );
};

export default Navbar;