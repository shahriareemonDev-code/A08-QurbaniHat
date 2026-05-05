"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useSpring, animated } from "@react-spring/web";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const spin = useSpring({
    loop: true,
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
    config: { duration: 800 },
  });

  const goToAllAnimals = () => {
    setLoading(true);
    router.push("/all-animals");
  };
  useEffect(() => {
    setLoading(false);
  }, [pathname]);

  const isActive = (path) => pathname === path;

  const handleLogOut = async () => {
    await authClient.signOut();
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <animated.div
            style={spin}
            className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full"
          />
        </div>
      )}

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
          <Link
            href="/"
            className={isActive("/") ? "text-green-600 font-semibold" : ""}
          >
            Home
          </Link>

          <button
            onClick={goToAllAnimals}
            className={
              isActive("/all-animals") ? "text-green-600 font-semibold cursor-pointer" : ""
            }
          >
            All Animals
          </button>

          <Link
            href="/profile"
            className={
              isActive("/profile") ? "text-green-600 font-semibold" : ""
            }
          >
            Profile
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {!user && (
            <div className="flex gap-3 items-center">
              <Link
                href="/login"
                className="bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700"
              >
                Register
              </Link>
            </div>
          )}

          {user && (
            <div className="flex items-center gap-3">
              <Avatar>
                <Avatar.Image src={user?.image} referrerPolicy="no-referrer" />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
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

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>

        {open && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col gap-4 p-4 md:hidden z-50">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={isActive("/") ? "text-green-600 font-semibold" : ""}
            >
              Home
            </Link>

            <button
              onClick={() => {
                setOpen(false);
                goToAllAnimals();
              }}
              className={
                isActive("/all-animals") ? "text-green-600 font-semibold" : ""
              }
            >
              All Animals
            </button>

            <Link
              href="/profile"
              onClick={() => setOpen(false)}
              className={
                isActive("/profile") ? "text-green-600 font-semibold" : ""
              }
            >
              Profile
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
                <span>{user?.name}</span>

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
    </>
  );
};

export default Navbar;
