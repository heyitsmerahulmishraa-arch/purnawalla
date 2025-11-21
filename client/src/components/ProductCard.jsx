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
    navigate(navigate(`/product/${productId}`))
  }

  return (
    <div
      onClick={handleProduct}
      className="productContainer shadow-xl max-w-80 w-full pb-2.5 flex flex-col justify-between m-auto "
    >
      <div className="product-img-container w-full h-[100px] min-h-[280px] p-2.5">
        <img src={image} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="product-content-container">
        <div className="main-content-container py-[15px] flex flex-col gap-3">
          <div className="pro-title-detils flex justify-between items-center text-[20px] px-2.5">
            <p>
              <b>{title}</b>
            </p>
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <FaRegStar className="inline-block ml-1 text-yellow-500" />
              <b>4.1/5</b>
            </p>
          </div>
          <div className="pro-price-stock flex justify-between gap-1">
            <p className="px-2.5  font-bold">
              ₹{discountPrice} -{" "}
              <span className="line-through text-gray-500">₹{price}</span>
            </p>

            {inStock ? (
              <p
                onClick={() => setInStock(!inStock)}
                className="text-green-600 cursor-pointer font-semibold text-sm px-2.5"
              >
                In Stock
              </p>
            ) : (
              <p
                onClick={() => setInStock(!inStock)}
                className="text-red-600 cursor-pointer font-semibold text-sm px-2.5"
              >
                Out of Stock
              </p>
            )}
          </div>
        </div>
        <div className="pro-btn-container  text-center flex justify-between gap-2 px-2.5 items-center text-[8px] sm:text-[12px] lg:text-[14px] whitespace-nowrap">
          {inStock ? (
            <Link
              onClick={handleAddToCart}
              className="flex items-center justify-center py-3 hover:bg-(--primary-color-dark) text-[12px] md:text-[12px] w-full font-bold bg-(--secondary-color) text-white"
            >
              <FaCartShopping className="inline-block mr-2" />
              Add To cart
            </Link>
          ) : (
            <button
              disabled
              className="flex items-center justify-center py-3 text-[12px] md:text-[12px] w-full font-bold bg-gray-400 text-white cursor-not-allowed"
            >
              <FaCartShopping className="inline-block mr-2" />
              Add To cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
