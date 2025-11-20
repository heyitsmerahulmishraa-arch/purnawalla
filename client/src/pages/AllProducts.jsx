import React, { useState } from 'react'
import { allProductsList } from '../assets/assets'
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import { useEffect } from 'react';


const AllProducts = () => {

  const [products, setProducts] = useState([]);

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
    <div className='allProductsPageContainer flex gap-5 p-5 pb-80'>
      <div className="sidebarFilterContianer">
        <div className="searchProductContianer">
          <input type="text" placeholder='Search Product...' className='w-full py-3 px-3 border border-(--border-color) rounded'/>
        </div>
        <div className="categoryFilterContianer mt-5">
          <h2 className='text-xl font-medium mb-3'>Categories</h2>
          <ul className='flex flex-col gap-2'>
            <li className='cursor-pointer hover:underline'><span className='checkbox border w-4 h-4 inline-block mr-2'></span>All</li>
            <li className='cursor-pointer hover:underline'> <span className='checkbox border w-4 h-4 inline-block mr-2'></span>Garam Masala</li>
            <li className='cursor-pointer hover:underline'> <span className='checkbox border w-4 h-4 inline-block mr-2'></span>Sabut Masala</li>
            <li className='cursor-pointer hover:underline'> <span className='checkbox border w-4 h-4 inline-block mr-2'></span>Powder Masala</li>
            <li className='cursor-pointer hover:underline'> <span className='checkbox border w-4 h-4 inline-block mr-2'></span>Blended Masala</li>
            <li className='cursor-pointer hover:underline'> <span className='checkbox border w-4 h-4 inline-block mr-2'></span>Premium Masala</li>
            <li className='cursor-pointer hover:underline'> <span className='checkbox border w-4 h-4 inline-block mr-2'></span>Organic Masala</li>
          </ul>
        </div>
      </div>
      <div className="mainProductContianer  flex-1">
        <h1 className='text-center text-3xl font-medium my-8'>All Products</h1>
      <div className="allProductsListContainer grid grid-auto-flow grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-cols-min justify-center items-center gap-16 py-10">
        {
          products.length >= 0 ? (
            products.map((product) => (
              <ProductCard key={product._id} title={product.title} discountPrice={product.discountPrice} price={product.price} image={product.images[0].url} productId={product._id} isInCart={product.isInCart} />

            ))
          )
            : (<p>Loading products...</p>
          )
        }
      </div>
      </div>
    </div>
  );
}
export default AllProducts
