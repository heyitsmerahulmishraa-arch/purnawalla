import React from "react";

const MainBanner = () => {
  return (
    <section className="relative">
      <div className="bannerContianer h-72 sm:h-96 md:h-[500px] lg:h-[600px] w-full overflow-hidden relative">
        <div className="bannerImageContainer w-full h-full relative">
          <img
            src="Winter.webp"
            alt="Winter Collection Banner"
            className="h-full w-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>

          {/* Banner Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                  Winter Collection
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 md:mb-8 drop-shadow-md">
                  Stay warm and stylish with our latest arrivals
                </p>
                <button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
