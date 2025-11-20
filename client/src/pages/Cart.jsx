import React, { useState } from 'react'

const Cart = () => {

  const [quintety, setQuintety] = useState({
    box1: 0,
    box2: 0,
  })
   const handleIncrease = (box) => {
     setQuintety((prev) => ({
       ...prev,
       [box]: prev[box] + 1,
     }));
   };

   const handleDecrease = (box) => {
     setQuintety((prev) => ({
       ...prev,
       [box]: prev[box] - 1,
     }));
   };


  return (
    <section>
      <div className="cartContainer flex flex-col gap-5 p-5 pb-80">
        <p className="text-3xl font-bold">Shopping Cart</p>
        <div className="productsTableContainer">
          <table className="productsTable w-full border-collapse border border-gray-300">
            <thead className="py-[50px] bg-(--primary-color) text-white">
              <tr>
                <th className="border px-4 py-6 text-left ">Product</th>
                <th className="border px-4 py-6 text-left ">Price</th>
                <th className="border px-4 py-6 text-left">Quantity</th>
                <th className="border px-4 py-6 text-left">Total</th>
              </tr>
            </thead>
            <tbody className="font-medium ">
              <tr>
                <td className=" px-4 py-6">
                  <p>Product Name </p>
                  <p>weight: 1kg</p>
                </td>
                <td className="border px-4 py-6 border-none">$10.00</td>
                <td className=" px-8 py-6 flex ">
                  <button
                    className="decrement border py-2 px-4"
                    onClick={() => handleDecrease("box1")}
                  >
                    -
                  </button>
                  <div className="quintety border py-2 px-6">
                    {quintety.box1}
                  </div>
                  <button
                    className="increment border py-2 px-4"
                    onClick={() => handleIncrease("box1")}
                  >
                    +
                  </button>
                </td>
                <td className="border-none px-4 py-6">$20.00</td>
              </tr>
              <tr>
                <td className="border-none px-4 py-6">
                  <p>Product Name </p>
                  <p>weight: 1kg</p>
                </td>
                <td className="border-none px-4 py-6">$15.00</td>
                <td className="px-8 py-6 flex border-none">
                  <button
                    className="decrement border py-2 px-4"
                    onClick={() => handleDecrease("box2")}
                  >
                    -
                  </button>
                  <div className="decrement border py-2 px-6">{quintety.box2}</div>
                  <button
                    className="decrement border py-2 px-4"
                    onClick={() => handleIncrease("box2")}
                  >
                    +
                  </button>
                </td>
                <td className="border-none px-4 py-6">$15.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="cartSummeryContainer flex justify-end">
          <div className="cartSummary mt-5 p-4 border border-gray-500 rounded max-w-md shrink-0 w-full">
            <h2 className="text-xl font-medium mb-4">Cart Summary</h2>
            <p className="mb-2">Subtotal: $35.00</p>
            <p className="mb-4">Taxes: $3.50</p>
            <p className="mb-4 font-bold">Total: $38.50</p>
            <button className="w-full py-3 bg-(--primary-color) hover:bg-(--primary-color-dark) cursor-pointer text-white rounded">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart