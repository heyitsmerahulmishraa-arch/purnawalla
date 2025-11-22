import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

const ProductCard = (props) => {
  const { title, discountPrice, price, image, productId, isInCart } = props;
  const navigate = useNavigate();
  const [inStock, setInStock] = useState(true);
  const token = localStorage.getItem("token");

  let userId = null;
  if (token) {
    const decoedeToken = jwtDecode(token);
    // console.log(decoedeToken);
    userId = decoedeToken.id;
  }

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (!token) {
      toast.error("Please login to add items to cart.");
      navigate("/login");
      return;
    }
    // Proceed to add to cart
    console.log(`Adding product ${productId} to cart for user ${userId}`);
    toast.success("Product added to cart successfully!");
  };

  const handleProduct = (e) => {
    e.stopPropagation();
    navigate(`/product/${productId}`);
  };

  return (
    <div
      onClick={handleProduct}
      className="productContainer group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 max-w-80 w-full pb-4 flex flex-col justify-between m-auto cursor-pointer transform hover:-translate-y-2"
    >
      <div className="product-img-container w-full h-[100px] min-h-[280px] p-3 overflow-hidden rounded-t-2xl">
        <img
          src={image}
          className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
          alt={title}
        />
      </div>
      <div className="product-content-container">
        <div className="main-content-container py-4 flex flex-col gap-3">
          <div className="pro-title-detils flex justify-between items-start text-lg px-3">
            <h3 className="font-bold text-gray-900 line-clamp-2 flex-1 mr-2">
              {title}
            </h3>
            <div className="text-sm text-gray-600 flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg shrink-0">
              <FaRegStar className="text-yellow-500" />
              <span className="font-semibold">4.1</span>
            </div>
          </div>
          <div className="pro-price-stock flex justify-between items-center gap-2 px-3">
            <div className="flex flex-col">
              <p className="text-2xl font-bold text-gray-900">
                ₹{discountPrice}
              </p>
              <p className="text-sm line-through text-gray-400">₹{price}</p>
            </div>

            {inStock ? (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  setInStock(!inStock);
                }}
                className="bg-green-100 text-green-700 cursor-pointer font-semibold text-xs px-3 py-1.5 rounded-full"
              >
                In Stock
              </span>
            ) : (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  setInStock(!inStock);
                }}
                className="bg-red-100 text-red-700 cursor-pointer font-semibold text-xs px-3 py-1.5 rounded-full"
              >
                Out of Stock
              </span>
            )}
          </div>
        </div>
        <div className="pro-btn-container px-3 mt-2">
          {inStock ? (
            <Link
              onClick={handleAddToCart}
              className="flex items-center justify-center py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-sm md:text-base w-full font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95"
            >
              <FaCartShopping className="mr-2 text-lg" />
              Add To Cart
            </Link>
          ) : (
            <button
              disabled
              className="flex items-center justify-center py-3.5 rounded-xl text-sm md:text-base w-full font-semibold bg-gray-300 text-gray-500 cursor-not-allowed"
            >
              <FaCartShopping className="mr-2 text-lg" />
              Out of Stock
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
