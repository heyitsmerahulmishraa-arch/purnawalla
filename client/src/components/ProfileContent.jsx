import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileContent = ({ active }) => {

  const navigate = useNavigate();

  const contactList = {
    accountDetails: {
      fields: [
        {label: "name", value: "John"},
        {label: "email", value: "john@example.com"},
        {label: "phone", value: "+1234567890"},
        {label: "address", value: "123 Main St, City, Country"},
        {label: "pincode", value: "123456"},
      ],
    },

    orderHistory: {
      fields: [
        {name: "Sony WH-1000XM4", qty: 1, price: 299.99, value: "Sony WH-1000XM4", total: 299.99},
        {name: "Apple AirPods Pro", qty: 2, price: 249.99, value: "Apple AirPods Pro", total: 499.98},
        {name: "Bose QuietComfort 35 II", qty: 1, price: 199.99, value: "Bose QuietComfort 35 II", total: 199.99},
        {name: "Dell XPS 13", qty: 1, price: 999.99, value: "Dell XPS 13", total: 999.99},
        {name: "MacBook Pro 16-inch", qty: 1, price: 2399.99, value: "MacBook Pro 16-inch", total: 2399.99},
        {name: "HP Spectre x360", qty: 1, price: 1199.99, value: "HP Spectre x360", total: 1199.99},
      ],
    },
  };

  function renderFilds(field) {

    if (active === 'orderHistory'){ {
      return (
              <tr key={field.name}>
                <td className="border px-4 py-2">{field.name}</td>
                <td className="border px-4 py-2">{field.qty}</td>
                <td className="border px-4 py-2">{field.price}</td>
                <td className="border px-4 py-2">{field.total}</td>
              </tr>
      )
    }}

    return (
      <div className="container flex flex-col gap-2 py-2" key={field.label}>
        <label className="capitalize">{field.label}</label>
        <input type="text" placeholder={"Enter your " + field.label} className="py-3 px-3 border border-(--border-color) rounded"/>
      </div>
    );
  }

  if (active === 'orderHistory'){
    return (
      <div className="profileContainer flex flex-col gap-2 flex-1 p-5 pb-80">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="">
              <th className="border px-4 py-2 text-left">Product Name</th>
              <th className="border px-4 py-2 text-left">Qty</th>
              <th className="border px-4 py-2 text-left">Price</th>
              <th className="border px-4 py-2 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {contactList[active].fields.map((product) => renderFilds(product))}
          </tbody>
        </table>
      </div>
    )
  }

  if(active === 'logOut'){
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="profileContainer flex flex-col gap-2 flex-1 p-5 pb-80">
    <div className="flex justify-between items-center mb-4">
      <h2 className="capitalize font-bold">{active}</h2>
      <button className="bg-(--primary-color) hover:bg-(--primary-color-dark) text-white py-2 px-4 rounded cursor-pointer ">Save</button>
    </div>
      <div className="contentContainer">
        {contactList[active].fields.map((props) => renderFilds(props))}
      </div>
    </div>
  );
};



export default ProfileContent;
