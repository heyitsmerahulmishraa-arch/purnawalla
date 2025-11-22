import React from "react";

const Topbar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white text-center py-3 sm:py-4 px-4 font-semibold text-xs sm:text-sm md:text-base shadow-md overflow-hidden relative">
      <div className="animate-pulse flex items-center justify-center gap-2">
        <span className="text-lg sm:text-xl">🛒</span>
        <span className="inline-block">Limited Time Offer! Enjoy</span>
        <span className="bg-white text-red-600 px-2 py-0.5 rounded-md font-bold text-sm sm:text-base">
          49% OFF
        </span>
        <span className="inline-block">on All Food Products Today Only!</span>
      </div>
      {/* Animated shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
    </div>
  );
};

export default Topbar;
