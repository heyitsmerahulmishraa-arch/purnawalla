import React from 'react'
import { useParams } from 'react-router-dom';
import { allProductsList } from '../assets/assets';

const Product = () => {
  const { productId } = useParams();
  return (
    // fetching product details form url params and display the product details
    <div>
        {allProductsList.filter(product => product.productId === parseInt(productId)).map(filteredProduct => (
            <div key={filteredProduct.id} className="productDetailsContainer flex gap-10 p-10">
                <div className="productImageContainer flex gap-5">
                    <div className="leftSideImage flex flex-col gap-5">
                        <div className="imageBox w-16 h-16 border"></div>
                        <div className="imageBox w-16 h-16 border"></div>
                        <div className="imageBox w-16 h-16 border"></div>
                    </div>
                    <div className="mainProductImage w-96 h-96 border">
                        <img src={filteredProduct.thumbnail} alt={filteredProduct.title} className='w-full h-full object-cover'/>
                    </div>
                </div>
                <div className="productInfoContainer">
                    <p>100+ bought in past month</p>
                    <div className="productRatingContianer flex items-center gap-2 my-2">
                        <p>⭐ 4.1/5</p>
                        <p className='ml-2'>50 reviews</p>
                    </div>
                    <h1 className='text-3xl font-bold my-4'>{filteredProduct.title}</h1>
                    <div className="weightContianer">
                        {filteredProduct.weight.map((weight, index) => (
                            <button key={index} className='border border-(--primary-color) text-(--primary-color-dark) font-medium py-2 px-4 mr-4 mb-4 hover:bg-(--primary-color-dark) hover:text-white'>{weight}</button>
                        ))}
                    </div>
                    <div className="packContainer">
                        {filteredProduct.pack.map((pack, index) => (
                            <button key={index} className='border border-(--primary-color) text-(--primary-color-dark) font-medium py-2 px-4 mr-4 mb-4 hover:bg-(--primary-color-dark) hover:text-white'>{pack}</button>
                        ))}
                    </div>
                    <p className='text-2xl font-semibold my-4'>₹{filteredProduct.price} <span className='line-through text-lg text-gray-500'>₹{Math.ceil(filteredProduct.price * 2.2)}</span></p>
                    <button className='bg-(--primary-color) text-white font-bold py-3 px-6 mr-4'>Buy Now</button>
                    <button className='bg-(--secondary-color) text-white font-bold py-3 px-6'>Add to Cart</button>
                    <div className="productDescription mt-6">
                        <h2 className='text-2xl font-semibold mb-2'>Product Description</h2>
                        <p>{filteredProduct.description}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>

  )
}

export default Product