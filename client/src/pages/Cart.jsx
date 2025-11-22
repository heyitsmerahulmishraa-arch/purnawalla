import axios from "axios";
import React, { useState } from "react";

const Cart = () => {
  const [quintety, setQuintety] = useState({
    box1: 0,
    box2: 0,
  });
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

  //  handleCartProducts = () => {
  //   axios.get("http://localhost:5000/products/cartProducts",).then((res) => {
  //     console.log(res.data);
  //   }).catch((err) => {
  //     console.error("Error fetching cart products:", err);
  //   });
  //  }

  return (
    <section className="min-h-screen bg-gray-50">
      <div className="cartContainer max-w-7xl mx-auto flex flex-col gap-6 p-4 md:p-6 lg:p-8 pb-20">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Shopping Cart
          </h1>
          <p className="text-sm md:text-base text-gray-600">2 Items</p>
        </div>

        {/* Desktop Table View */}
        <div className="productsTableContainer hidden lg:block bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="productsTable w-full border-collapse">
            <thead className="bg-gradient-to-r from-(--primary-color) to-(--primary-color) text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Product</th>
                <th className="px-6 py-4 text-left font-semibold">Price</th>
                <th className="px-6 py-4 text-left font-semibold">Quantity</th>
                <th className="px-6 py-4 text-left font-semibold">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-6">
                  <p className="font-semibold text-gray-800 text-lg">
                    Product Name
                  </p>
                  <p className="text-sm text-gray-500 mt-1">weight: 1kg</p>
                </td>
                <td className="px-6 py-6 text-gray-700 font-medium text-lg">
                  $10.00
                </td>
                <td className="px-6 py-6">
                  <div className="flex items-center gap-2">
                    <button
                      className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all font-bold text-gray-700 hover:text-blue-600"
                      onClick={() => handleDecrease("box1")}
                    >
                      -
                    </button>
                    <div className="w-16 h-10 flex items-center justify-center border-2 border-gray-300 rounded-lg font-semibold text-gray-800 bg-gray-50">
                      {quintety.box1}
                    </div>
                    <button
                      className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all font-bold text-gray-700 hover:text-blue-600"
                      onClick={() => handleIncrease("box1")}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-6 py-6 text-gray-800 font-bold text-lg">
                  $20.00
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-6">
                  <p className="font-semibold text-gray-800 text-lg">
                    Product Name
                  </p>
                  <p className="text-sm text-gray-500 mt-1">weight: 1kg</p>
                </td>
                <td className="px-6 py-6 text-gray-700 font-medium text-lg">
                  $15.00
                </td>
                <td className="px-6 py-6">
                  <div className="flex items-center gap-2">
                    <button
                      className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all font-bold text-gray-700 hover:text-blue-600"
                      onClick={() => handleDecrease("box2")}
                    >
                      -
                    </button>
                    <div className="w-16 h-10 flex items-center justify-center border-2 border-gray-300 rounded-lg font-semibold text-gray-800 bg-gray-50">
                      {quintety.box2}
                    </div>
                    <button
                      className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all font-bold text-gray-700 hover:text-blue-600"
                      onClick={() => handleIncrease("box2")}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-6 py-6 text-gray-800 font-bold text-lg">
                  $15.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile/Tablet Card View */}
        <div className="lg:hidden flex flex-col gap-4">
          {/* Product 1 Card */}
          <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 border border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex-1">
                <p className="font-semibold text-gray-800 text-lg mb-1">
                  Product Name
                </p>
                <p className="text-sm text-gray-500 mb-3">weight: 1kg</p>
                <p className="text-gray-700 font-medium text-base">
                  Price: <span className="text-lg font-bold">$10.00</span>
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-600 mr-2">
                    Quantity:
                  </span>
                  <button
                    className="w-9 h-9 flex items-center justify-center rounded-lg border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all font-bold text-gray-700"
                    onClick={() => handleDecrease("box1")}
                  >
                    -
                  </button>
                  <div className="w-14 h-9 flex items-center justify-center border-2 border-gray-300 rounded-lg font-semibold text-gray-800 bg-gray-50">
                    {quintety.box1}
                  </div>
                  <button
                    className="w-9 h-9 flex items-center justify-center rounded-lg border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all font-bold text-gray-700"
                    onClick={() => handleIncrease("box1")}
                  >
                    +
                  </button>
                </div>
                <p className="text-gray-800 font-bold text-xl">Total: $20.00</p>
              </div>
            </div>
          </div>

          {/* Product 2 Card */}
          <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 border border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex-1">
                <p className="font-semibold text-gray-800 text-lg mb-1">
                  Product Name
                </p>
                <p className="text-sm text-gray-500 mb-3">weight: 1kg</p>
                <p className="text-gray-700 font-medium text-base">
                  Price: <span className="text-lg font-bold">$15.00</span>
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:items-end">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-600 mr-2">
                    Quantity:
                  </span>
                  <button
                    className="w-9 h-9 flex items-center justify-center rounded-lg border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all font-bold text-gray-700"
                    onClick={() => handleDecrease("box2")}
                  >
                    -
                  </button>
                  <div className="w-14 h-9 flex items-center justify-center border-2 border-gray-300 rounded-lg font-semibold text-gray-800 bg-gray-50">
                    {quintety.box2}
                  </div>
                  <button
                    className="w-9 h-9 flex items-center justify-center rounded-lg border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all font-bold text-gray-700"
                    onClick={() => handleIncrease("box2")}
                  >
                    +
                  </button>
                </div>
                <p className="text-gray-800 font-bold text-xl">Total: $15.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="cartSummeryContainer flex justify-center lg:justify-end mt-4">
          <div className="cartSummary w-full sm:max-w-md lg:max-w-lg bg-white p-6 md:p-8 border-2 border-gray-200 rounded-xl shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 border-b pb-3">
              Cart Summary
            </h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-gray-700">
                <span className="text-base md:text-lg">Subtotal:</span>
                <span className="font-semibold text-lg md:text-xl">$35.00</span>
              </div>
              <div className="flex justify-between items-center text-gray-700">
                <span className="text-base md:text-lg">Taxes:</span>
                <span className="font-semibold text-lg md:text-xl">$3.50</span>
              </div>
              <div className="border-t-2 border-gray-300 pt-3 mt-3">
                <div className="flex justify-between items-center">
                  <span className="text-xl md:text-2xl font-bold text-gray-900">
                    Total:
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-(--primary-color)">
                    $38.50
                  </span>
                </div>
              </div>
            </div>
            <button className="w-full py-4 bg-gradient-to-r from-(--primary-color) to-(--primary-color-dark) hover:from-(--primary-color-dark) hover:to-(--primary-color) active:scale-[0.98] transition-all cursor-pointer text-white rounded-xl font-semibold text-lg shadow-md hover:shadow-lg">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
