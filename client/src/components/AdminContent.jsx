import React, { useState } from "react";
import {
  FaShoppingCart,
  FaCheckCircle,
  FaTruck,
  FaTimesCircle,
  FaBox,
  FaDollarSign,
  FaEdit,
  FaTrash,
  FaPlus,
  FaEye,
  FaStar,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendar,
  FaArrowUp,
  FaArrowDown,
  FaBell,
  FaLock,
  FaPalette,
  FaDatabase,
  FaUsers,
  FaChartLine
} from "react-icons/fa";

const AdminContent = ({ active }) => {
  const [selectedOrders, setSelectedOrders] = useState([]);
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
    products: {
      fields: [
        {
          id: 1,
          name: "Premium Basmati Rice",
          category: "Rice & Grains",
          price: 24.99,
          stock: 150,
          sold: 234,
          rating: 4.8,
          image: "🌾",
          status: "In Stock",
        },
        {
          id: 2,
          name: "Organic Honey",
          category: "Sweeteners",
          price: 15.99,
          stock: 0,
          sold: 189,
          rating: 4.9,
          image: "🍯",
          status: "Out of Stock",
        },
        {
          id: 3,
          name: "Whole Wheat Flour",
          category: "Flour",
          price: 8.99,
          stock: 300,
          sold: 567,
          rating: 4.7,
          image: "🌾",
          status: "In Stock",
        },
        {
          id: 4,
          name: "Cold Pressed Olive Oil",
          category: "Oils",
          price: 32.99,
          stock: 75,
          sold: 145,
          rating: 4.9,
          image: "🫒",
          status: "In Stock",
        },
        {
          id: 5,
          name: "Masala Tea",
          category: "Beverages",
          price: 12.99,
          stock: 220,
          sold: 423,
          rating: 4.6,
          image: "☕",
          status: "In Stock",
        },
        {
          id: 6,
          name: "Cashew Nuts",
          category: "Nuts & Dry Fruits",
          price: 18.99,
          stock: 5,
          sold: 312,
          rating: 4.8,
          image: "🥜",
          status: "Low Stock",
        },
        {
          id: 7,
          name: "Mixed Spice Pack",
          category: "Spices",
          price: 22.99,
          stock: 180,
          sold: 289,
          rating: 4.7,
          image: "🌶️",
          status: "In Stock",
        },
        {
          id: 8,
          name: "Organic Lentils",
          category: "Pulses",
          price: 9.99,
          stock: 400,
          sold: 678,
          rating: 4.5,
          image: "🫘",
          status: "In Stock",
        },
      ],
    },
    customers: {
      fields: [
        {
          id: 1,
          name: "Karan Singh",
          email: "karan.singh@email.com",
          phone: "+91 98765 43210",
          location: "Mumbai, Maharashtra",
          orders: 12,
          totalSpent: 3456.78,
          joinDate: "2024-01-15",
          status: "Active",
          lastOrder: "2024-11-20",
        },
        {
          id: 2,
          name: "Anita Desai",
          email: "anita.desai@email.com",
          phone: "+91 87654 32109",
          location: "Delhi, NCR",
          orders: 8,
          totalSpent: 2134.56,
          joinDate: "2024-03-22",
          status: "Active",
          lastOrder: "2024-11-18",
        },
        {
          id: 3,
          name: "Vikram Patel",
          email: "vikram.patel@email.com",
          phone: "+91 76543 21098",
          location: "Ahmedabad, Gujarat",
          orders: 15,
          totalSpent: 4567.89,
          joinDate: "2023-11-10",
          status: "VIP",
          lastOrder: "2024-11-21",
        },
        {
          id: 4,
          name: "Sneha Kapoor",
          email: "sneha.kapoor@email.com",
          phone: "+91 65432 10987",
          location: "Bangalore, Karnataka",
          orders: 3,
          totalSpent: 567.9,
          joinDate: "2024-10-05",
          status: "Inactive",
          lastOrder: "2024-10-15",
        },
        {
          id: 5,
          name: "Rohit Sharma",
          email: "rohit.sharma@email.com",
          phone: "+91 54321 09876",
          location: "Pune, Maharashtra",
          orders: 20,
          totalSpent: 6789.12,
          joinDate: "2023-08-18",
          status: "VIP",
          lastOrder: "2024-11-19",
        },
        {
          id: 6,
          name: "Priya Singh",
          email: "priya.singh@email.com",
          phone: "+91 43210 98765",
          location: "Hyderabad, Telangana",
          orders: 6,
          totalSpent: 1234.56,
          joinDate: "2024-05-30",
          status: "Active",
          lastOrder: "2024-11-17",
        },
        {
          id: 7,
          name: "Varun Gupta",
          email: "varun.gupta@email.com",
          phone: "+91 32109 87654",
          location: "Kolkata, West Bengal",
          orders: 10,
          totalSpent: 2890.45,
          joinDate: "2024-02-14",
          status: "Active",
          lastOrder: "2024-11-16",
        },
      ],
    },
    analytics: {
      revenue: {
        today: 4567.89,
        yesterday: 3456.78,
        thisWeek: 28934.56,
        lastWeek: 24567.89,
        thisMonth: 98765.43,
        lastMonth: 87654.32,
      },
      orders: {
        today: 45,
        yesterday: 38,
        thisWeek: 289,
        lastWeek: 256,
        thisMonth: 1234,
        lastMonth: 1098,
      },
      topProducts: [
        { name: "Organic Lentils", sold: 678, revenue: 6772.22 },
        { name: "Whole Wheat Flour", sold: 567, revenue: 5095.33 },
        { name: "Masala Tea", sold: 423, revenue: 5492.77 },
        { name: "Cashew Nuts", sold: 312, revenue: 5924.88 },
        { name: "Mixed Spice Pack", sold: 289, revenue: 6644.11 },
      ],
      categoryStats: [
        { name: "Rice & Grains", percentage: 28, sales: 27890 },
        { name: "Spices", percentage: 22, sales: 21890 },
        { name: "Oils", percentage: 18, sales: 17890 },
        { name: "Pulses", percentage: 15, sales: 14890 },
        { name: "Nuts & Dry Fruits", percentage: 12, sales: 11890 },
        { name: "Others", percentage: 5, sales: 4890 },
      ],
    },
    settings: {
      store: {
        name: "Purnawalla Foods",
        email: "support@purnawalla.com",
        phone: "+91 98765 43210",
        address: "123 Food Street, Mumbai, Maharashtra 400001",
        currency: "INR",
        timezone: "Asia/Kolkata",
      },
      notifications: {
        emailNotifications: true,
        orderAlerts: true,
        lowStockAlerts: true,
        customerReviews: false,
        promotions: true,
      },
      appearance: {
        theme: "light",
        primaryColor: "#3B82F6",
        accentColor: "#10B981",
      },
      delivery: {
        freeShippingThreshold: 500,
        standardDeliveryTime: "3-5 days",
        expressDeliveryTime: "1-2 days",
        deliveryCharge: 50,
      },
    },
  };

  // Calculate statistics
  const stats = {
    total: contentList.orderManagement.fields.length,
    pending: contentList.orderManagement.fields.filter(
      (o) => o.status === "Pending"
    ).length,
    shipped: contentList.orderManagement.fields.filter(
      (o) => o.status === "Shipped"
    ).length,
    delivered: contentList.orderManagement.fields.filter(
      (o) => o.status === "Delivered"
    ).length,
    cancelled: contentList.orderManagement.fields.filter(
      (o) => o.status === "Cancelled"
    ).length,
    revenue: contentList.orderManagement.fields
      .reduce((sum, o) => sum + o.total, 0)
      .toFixed(2),
  };

  const getStatusColor = (status) => {
    const colors = {
      Pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
      Confirmed: "bg-blue-100 text-blue-800 border-blue-200",
      Packed: "bg-purple-100 text-purple-800 border-purple-200",
      Cancelled: "bg-red-100 text-red-800 border-red-200",
      Shipped: "bg-orange-100 text-orange-800 border-orange-200",
      Delivered: "bg-green-100 text-green-800 border-green-200",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  if (active === "orderManagement") {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Order Management
            </h1>
            <p className="text-gray-600 mt-1">
              Manage and track all customer orders
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all">
            Export Orders
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">
                  Total Orders
                </p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stats.total}
                </p>
              </div>
              <FaShoppingCart className="text-4xl text-blue-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Pending</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stats.pending}
                </p>
              </div>
              <FaBox className="text-4xl text-yellow-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Shipped</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stats.shipped}
                </p>
              </div>
              <FaTruck className="text-4xl text-orange-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Delivered</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stats.delivered}
                </p>
              </div>
              <FaCheckCircle className="text-4xl text-green-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Cancelled</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stats.cancelled}
                </p>
              </div>
              <FaTimesCircle className="text-4xl text-red-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Revenue</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">
                  ${stats.revenue}
                </p>
              </div>
              <FaDollarSign className="text-4xl text-purple-500" />
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Table Header with Search */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
              <input
                type="text"
                placeholder="Search orders..."
                className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Qty
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Address
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
                {contentList[active].fields.map((order, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                          {order.username.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            {order.username}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-900 font-medium">
                        {order.product}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{order.qty}</span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-600 max-w-xs truncate">
                        {order.address}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <p className="text-sm font-semibold text-gray-900">
                        ${order.total}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border-2 ${getStatusColor(
                          order.status
                        )} cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        defaultValue={order.status}
                      >
                        {[
                          "Pending",
                          "Confirmed",
                          "Packed",
                          "Cancelled",
                          "Shipped",
                          "Delivered",
                        ].map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden divide-y divide-gray-200">
            {contentList[active].fields.map((order, index) => (
              <div
                key={index}
                className="p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                      {order.username.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-bold text-gray-900">
                        {order.username}
                      </p>
                      <p className="text-xs text-gray-500">{order.product}</p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      order.status
                    )
                      .split(" ")
                      .slice(0, 2)
                      .join(" ")}`}
                  >
                    {order.status}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quantity:</span>
                    <span className="font-medium">{order.qty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total:</span>
                    <span className="font-bold text-gray-900">
                      ${order.total}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Address:</span>
                    <p className="text-gray-900 text-xs mt-1">
                      {order.address}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing 1 to {contentList[active].fields.length} of{" "}
              {contentList[active].fields.length} orders
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Products Section
  if (active === "products") {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Products</h1>
            <p className="text-gray-600 mt-1">Manage your product inventory</p>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all flex items-center gap-2">
            <FaPlus /> Add New Product
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">
                  Total Products
                </p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {contentList.products.fields.length}
                </p>
              </div>
              <FaBox className="text-4xl text-blue-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">In Stock</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {
                    contentList.products.fields.filter(
                      (p) => p.status === "In Stock"
                    ).length
                  }
                </p>
              </div>
              <FaCheckCircle className="text-4xl text-green-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Low Stock</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {
                    contentList.products.fields.filter(
                      (p) => p.status === "Low Stock"
                    ).length
                  }
                </p>
              </div>
              <FaBox className="text-4xl text-yellow-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">
                  Out of Stock
                </p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {
                    contentList.products.fields.filter(
                      (p) => p.status === "Out of Stock"
                    ).length
                  }
                </p>
              </div>
              <FaTimesCircle className="text-4xl text-red-500" />
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-xl font-bold text-gray-900">All Products</h2>
              <div className="flex gap-3 w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="flex-1 sm:flex-none px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                />
                <select className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none">
                  <option>All Categories</option>
                  <option>Rice & Grains</option>
                  <option>Spices</option>
                  <option>Oils</option>
                  <option>Pulses</option>
                </select>
              </div>
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                    Product
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                    Stock
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                    Sold
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                    Rating
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {contentList.products.fields.map((product) => (
                  <tr
                    key={product.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="text-3xl mr-3">{product.image}</div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {product.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-600">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-semibold text-gray-900">
                        ${product.price}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">
                        {product.stock}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-600">
                        {product.sold}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400" />
                        <span className="text-sm font-medium">
                          {product.rating}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          product.status === "In Stock"
                            ? "bg-green-100 text-green-800"
                            : product.status === "Low Stock"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex gap-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <FaEye />
                        </button>
                        <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                          <FaEdit />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden divide-y divide-gray-200">
            {contentList.products.fields.map((product) => (
              <div
                key={product.id}
                className="p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <div className="text-3xl mr-3">{product.image}</div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        {product.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {product.category}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.status === "In Stock"
                        ? "bg-green-100 text-green-800"
                        : product.status === "Low Stock"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>
                <div className="space-y-2 text-sm mb-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-semibold">${product.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Stock:</span>
                    <span>{product.stock}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sold:</span>
                    <span>{product.sold}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Rating:</span>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span className="font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                    <FaEye /> View
                  </button>
                  <button className="flex-1 py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors flex items-center justify-center gap-2">
                    <FaEdit /> Edit
                  </button>
                  <button className="py-2 px-4 text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition-colors">
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Customers Section
  if (active === "customers") {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Customers</h1>
            <p className="text-gray-600 mt-1">
              Manage your customer relationships
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all">
            Export Customer List
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">
                  Total Customers
                </p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {contentList.customers.fields.length}
                </p>
              </div>
              <FaUsers className="text-4xl text-blue-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {
                    contentList.customers.fields.filter(
                      (c) => c.status === "Active"
                    ).length
                  }
                </p>
              </div>
              <FaCheckCircle className="text-4xl text-green-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">VIP</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {
                    contentList.customers.fields.filter(
                      (c) => c.status === "VIP"
                    ).length
                  }
                </p>
              </div>
              <FaStar className="text-4xl text-purple-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">
                  Total Revenue
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-2">
                  $
                  {contentList.customers.fields
                    .reduce((sum, c) => sum + c.totalSpent, 0)
                    .toFixed(2)}
                </p>
              </div>
              <FaDollarSign className="text-4xl text-orange-500" />
            </div>
          </div>
        </div>

        {/* Customers Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-xl font-bold text-gray-900">
                Customer Directory
              </h2>
              <input
                type="text"
                placeholder="Search customers..."
                className="w-full sm:w-auto px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                    Customer
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                    Contact
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                    Location
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                    Orders
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                    Total Spent
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {contentList.customers.fields.map((customer) => (
                  <tr
                    key={customer.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                          {customer.name.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            {customer.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            Joined: {customer.joinDate}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <p className="text-xs text-gray-900 flex items-center gap-2">
                          <FaEnvelope className="text-gray-400" />
                          {customer.email}
                        </p>
                        <p className="text-xs text-gray-600 flex items-center gap-2">
                          <FaPhone className="text-gray-400" />
                          {customer.phone}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <FaMapMarkerAlt className="text-gray-400" />
                        {customer.location}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-semibold text-gray-900">
                        {customer.orders}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-semibold text-green-600">
                        ${customer.totalSpent.toFixed(2)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          customer.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : customer.status === "VIP"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {customer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex gap-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <FaEye />
                        </button>
                        <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                          <FaEnvelope />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden divide-y divide-gray-200">
            {contentList.customers.fields.map((customer) => (
              <div
                key={customer.id}
                className="p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {customer.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-bold text-gray-900">
                        {customer.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {customer.location}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      customer.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : customer.status === "VIP"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {customer.status}
                  </span>
                </div>
                <div className="space-y-2 text-sm mb-3">
                  <p className="text-gray-600 flex items-center gap-2">
                    <FaEnvelope className="text-gray-400" />
                    {customer.email}
                  </p>
                  <p className="text-gray-600 flex items-center gap-2">
                    <FaPhone className="text-gray-400" />
                    {customer.phone}
                  </p>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span className="text-gray-600">Orders:</span>
                    <span className="font-semibold">{customer.orders}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Spent:</span>
                    <span className="font-semibold text-green-600">
                      ${customer.totalSpent.toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                    <FaEye /> View
                  </button>
                  <button className="flex-1 py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors flex items-center justify-center gap-2">
                    <FaEnvelope /> Email
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Analytics Section
  if (active === "analytics") {
    const { revenue, orders, topProducts, categoryStats } =
      contentList.analytics;

    const calculatePercentageChange = (current, previous) => {
      const change = ((current - previous) / previous) * 100;
      return change.toFixed(1);
    };

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
            <p className="text-gray-600 mt-1">
              Track your business performance
            </p>
          </div>
          <select className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none font-medium">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 3 Months</option>
            <option>Last Year</option>
          </select>
        </div>

        {/* Revenue Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl shadow-md text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold opacity-90">
                Today's Revenue
              </h3>
              <FaDollarSign className="text-3xl opacity-80" />
            </div>
            <p className="text-4xl font-bold mb-2">
              ${revenue.today.toLocaleString()}
            </p>
            <div className="flex items-center gap-2 text-sm">
              {revenue.today > revenue.yesterday ? (
                <>
                  <FaArrowUp className="text-green-300" />
                  <span className="text-green-300">
                    +
                    {calculatePercentageChange(
                      revenue.today,
                      revenue.yesterday
                    )}
                    %
                  </span>
                </>
              ) : (
                <>
                  <FaArrowDown className="text-red-300" />
                  <span className="text-red-300">
                    {calculatePercentageChange(
                      revenue.today,
                      revenue.yesterday
                    )}
                    %
                  </span>
                </>
              )}
              <span className="opacity-80">vs yesterday</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl shadow-md text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold opacity-90">This Week</h3>
              <FaChartLine className="text-3xl opacity-80" />
            </div>
            <p className="text-4xl font-bold mb-2">
              ${revenue.thisWeek.toLocaleString()}
            </p>
            <div className="flex items-center gap-2 text-sm">
              {revenue.thisWeek > revenue.lastWeek ? (
                <>
                  <FaArrowUp className="text-green-300" />
                  <span className="text-green-300">
                    +
                    {calculatePercentageChange(
                      revenue.thisWeek,
                      revenue.lastWeek
                    )}
                    %
                  </span>
                </>
              ) : (
                <>
                  <FaArrowDown className="text-red-300" />
                  <span className="text-red-300">
                    {calculatePercentageChange(
                      revenue.thisWeek,
                      revenue.lastWeek
                    )}
                    %
                  </span>
                </>
              )}
              <span className="opacity-80">vs last week</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl shadow-md text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold opacity-90">This Month</h3>
              <FaDollarSign className="text-3xl opacity-80" />
            </div>
            <p className="text-4xl font-bold mb-2">
              ${revenue.thisMonth.toLocaleString()}
            </p>
            <div className="flex items-center gap-2 text-sm">
              {revenue.thisMonth > revenue.lastMonth ? (
                <>
                  <FaArrowUp className="text-green-300" />
                  <span className="text-green-300">
                    +
                    {calculatePercentageChange(
                      revenue.thisMonth,
                      revenue.lastMonth
                    )}
                    %
                  </span>
                </>
              ) : (
                <>
                  <FaArrowDown className="text-red-300" />
                  <span className="text-red-300">
                    {calculatePercentageChange(
                      revenue.thisMonth,
                      revenue.lastMonth
                    )}
                    %
                  </span>
                </>
              )}
              <span className="opacity-80">vs last month</span>
            </div>
          </div>
        </div>

        {/* Orders Stats */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Order Statistics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-gray-600 text-sm font-medium mb-2">Today</p>
              <p className="text-4xl font-bold text-blue-600">{orders.today}</p>
              <p className="text-sm text-gray-500 mt-1">
                {orders.today > orders.yesterday ? "+" : ""}
                {calculatePercentageChange(orders.today, orders.yesterday)}% vs
                yesterday
              </p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm font-medium mb-2">
                This Week
              </p>
              <p className="text-4xl font-bold text-green-600">
                {orders.thisWeek}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {orders.thisWeek > orders.lastWeek ? "+" : ""}
                {calculatePercentageChange(orders.thisWeek, orders.lastWeek)}%
                vs last week
              </p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm font-medium mb-2">
                This Month
              </p>
              <p className="text-4xl font-bold text-purple-600">
                {orders.thisMonth}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {orders.thisMonth > orders.lastMonth ? "+" : ""}
                {calculatePercentageChange(orders.thisMonth, orders.lastMonth)}%
                vs last month
              </p>
            </div>
          </div>
        </div>

        {/* Top Products and Category Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Products */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Top Selling Products
            </h2>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {product.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {product.sold} units sold
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">
                      ${product.revenue.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Distribution */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Sales by Category
            </h2>
            <div className="space-y-4">
              {categoryStats.map((category, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">
                      {category.name}
                    </span>
                    <span className="text-sm font-semibold text-gray-600">
                      {category.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all"
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    ${category.sales.toLocaleString()} in sales
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Settings Section
  if (active === "settings") {
    const { store, notifications, appearance, delivery } = contentList.settings;

    return (
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">Manage your store configuration</p>
        </div>

        {/* Store Information */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-100 rounded-lg">
              <FaBox className="text-2xl text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Store Information
              </h2>
              <p className="text-sm text-gray-600">
                Basic details about your store
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Store Name
              </label>
              <input
                type="text"
                defaultValue={store.name}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                defaultValue={store.email}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                defaultValue={store.phone}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Currency
              </label>
              <select
                defaultValue={store.currency}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
              >
                <option value="INR">INR - Indian Rupee</option>
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <textarea
                defaultValue={store.address}
                rows={3}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-100 rounded-lg">
              <FaBell className="text-2xl text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
              <p className="text-sm text-gray-600">
                Configure your notification preferences
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {Object.entries(notifications).map(([key, value]) => (
              <div
                key={key}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-900 capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </p>
                  <p className="text-sm text-gray-500">
                    Receive notifications for{" "}
                    {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked={value}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-purple-100 rounded-lg">
              <FaPalette className="text-2xl text-purple-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Appearance</h2>
              <p className="text-sm text-gray-600">
                Customize your store's look and feel
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Theme
              </label>
              <select
                defaultValue={appearance.theme}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="auto">Auto</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary Color
              </label>
              <input
                type="color"
                defaultValue={appearance.primaryColor}
                className="w-full h-10 border-2 border-gray-200 rounded-lg cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Accent Color
              </label>
              <input
                type="color"
                defaultValue={appearance.accentColor}
                className="w-full h-10 border-2 border-gray-200 rounded-lg cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Delivery Settings */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-orange-100 rounded-lg">
              <FaTruck className="text-2xl text-orange-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Delivery Settings
              </h2>
              <p className="text-sm text-gray-600">
                Configure delivery options and charges
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Free Shipping Threshold
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-500">
                  {store.currency === "INR" ? "₹" : "$"}
                </span>
                <input
                  type="number"
                  defaultValue={delivery.freeShippingThreshold}
                  className="w-full pl-8 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Standard Delivery Charge
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-500">
                  {store.currency === "INR" ? "₹" : "$"}
                </span>
                <input
                  type="number"
                  defaultValue={delivery.deliveryCharge}
                  className="w-full pl-8 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Standard Delivery Time
              </label>
              <input
                type="text"
                defaultValue={delivery.standardDeliveryTime}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Express Delivery Time
              </label>
              <input
                type="text"
                defaultValue={delivery.expressDeliveryTime}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end gap-3">
          <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all">
            Cancel
          </button>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-md transition-all">
            Save Changes
          </button>
        </div>
      </div>
    );
  }

  // Fallback for undefined sections
  return (
    <div className="bg-white rounded-xl shadow-md p-12 text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-4">
        <FaBox className="text-4xl text-gray-400" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 capitalize">
        {active}
      </h3>
      <p className="text-gray-600">This section is coming soon!</p>
    </div>
  );
};

export default AdminContent;
