import React, { useState } from "react";
import {
  FaShoppingCart,
  FaBox,
  FaUsers,
  FaChartLine,
  FaCog,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const AdminSidebar = ({ active, setActive }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const options = [
    {
      id: "1",
      name: "orderManagement",
      label: "Order Management",
      icon: <FaShoppingCart />,
    },
    { id: "2", name: "products", label: "Products", icon: <FaBox /> },
    { id: "3", name: "customers", label: "Customers", icon: <FaUsers /> },
    { id: "4", name: "analytics", label: "Analytics", icon: <FaChartLine /> },
    { id: "5", name: "settings", label: "Settings", icon: <FaCog /> },
  ];

  const handleOptionClick = (optionName) => {
    setActive(optionName);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-20 left-4 z-50 bg-blue-600 text-white p-3 rounded-lg shadow-lg"
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed lg:sticky top-0 left-0 h-screen w-64 bg-white shadow-xl z-40
        transform transition-transform duration-300 ease-in-out
        ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
      `}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Admin Panel</h2>
          <p className="text-sm text-gray-500 mt-1">Manage your store</p>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            {options.map((opt) => (
              <li key={opt.id}>
                <button
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg
                    transition-all duration-200 font-medium
                    ${
                      active === opt.name
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-100"
                    }
                  `}
                  onClick={() => handleOptionClick(opt.name)}
                >
                  <span className="text-xl">{opt.icon}</span>
                  <span>{opt.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-xs font-semibold text-blue-900">Need Help?</p>
            <p className="text-xs text-blue-700 mt-1">
              Contact support@foodmasala.com
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
