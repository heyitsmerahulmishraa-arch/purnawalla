import React from 'react'

const Cart = () => {
  return (
    <section>
        <div className="cartContainer flex flex-col gap-5 p-5 pb-80">
           <p className='text-3xl font-bold'>Shopping Cart</p>
           <div className="productsTableContainer">
            <table className="productsTable w-full border-collapse border border-gray-300">
              <thead className='bg-(--primary-color) text-white'>
                <tr>
                  <th className="border px-4 py-2 text-left">Product</th>
                  <th className="border px-4 py-2 text-left">Price</th>
                  <th className="border px-4 py-2 text-left">Quantity</th>
                  <th className="border px-4 py-2 text-left">Total</th>
                </tr>
              </thead>
              <tbody className='bg-(--border-color) text-white font-medium '>
                <tr>
                  <td className="border px-4 py-2">Product 1</td>
                  <td className="border px-4 py-2">$10.00</td>
                  <td className="border px-4 py-2">2</td>
                  <td className="border px-4 py-2">$20.00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Product 2</td>
                  <td className="border px-4 py-2">$15.00</td>
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">$15.00</td>
                </tr>
              </tbody>
            </table>
           </div>
              <div className="cartSummary mt-5 p-4 border rounded max-w-md relative">
              <h2 className="text-xl font-medium mb-4">Cart Summary</h2>
              <p className="mb-2">Subtotal: $35.00</p>
              <p className="mb-4">Taxes: $3.50</p>
              <p className="mb-4 font-bold">Total: $38.50</p>
              <button className="w-full py-3 bg-(--primary-color) hover:bg-(--primary-color-dark) cursor-pointer text-white rounded">Proceed to Checkout</button>
            </div>
        </div>
    </section>
  )
}

export default Cart