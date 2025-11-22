import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSave, FaEdit, FaBox, FaCheckCircle, FaUser, FaShoppingBag } from "react-icons/fa";

const ProfileContent = ({ active, user, loading }) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
    pincode: user?.pincode || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log("Saving user data:", formData);
    setIsEditing(false);
    // Add your save logic here
  };

  const orderHistory = [
    {
      id: 1,
      name: "Sony WH-1000XM4",
      qty: 1,
      price: 299.99,
      total: 299.99,
      status: "Delivered",
      date: "2024-11-15",
    },
    {
      id: 2,
      name: "Apple AirPods Pro",
      qty: 2,
      price: 249.99,
      total: 499.98,
      status: "Shipped",
      date: "2024-11-18",
    },
    {
      id: 3,
      name: "Bose QuietComfort 35 II",
      qty: 1,
      price: 199.99,
      total: 199.99,
      status: "Delivered",
      date: "2024-11-10",
    },
    {
      id: 4,
      name: "Dell XPS 13",
      qty: 1,
      price: 999.99,
      total: 999.99,
      status: "Processing",
      date: "2024-11-20",
    },
    {
      id: 5,
      name: "MacBook Pro 16-inch",
      qty: 1,
      price: 2399.99,
      total: 2399.99,
      status: "Delivered",
      date: "2024-11-01",
    },
    {
      id: 6,
      name: "HP Spectre x360",
      qty: 1,
      price: 1199.99,
      total: 1199.99,
      status: "Delivered",
      date: "2024-10-28",
    },
  ];

  const getStatusColor = (status) => {
    const colors = {
      Processing: "bg-yellow-100 text-yellow-800",
      Shipped: "bg-blue-100 text-blue-800",
      Delivered: "bg-green-100 text-green-800",
      Cancelled: "bg-red-100 text-red-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  // Order History View
  if (active === "orderHistory") {
    return (
      <div className="flex-1">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FaShoppingBag className="text-2xl text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Order History
                </h2>
                <p className="text-gray-600 text-sm">
                  View all your past orders
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Qty
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orderHistory.map((order) => (
                  <tr
                    key={order.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <FaBox className="text-gray-600" />
                        </div>
                        <p className="text-sm font-medium text-gray-900">
                          {order.name}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {order.date}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {order.qty}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      ${order.price}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      ${order.total}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden divide-y divide-gray-200">
            {orderHistory.map((order) => (
              <div key={order.id} className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                      <FaBox className="text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        {order.name}
                      </p>
                      <p className="text-xs text-gray-500">{order.date}</p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Qty: {order.qty}</span>
                  <span className="text-gray-600">Price: ${order.price}</span>
                  <span className="font-bold text-gray-900">
                    Total: ${order.total}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                Total Orders: {orderHistory.length}
              </span>
              <span className="text-lg font-bold text-gray-900">
                Total Spent: $
                {orderHistory.reduce((sum, o) => sum + o.total, 0).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Logout
  if (active === "logOut") {
    localStorage.removeItem("token");
    navigate("/login");
    return null;
  }

  // Account Details View
  return (
    <div className="flex-1">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FaUser className="text-2xl text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Account Details
                </h2>
                <p className="text-gray-600 text-sm">
                  Manage your personal information
                </p>
              </div>
            </div>
            <button
              onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all"
            >
              {isEditing ? (
                <>
                  <FaSave />
                  <span>Save Changes</span>
                </>
              ) : (
                <>
                  <FaEdit />
                  <span>Edit Profile</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {loading ? (
            <div className="space-y-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                  <div className="h-12 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name || user?.name || ""}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-all ${
                    isEditing
                      ? "border-gray-200 focus:border-blue-500 focus:outline-none"
                      : "border-gray-100 bg-gray-50 text-gray-600 cursor-not-allowed"
                  }`}
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email || user?.email || ""}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-all ${
                    isEditing
                      ? "border-gray-200 focus:border-blue-500 focus:outline-none"
                      : "border-gray-100 bg-gray-50 text-gray-600 cursor-not-allowed"
                  }`}
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone || user?.phone || ""}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-all ${
                    isEditing
                      ? "border-gray-200 focus:border-blue-500 focus:outline-none"
                      : "border-gray-100 bg-gray-50 text-gray-600 cursor-not-allowed"
                  }`}
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Address
                </label>
                <textarea
                  name="address"
                  value={formData.address || user?.address || ""}
                  onChange={handleChange}
                  disabled={!isEditing}
                  rows="3"
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-all resize-none ${
                    isEditing
                      ? "border-gray-200 focus:border-blue-500 focus:outline-none"
                      : "border-gray-100 bg-gray-50 text-gray-600 cursor-not-allowed"
                  }`}
                  placeholder="Enter your address"
                />
              </div>

              {/* Pincode */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Pincode
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode || user?.pincode || ""}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-all ${
                    isEditing
                      ? "border-gray-200 focus:border-blue-500 focus:outline-none"
                      : "border-gray-100 bg-gray-50 text-gray-600 cursor-not-allowed"
                  }`}
                  placeholder="Enter your pincode"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer Info */}
        {isEditing && (
          <div className="p-6 bg-blue-50 border-t border-blue-100">
            <div className="flex items-start gap-2">
              <FaCheckCircle className="text-blue-600 mt-1" />
              <p className="text-sm text-blue-800">
                Make sure all your information is accurate before saving
                changes.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileContent;
