import React from 'react'
import { allProductsList } from '../assets/assets'
import ProductCard from '../components/ProductCard';
const AllProducts = () => {
  return (
    <div>
      <div className="allProductsListContainer grid grid-auto-flow grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-cols-min justify-center items-center gap-16 py-10">
        {allProductsList.map((product) => (
            <ProductCard key={product.id} title={product.title} price={product.price} image={product.thumbnail} />
            
        ))}
      </div>
    </div>
  );
}
export default AllProducts
