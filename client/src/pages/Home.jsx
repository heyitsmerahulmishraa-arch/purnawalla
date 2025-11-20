import React from "react";
import MainBanner from "../components/MainBanner";
import ProductCard from "../components/ProductCard";
import Top4Product from "../components/Top4Product";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [showcasedProducts, setShowcasedProducts] = useState([]);

  useEffect(() => {
    const fetchShowcasedProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products/showcased");
        const products = response.data;
        setShowcasedProducts(products); 
        console.log("Fetched showcased products:", products);  
      } catch (error) {
        console.error("Error fetching showcased products:", error);
      }
    }
    fetchShowcasedProducts();
  }, [])

  return (
    <>
      <MainBanner />
      <div className="container pro-flex-container my-10">
        <div className="grid grid-auto-flow grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-cols-min justify-center items-center gap-16">
          {
            showcasedProducts.length >= 0 ? (
              showcasedProducts.map((product) => (
                <ProductCard key={product._id} title={product.title} discountPrice={product.discountPrice} price={product.price} image={product.images[0].url} productId={product._id}  isInCart={product.isInCart} />
              ))
            ) : (
              <p>No showcased products available.</p>
            )
          }
        </div>
      </div>
      {/* <Top4Product /> */}
    </>
  );
};

export default Home;
