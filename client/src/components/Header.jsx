import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping, FaUserGroup } from "react-icons/fa6";
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [userDetails, setUserDetails] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto headerContainer flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 relative">
        <Link
          to={"/"}
          className="w-24 sm:w-28 md:w-32 lg:w-36 transition-transform hover:scale-105"
        >
          <img src="image2.svg" alt="brand logo" className="w-full" />
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            to={"/"}
            className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all"
          >
            Home
          </Link>
          <Link
            to={"/products"}
            className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all"
          >
            Products
          </Link>
          <Link
            to={"/contact"}
            className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all"
          >
            Contact Us
          </Link>
          {isAdmin && (
            <Link
              to={"/admin"}
              className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all"
            >
              Admin Panel
            </Link>
          )}
        </nav>
        <div className="headersButton hidden lg:flex items-center gap-3">
          <Link
            to={"/profile"}
            className="p-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all group relative"
          >
            <FaUserGroup className="text-2xl" />
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Profile
            </span>
          </Link>
          <Link
            to={"/cart"}
            className="p-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all relative group"
          >
            <FaCartShopping className="text-2xl" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
              3
            </span>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Cart
            </span>
          </Link>
        </div>
        <button
          className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <IoClose className="text-3xl" />
          ) : (
            <IoMenu className="text-3xl" />
          )}
        </button>
        {isMenuOpen && (
          <div className="mobileNavMenu border-t border-(--border-color) absolute top-full left-0 w-full bg-(--primary-color) text-white px-4 py-6 z-10 ">
            <div className="mobileNavContainer">
              <ul className="flex flex-col font-medium">
                <li className="hover:border p-2 border-(--border-color)">
                  <Link to={"/"} className="hover:text-neutral-500">
                    Home
                  </Link>
                </li>
                <li className="hover:border p-2 border-(--border-color)">
                  <Link to={"/products"} className="hover:text-neutral-500">
                    Products
                  </Link>
                </li>
                <li className="hover:border p-2 border-(--border-color)">
                  <Link to={"/category"} className="hover:text-neutral-500">
                    Category
                  </Link>
                </li>
                <li className="hover:border p-2 border-(--border-color)">
                  <Link to={"/contact"} className="hover:text-neutral-500">
                    Contact Us
                  </Link>
                </li>
                <li className="hover:border p-2 border-(--border-color)">
                  <Link to={"/profile"} className="hover:text-neutral-500">
                    Profile
                  </Link>
                </li>
                <li className="hover:border p-2 border-(--border-color)">
                  <Link to={"/register"} className="hover:text-neutral-500">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
