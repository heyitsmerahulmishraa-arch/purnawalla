import React from "react";
import { Link, useNavigate } from "react-router-dom";
const ProductCard = (props) => {
  const {title,price,image, productId} = props;
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/product/${productId}`)} className="productContainer shadow-xl max-w-80 w-full pb-2.5 flex flex-col justify-between m-auto ">
      <div className="product-img-container w-full  min-h-[280px]">
        <img src={image} className="" alt="" />
      </div>
      <div className="product-content-container">
        <div className="main-content-container py-[15px] flex flex-col gap-3">
          <div className="pro-title-detils flex justify-between items-center text-[20px] px-2.5">
            <p>
              <b>{title}</b>
            </p>
            <p>
              <b>4.1/5 ⭐</b>
            </p>
          </div>
          <p className="px-2.5">
            ₹{price} -{" "}
            <span className="line-through">₹{Math.ceil(price * 2.2)}</span>
          </p>
        </div>
        <div className="pro-btn-container flex justify-between gap-2 px-2.5 items-center text-[8px] sm:text-[12px] lg:text-[14px] whitespace-nowrap">
          <Link
            to={"/buynow"}
            className="py-2 px-[22px]  bg-(--primary-color) text-white font-bold"
          >
            Buy Now
          </Link>
          <Link
            onClick={() => {
              alert("your product added");
            }}
            className="py-2 px-[22px]  font-bold bg-(--secondary-color) text-white"
          >
            Add To cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
