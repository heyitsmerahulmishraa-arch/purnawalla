import React from "react";
import MainBanner from "../components/MainBanner";
import ProductCard from "../components/ProductCard";
import Top4Product from "../components/Top4Product";
import { mainProductsList } from "../assets/assets";

const Home = () => {
  

  return (
    <>
      <MainBanner />
      <div className="container pro-flex-container my-10">
        <div className="grid grid-auto-flow grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-cols-min justify-center items-center gap-16">
          {mainProductsList.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.thumbnail}
          />
        ))}
        </div>
      </div>
      <Top4Product />
    </>
  );
};

export default Home;
