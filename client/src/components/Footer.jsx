import React, { useState } from "react";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-blue-100">
                Get the latest updates on new products and exclusive offers!
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="flex w-full md:w-auto gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Details */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-xl font-bold mb-4">Food Masala</h3>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex gap-3 items-start">
                <FaLocationDot className="text-blue-500 mt-1 shrink-0" />
                <p className="text-gray-400">
                  Food Masala PVT.LTD., XZY City Gandhi Nagar, Next to Bank of
                  India Road, New York, Delhi - 112233. India
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <FaPhone className="text-blue-500 mt-1 shrink-0" />
                <p className="text-gray-400">
                  <span className="block font-semibold text-white">
                    1234567890
                  </span>
                  <span className="text-xs">(Mon to Sat 10am to 6pm)</span>
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <FaEnvelope className="text-blue-500 mt-1 shrink-0" />
                <a
                  href="mailto:foodmasalasupport@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  foodmasalasupport@gmail.com
                </a>
              </div>
            </div>
            {/* Social Media */}
            <div className="mt-6">
              <p className="text-white font-semibold mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all"
                >
                  <FaFacebook className="text-lg" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-all"
                >
                  <FaTwitter className="text-lg" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all"
                >
                  <FaInstagram className="text-lg" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all"
                >
                  <FaLinkedin className="text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to={"/about"}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={"/privacy-policy"}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to={"/returns"}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Returns & Refund
                </Link>
              </li>
              <li>
                <Link
                  to={"/terms-condition"}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link
                  to={"/shipping-policy"}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">
              Customer Service
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to={"/track-order"}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link
                  to={"/register"}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  to={"/login"}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  to={"/account"}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Store Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">
              Store Information
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to={"/contact"}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Visit Our Store
                </Link>
              </li>
              <li>
                <span className="text-gray-400 text-sm block">
                  Available exclusively at selected locations
                </span>
              </li>
            </ul>
            {/* Payment Methods */}
            <div className="mt-6">
              <p className="text-white font-semibold mb-3 text-sm">We Accept</p>
              <div className="flex flex-wrap gap-2">
                <div className="bg-gray-800 px-3 py-1.5 rounded text-xs font-semibold">
                  Visa
                </div>
                <div className="bg-gray-800 px-3 py-1.5 rounded text-xs font-semibold">
                  Mastercard
                </div>
                <div className="bg-gray-800 px-3 py-1.5 rounded text-xs font-semibold">
                  PayPal
                </div>
                <div className="bg-gray-800 px-3 py-1.5 rounded text-xs font-semibold">
                  UPI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2025 Food Masala PVT.LTD. All rights reserved.</p>
            <p>Made with ❤️ in India</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
