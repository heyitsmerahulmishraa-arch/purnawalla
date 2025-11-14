import React from "react";
import MainBanner from "./MainBanner";
import ProductCard from "./ProductCard";
import Top4Product from "./Top4Product";
import { mainProductsList } from "../assets/assets";

const Home = () => {
  return (
    <>
      <MainBanner />
      <div className="container pro-flex-container my-[40px] grid grid-cols-4 gap-[32px]">
        {mainProductsList.map((itme) => (
          <ProductCard
            tittle={itme.title}
            price={itme.price}
            image={itme.thumbnail}
          />
        ))}
      </div>
      <Top4Product />
    </>
  );
};

export default Home;
