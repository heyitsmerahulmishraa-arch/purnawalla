import React, { useState } from 'react'
import { allProductsList } from '../assets/assets'
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import { useEffect } from 'react';
import { FaFilter } from "react-icons/fa";


const AllProducts = () => {
  let filter_value =  ''
  function handleFilter(e) {
    console.log(e.target.value)
    if (e.target.value == "Sabut Masala") {
      filter_value = "Sabut Masala";
      console.log(filter_value);
    } else if (e.target.value == " Garam Masala") {
      filter_value = " Garam Masala";
    } else if (e.target.value == 'all') {
      
    }
  }

  // let filter = [
  //   { value: "all", checked: false },
  //   { value: "garam masala", checked: false },
  //   { value: "sabut sasala", checked: false },
  //   { value: "powder masala", checked: false },
  //   { value: "paneer masala", checked: false },
  //   { value: "maggie masala", checked: false },
  //   { value: "nudals masala", checked: false },
  // ];

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
  const [showFilterSidebar, setShowFilterSidebar] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        const products = response.data;
        setProducts(products);
        console.log('Fetched products:', products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  },[]);

  return (
    <div className="allProductsPageContainer flex gap-5 p-5 pb-80 flex-col md:flex-row">
      <div className="sidebarFilter">
        <div
          onClick={() => setShowFilterSidebar(!showFilterSidebar)}
          className="md:hidden text-2xl cursor-pointer"
        >
          <FaFilter />
        </div>
        <div
          className={`sidebarFilterContianer ${
            showFilterSidebar ? "block" : "hidden"
          } md:block p-5 shadow-lg sticky top-20 h-fit`}
        >
          <div className="searchProductContianer">
            <input
              type="text"
              placeholder="Search Product..."
              className="w-full py-3 px-3 border border-(--border-color) rounded"
            />
          </div>
          <div className="categoryFilterContianer mt-5">
            <h2 className="text-xl font-medium mb-3">Categories</h2>
            <ul className="flex flex-col gap-2">
              {filter.forEach((item) => (
                <li>
                  <input
                    onChange={handleFilter}
                    type="checkbox"
                    value={item.value}
                  />
                  {console.log(item)}
                  <span className="capitalize"> {item.value} </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mainProductContianer  flex-1">
        <h1 className="text-center text-3xl font-medium my-8">All Products</h1>
        <div className="allProductsListContainer grid grid-auto-flow grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 auto-cols-min justify-center items-center gap-16 py-10">
          {products.length >= 0 ? (
            products.map((product) => (
              <ProductCard
                key={product._id}
                title={product.title}
                discountPrice={product.discountPrice}
                price={product.price}
                image={product.images[0].url}
                productId={product._id}
                isInCart={product.isInCart}
              />
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
}
export default AllProducts
