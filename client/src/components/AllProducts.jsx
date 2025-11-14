import React from 'react'
import { allProductsList } from '../assets/assets'
import ProductCard from './ProductCard';
const AllProducts = () => {
  return (
    <div>
      <div className="allProductsListContainer grid grid-cols-4 items-center grid-cols-[min-max(300px,600px)] border ">
        {allProductsList.map((product) => (
            <ProductCard title={product.title} price={product.price} image={product.thumbnail} />
            
        ))}
      </div>
    </div>
  );
}
export default AllProducts
