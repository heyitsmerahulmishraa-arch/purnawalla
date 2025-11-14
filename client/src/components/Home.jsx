import React, { useEffect, useState } from "react";
import MainBanner from "./MainBanner";
import ProductCard from "./ProductCard";
import Top4Product from "./Top4Product";
import { mainProductsList } from "../assets/assets";

const Home = () => {
  const [data,setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5300/")
      .then((res) =>
        res.json())
     .then((data) => {
      //  console.log(data[0]);
       setData(data)

     });
 
 },[])
    

  return (
    <>
      <MainBanner />
      {data ? <p>success : {data.name}</p> : <p>filed</p>}
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
