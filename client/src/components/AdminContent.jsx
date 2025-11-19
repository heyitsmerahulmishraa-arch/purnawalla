import React from "react";

const AdminContent = ({ active }) => {
  const contentList = {
    orderManagement: {
      fields: [
        {
          username: "Karan Singh",
          product: "Sony WH-1000XM4",
          qty: 1,
          address: "123 Main St, City, Country",
          total: 299.99,
          status: "Pending",
        },
        {
          username: "Anita Desai",
          product: "Apple AirPods Pro",
          qty: 2,
          address: "456 Elm St, City, Country",
          total: 499.98,
          status: "Confirmed",
        },
        {
          username: "Vikram Patel",
          product: "Bose QuietComfort 35 II",
          qty: 1,
          address: "789 Oak St, City, Country",
          total: 199.99,
          status: "Packed",
        },
        {
          username: "Sneha Kapoor",
          product: "Dell XPS 13",
          qty: 1,
          address: "321 Pine St, City, Country",
          total: 999.99,
          status: "Cancelled",
        },
        {
          username: "Rohit Sharma",
          product: "MacBook Pro 16-inch",
          qty: 1,
          address: "654 Maple St, City, Country",
          total: 2399.99,
          status: "Shipped",
        },
        {
          username: "Priya Singh",
          product: "HP Spectre x360",
          qty: 1,
          address: "987 Cedar St, City, Country",
          total: 1199.99,
          status: "Delivered",
        },
        {
          username: "varun gupta",
          product: "HP Spectre x360",
          qty: 1,
          address: "321 Cedar St, City, Country",
          total: 1199.99,
          status: "Delivered",
        },
        {
          username: "Tarun Mehta",
          product: "Dell XPS 13",
          qty: 2,
          address: "159 Spruce St, City, Country",
          total: 1999.98,
          status: "Pending",
        },
        {
          username: "Aakash Jain",
          product: "Apple AirPods Pro",
          qty: 3,
          address: "753 Birch St, City, Country",
          total: 749.97,
          status: "Confirmed",
        },
        {
          username: "Priya Sharma",
          product: "Sony WH-1000XM4",
          qty: 1,
          address: "852 Willow St, City, Country",
          total: 299.99,
          status: "Delivered",
        },
      ],
    },
  };

  function renderFilds(field) {
    return (
      <div key={field.label} className="container flex flex-col gap-2 py-2">
        <label className="font-bold tracking-wider uppercase">
          {field.label}
        </label>
        <input
          type="text"
          placeholder={field.value}
          className="py-3 px-3 border border-(--border-color) rounded"
        />
      </div>
    );
  }

  if (active === "orderManagement") {
    return (
      <div>
        <table className="w-full border-collapse ">
          <thead className="bg-gray-500 ">
            <tr className="">
              <th className="border px-4 py-2 text-left border-none">Username</th>
              <th className="border px-4 py-2 text-left border-none">Product Name</th>
              <th className="border px-4 py-2 text-left border-none">Qty</th>
              <th className="border px-4 py-2 text-left border-none">Address</th>
              <th className="border px-4 py-2 text-left border-none">Total</th>
              <th className="border px-4 py-2 text-left border-none">Status</th>
            </tr>
          </thead>
          <tbody>
            {contentList[active].fields.map((product, index) => (
              <tr
                key={product.name}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-300"}
              >
                <td className="border px-4 py-2 border-none">{product.username}</td>
                <td className="border px-4 py-2 border-none">{product.product}</td>
                <td className="border px-4 py-2 border-none">{product.qty}</td>
                <td className="border px-4 py-2 border-none">{product.address}</td>
                <td className="border px-4 py-2 border-none">{product.total}</td>
                <td className="border px-4 py-2 border-none">
                  <select
                    name="orderStatus"
                    className="w-full h-full font-medium"
                  >
                    {[
                      "Pending",
                      "Confirmed",
                      "Packed",
                      "Cancelled",
                      "Shipped",
                      "Delivered",
                    ].map((status) => (
                      <option
                        key={status}
                        value={status}
                        selected={product.status === status}
                      >
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="featureBtnContainer flex justify-end">
          <div className="featureBtns flex gap-4 mt-4">
            <button className="bg-(--primary-color) hover:bg-(--primary-color-dark) text-white py-2 px-4 rounded">
              Cancel
            </button>
            <button className="bg-(--primary-color) hover:bg-(--primary-color-dark) text-white py-2 px-4 rounded">
              Update Status
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="adminContentContainer flex flex-col gap-2 flex-1 p-5 pb-80">
      <div className="flex justify-between items-center mb-4">
        <h2 className="capitalize font-bold">{active}</h2>
        <button className="bg-(--primary-color) hover:bg-(--primary-color-dark) text-white py-2 px-4 rounded cursor-pointer ">
          Save
        </button>
      </div>
      <div className="contentContainer">
        {contentList[active]?.fields?.map((props) => renderFilds(props))}
      </div>
    </div>
  );
};

export default AdminContent;
