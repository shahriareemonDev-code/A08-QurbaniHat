'use client';

import Lottie from "lottie-react";
import animationData from "@/public/animation.json";

const MyLottie = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-40">
        <Lottie animationData={animationData} loop />
      </div>
    </div>
  );
};

export default MyLottie;