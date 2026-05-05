"use client";

import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";

const Banner = () => {

  const textAnim = useSpring({
    from: {
      opacity: 0,
      transform: "translateX(-15px)",
    },
    to: async (next) => {
      while (true) {
        await next({ opacity: 1, transform: "translateX(0px)" });
        await next({ transform: "translateX(5px)" });
        await next({ transform: "translateX(0px)" });
      }
    },
    config: { tension: 60, friction: 25 },
  });

  const imageAnim = useSpring({
    from: { opacity: 0, transform: "scale(0.95)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 80, friction: 20 },
  });

  const statsAnim = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(10px)",
    },
    to: async (next) => {
      while (true) {
        await next({ opacity: 1, transform: "translateY(0px)" });
        await next({ transform: "translateY(-3px)" });
        await next({ transform: "translateY(0px)" });
      }
    },
    config: { tension: 50, friction: 20 },
  });

  return (
    <section className="bg-gradient-to-r from-green-50 via-yellow-50 to-green-50 px-6 md:px-12 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">

      <div className="text-center">

        <animated.h1
          style={textAnim}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Qurbani made <br />
          <span className="bg-gradient-to-r from-green-600 via-yellow-500 to-green-600 bg-clip-text text-transparent">
            simple
          </span>{" "}
          & trusted.
        </animated.h1>
        <p className="mt-6 px-2 text-gray-600"
        >
          Browse healthy, ethically-raised cows and goats from verified Bangladeshi farms.
          <br /> Transparent pricing. Doorstep delivery.
        </p>

        <animated.div
          style={statsAnim}
          className="flex justify-center gap-10 mt-10"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
              500+
            </h2>
            <p className="text-sm text-gray-500">Animals</p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              64
            </h2>
            <p className="text-sm text-gray-500">Districts</p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent">
              100%
            </h2>
            <p className="text-sm text-gray-500">Verified</p>
          </div>
        </animated.div>
      </div>

      <animated.div
        style={imageAnim}
        className="relative w-full h-[400px] md:h-[500px]"
      >
        <Image
          src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9"
          alt="Qurbani cow"
          fill
          className="object-cover rounded-2xl shadow-xl"
        />
      </animated.div>

    </section>
  );
};

export default Banner;