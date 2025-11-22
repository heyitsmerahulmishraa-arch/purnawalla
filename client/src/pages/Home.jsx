import React from "react";
import MainBanner from "../components/MainBanner";
import ProductCard from "../components/ProductCard";
import Top4Product from "../components/Top4Product";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [showcasedProducts, setShowcasedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShowcasedProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/products/showcased"
        );
        const products = response.data;
        setShowcasedProducts(products);
        console.log("Fetched showcased products:", products);
      } catch (error) {
        console.error("Error fetching showcased products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchShowcasedProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MainBanner />

      {/* Featured Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of premium products
          </p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"></div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-200 rounded-2xl h-96 w-full"></div>
              </div>
            ))}
          </div>
        ) : showcasedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {showcasedProducts.map((product) => (
              <ProductCard
                key={product._id}
                title={product.title}
                discountPrice={product.discountPrice}
                price={product.price}
                image={product.images[0].url}
                productId={product._id}
                isInCart={product.isInCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </div>
            <p className="text-xl text-gray-600 font-medium">
              No showcased products available.
            </p>
            <p className="text-gray-500 mt-2">
              Check back soon for new arrivals!
            </p>
          </div>
        )}
      </div>
      {/* <Top4Product /> */}
    </div>
  );
};

export default Home;
