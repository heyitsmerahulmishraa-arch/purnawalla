import React, { useState } from "react";
import { allProductsList } from "../assets/assets";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useEffect } from "react";
import { FaFilter, FaSearch, FaTimes } from "react-icons/fa";

const AllProducts = () => {
  const [filterProducts, setFilterProducts] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  let filter_value = "";
  function handleFilter(e) {
    console.log(filter[0][e.target.value]);
    const isChecked = filter[0][e.target.value].checked;
    console.log(isChecked);
    if (!isChecked) {
      filter[0][e.target.value].checked = true;
      setFilterProducts(e.target.value);
      console.log(filter[0][e.target.value]);
    } else {
      filter[0][e.target.value].checked = false;
      console.log(filter[0][e.target.value]);
    }
  }

  let filter1 = [
    { value: "all", label: "All Products" },
    { value: "garamMasala", label: "Garam Masala" },
    { value: "sabutSasala", label: "Sabut Masala" },
    { value: "powderMasala", label: "Powder Masala" },
    { value: "paneerMasala", label: "Paneer Masala" },
    { value: "maggieMasala", label: "Maggie Masala" },
    { value: "nudalsMasala", label: "Noodles Masala" },
  ];

  let filter = [
    {
      all: { value: "all", checked: false },
      garamMasala: { value: "garam masala", checked: false },
      sabutSasala: { value: "sabut sasala", checked: false },
      powderMasala: { value: "powder masala", checked: false },
      paneerMasala: { value: "paneer masala", checked: false },
      maggieMasala: { value: "maggie masala", checked: false },
      nudalsMasala: { value: "nudals masala", checked: false },
    },
  ];

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilterSidebar, setShowFilterSidebar] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        const products = response.data;
        setProducts(products);
        console.log("Fetched products:", products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            All Products
          </h1>
          <p className="text-gray-600">
            Discover our complete collection of premium food products
          </p>
        </div>

        <div className="flex gap-6 flex-col lg:flex-row relative">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilterSidebar(!showFilterSidebar)}
            className="lg:hidden flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold shadow-md transition-all"
          >
            <FaFilter />
            <span>Filters</span>
          </button>

          {/* Sidebar Filter - Mobile Overlay */}
          {showFilterSidebar && (
            <div
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
              onClick={() => setShowFilterSidebar(false)}
            >
              <div
                className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                    <button
                      onClick={() => setShowFilterSidebar(false)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-all"
                    >
                      <FaTimes className="text-xl text-gray-600" />
                    </button>
                  </div>

                  {/* Search Product */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Search Products
                    </label>
                    <div className="relative">
                      <input
                        onChange={(e) => setSearchQuery(e.target.value)}
                        value={searchQuery}
                        type="text"
                        placeholder="Search Product..."
                        className="w-full py-3 pl-11 pr-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all"
                      />
                      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>

                  {/* Categories */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Categories
                    </h3>
                    <div className="flex flex-col gap-3">
                      {filter1.map((item, index) => (
                        <label
                          key={index}
                          className="flex items-center gap-3 p-3 hover:bg-blue-50 rounded-lg cursor-pointer transition-all group"
                        >
                          <input
                            onChange={handleFilter}
                            type="checkbox"
                            value={item.value}
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                          />
                          <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                            {item.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sidebar Filter - Desktop */}
          <div className="hidden lg:block w-80 shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-24">
              {/* Search Product */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Search Products
                </label>
                <div className="relative">
                  <input
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery}
                    type="text"
                    placeholder="Search Product..."
                    className="w-full py-3 pl-11 pr-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all"
                  />
                  <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Categories
                </h3>
                <div className="flex flex-col gap-3">
                  {filter1.map((item, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-3 p-3 hover:bg-blue-50 rounded-lg cursor-pointer transition-all group"
                    >
                      <input
                        onChange={handleFilter}
                        type="checkbox"
                        value={item.value}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                      />
                      <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                        {item.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filter Summary */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="font-medium">Total Products:</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                    {products.length}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Products Container */}
          <div className="flex-1">
            {/* Category Title & Sort */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 capitalize">
                {filterProducts === "all" ? "All" : filterProducts} Products
                <span className="text-base font-normal text-gray-500 ml-2">
                  ({products.length} items)
                </span>
              </h2>
              <select className="px-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none bg-white text-gray-700 font-medium">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Best Selling</option>
              </select>
            </div>

            {/* Products Grid */}
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="bg-gray-200 rounded-2xl h-96 w-full"></div>
                  </div>
                ))}
              </div>
            ) : products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
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
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-4">
                  <svg
                    className="w-10 h-10 text-gray-400"
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
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No Products Found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your filters or search query
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllProducts;
