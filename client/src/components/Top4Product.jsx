import React from "react";
import ProductCard from "./ProductCard";
import { top4PdoructsList } from "../assets/assets";

const Top4Product = () => {
  return (
    <div className="container flex flex-col my-[50px] ">
      <p className="text-center my-10 text-4xl">
        <b>Top 4 Products</b>
      </p>
      <div className="top-pro-container grid sm:grid-cols-2 md:grid-cols-3 items-center gap-16">
        {top4PdoructsList.map((el) => (
          <ProductCard
            key={el.id}
            title={el.title} 
            price={el.price}
            image={el.thumbnail}
            productId={el.productId}
          />
        ))}
      </div>
    </div>
  );
};

export default Top4Product;
