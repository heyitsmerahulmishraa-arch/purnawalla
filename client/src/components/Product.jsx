import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { allProductsList } from "../assets/assets";
import {
  FaStar,
  FaShoppingCart,
  FaBolt,
  FaHeart,
  FaShare,
  FaTruck,
  FaUndo,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { toast } from "react-toastify";

const Product = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [selectedWeight, setSelectedWeight] = useState(null);
  const [selectedPack, setSelectedPack] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const product = allProductsList.find(
    (p) => p.productId === parseInt(productId)
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h2>
          <button
            onClick={() => navigate("/products")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    toast.success("Added to cart successfully!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handleBuyNow = () => {
    toast.info("Proceeding to checkout...", {
      position: "top-right",
      autoClose: 2000,
    });
    setTimeout(() => navigate("/cart"), 1000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: `Check out ${product.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  // Mock images for gallery (using the same thumbnail for demo)
  const productImages = [
    product.thumbnail,
    product.thumbnail,
    product.thumbnail,
    product.thumbnail,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li
              className="hover:text-blue-600 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li>/</li>
            <li
              className="hover:text-blue-600 cursor-pointer"
              onClick={() => navigate("/products")}
            >
              Products
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{product.title}</li>
          </ol>
        </nav>

        {/* Main Product Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8 lg:p-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative bg-gray-50 rounded-2xl overflow-hidden border-2 border-gray-200 group">
                <img
                  src={productImages[selectedImage]}
                  alt={product.title}
                  className="w-full h-96 sm:h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="absolute top-4 right-4 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <FaHeart
                    className={`text-xl ${
                      isFavorite ? "text-red-500" : "text-gray-400"
                    }`}
                  />
                </button>
                <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  {Math.round(
                    ((Math.ceil(product.price * 2.2) - product.price) /
                      Math.ceil(product.price * 2.2)) *
                      100
                  )}
                  % OFF
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-blue-600 ring-4 ring-blue-100"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  🔥 100+ bought in past month
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <FaCheckCircle /> In Stock
                </span>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-lg">
                    <FaStar />
                    <span className="font-bold">4.1</span>
                    <span className="text-sm opacity-90">/5</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
                    50 reviews
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl border-2 border-green-200">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="text-4xl font-bold text-gray-900">
                    ₹{product.price}
                  </span>
                  <span className="text-2xl text-gray-500 line-through">
                    ₹{Math.ceil(product.price * 2.2)}
                  </span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Save ₹{Math.ceil(product.price * 2.2) - product.price}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Inclusive of all taxes
                </p>
              </div>

              {/* Weight Selection */}
              {product.weight && product.weight.length > 0 && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Select Weight
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {product.weight.map((weight, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedWeight(weight)}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all border-2 ${
                          selectedWeight === weight
                            ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-105"
                            : "bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:shadow-md"
                        }`}
                      >
                        {weight}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Pack Selection */}
              {product.pack && product.pack.length > 0 && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Select Pack
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {product.pack.map((pack, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedPack(pack)}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all border-2 ${
                          selectedPack === pack
                            ? "bg-purple-600 text-white border-purple-600 shadow-lg scale-105"
                            : "bg-white text-gray-700 border-gray-300 hover:border-purple-400 hover:shadow-md"
                        }`}
                      >
                        {pack}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-xl border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 font-bold text-xl transition-all"
                  >
                    -
                  </button>
                  <span className="text-2xl font-bold text-gray-900 min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-xl border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 font-bold text-xl transition-all"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleBuyNow}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <FaBolt /> Buy Now
                </button>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>

              {/* Share Button */}
              <button
                onClick={handleShare}
                className="w-full border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <FaShare /> Share this product
              </button>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t-2 border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <FaTruck className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      Free Delivery
                    </p>
                    <p className="text-xs text-gray-600">
                      On orders above ₹500
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <FaUndo className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      Easy Returns
                    </p>
                    <p className="text-xs text-gray-600">
                      7 days return policy
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <FaShieldAlt className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      Secure Payment
                    </p>
                    <p className="text-xs text-gray-600">100% secure payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 sm:p-8 lg:p-12 border-t-2 border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                Product Description
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              {/* Additional Info */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">
                    Product Highlights
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span>Premium quality ingredients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span>100% natural and organic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span>Freshness guaranteed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span>No artificial preservatives</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">
                    Delivery Information
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                      <span>Standard delivery: 3-5 business days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                      <span>Express delivery available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                      <span>Cash on delivery accepted</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                      <span>Track your order anytime</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
