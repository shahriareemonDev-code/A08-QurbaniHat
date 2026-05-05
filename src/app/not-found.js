"use client";

import Link from "next/link";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";

export default function NotFound() {

  // 🐄 floating animal icon animation
  const floatAnim = useSpring({
    from: { transform: "translateY(0px) scale(0.95)", opacity: 0 },
    to: async (next) => {
      await next({ opacity: 1, transform: "translateY(-10px) scale(1)" });

      while (true) {
        await next({ transform: "translateY(-8px) scale(1.02)" });
        await next({ transform: "translateY(0px) scale(1)" });
      }
    },
    config: { tension: 70, friction: 18 },
  });

  // ✨ text animation
  const textAnim = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-50 via-yellow-50 to-green-50 text-center px-6">

      {/* 🐄 ANIMAL ICON */}
      <animated.div style={floatAnim}>
        <Image
          src="https://cdn-icons-png.flaticon.com/512/1998/1998610.png"
          alt="animal not found"
          width={180}
          height={180}
          className="drop-shadow-lg"
        />
      </animated.div>

      {/* TEXT */}
      <animated.div style={textAnim}>
        <h1 className="text-6xl font-bold text-green-600 mt-6">
          404
        </h1>

        <p className="text-2xl font-semibold text-gray-700 mt-2">
          Animal not found 🐄
        </p>

        <p className="text-sm text-gray-500 mt-2">
          Maybe this cow or goat wandered away from our farm listings.
        </p>
      </animated.div>

      {/* BUTTON */}
      <Link
        href="/all-animals"
        className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl transition"
      >
        Browse Animals
      </Link>

    </div>
  );
}