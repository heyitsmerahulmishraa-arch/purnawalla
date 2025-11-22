import React from "react";
import {
  FaUser,
  FaShoppingBag,
  FaSignOutAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const ProfileSidebar = ({ active, setActive, user }) => {
  const options = [
    {
      id: "1",
      name: "accountDetails",
      label: "Account Details",
      icon: <FaUser />,
    },
    {
      id: "2",
      name: "orderHistory",
      label: "Order History",
      icon: <FaShoppingBag />,
    },
    { id: "3", name: "logOut", label: "Log Out", icon: <FaSignOutAlt /> },
  ];

  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <aside className="lg:w-80 w-full shrink-0">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* User Profile Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-blue-600 text-3xl font-bold mb-4 shadow-lg">
              {getInitials(user?.name)}
            </div>
            <h3 className="text-xl font-bold mb-1">
              {user?.name || "Loading..."}
            </h3>
            <p className="text-blue-100 text-sm flex items-center gap-2 mb-1">
              <FaEnvelope className="text-xs" />
              {user?.email || "email@example.com"}
            </p>
            {user?.phone && (
              <p className="text-blue-100 text-sm flex items-center gap-2">
                <FaPhone className="text-xs" />
                {user.phone}
              </p>
            )}
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4">
          <ul className="space-y-2">
            {options.map((opt) => (
              <li key={opt.id}>
                <button
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg
                    transition-all duration-200 font-medium text-left
                    ${
                      active === opt.name
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-100"
                    }
                  `}
                  onClick={() => setActive(opt.name)}
                >
                  <span className="text-xl">{opt.icon}</span>
                  <span>{opt.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Account Stats */}
        <div className="p-4 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs font-semibold text-gray-600 uppercase mb-2">
              Account Status
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-900">
                Active Member
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
