import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping, FaUserGroup } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-(--primary-color) text-white">
      <div className="container headerContainer flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 relative">
        <Link to={"/"} className="w-20 sm:w-[100px] md:w-[120px]">
          <img src="image2.svg" alt="brand logo" />
        </Link>
        <ul className="gap-7 font-medium hidden md:flex">
          <li>
            <Link to={"/"} className="hover:text-neutral-500">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/products"} className="hover:text-neutral-500">
              Products
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="hover:text-neutral-500">
              Contact Us
            </Link>
          </li>
          {
            isAdmin && (<li>
              <Link to={"/admin"} className="hover:text-neutral-500">
                Admin Panel</Link>
            </li>)
          }

        </ul>
        <div className="headersButton hidden md:flex items-center gap-6">
          <Link to={"/profile"} className="text-[32px]">
            <FaUserGroup />
          </Link>
          <Link to={"/cart"} className="text-[32px] relative">
            <FaCartShopping />
            <div className="w-3 h-3 rounded-full border absolute top-0 right-0 bg-(--secondary-color)"></div>
          </Link>
        </div>
        <div
          className="mobileNav md:hidden text-2xl sm:text-3xl cursor-pointer"
          onClick={toggleMenu}
        >
          <IoMenu />
        </div>
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
