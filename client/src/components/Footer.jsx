import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-(--primary-color) text-white">
        <div className="container flex flex-col md:flex-row justify-between gap-8 py-10 px-4 sm:px-6 md:px-8">
      <div className="brandDetails flex flex-col gap-6 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px]">
        <div className="brandAddressContainer flex gap-3">
          <div className="icon">
            <FaLocationDot />
          </div>
          <p className="max-w-[300px] ">
            Food Masala PVT.LTD., XZY City Gandhi Nagar, Next to Bank of India
            Road New York, Delhi - 112233. India
          </p>
        </div>
        <div className="brandContactContainer flex gap-3">
          <div className="icon">
            <FaPhone />
          </div>
          <p className="max-w-[300px] ">1234567890 (Mon to Sat 10am to 6pm) foodmasalasupport@gmail.com</p>
        </div>
      </div>
        <div className="footerLinksContainer flex flex-wrap sm:justify-between gap-8">
            <div className="links">
                <p className="mb-1 sm:mb-2 md:mb-3 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">Links</p>
                <ul>
                    <li className="text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px] mb-1"><Link to={"/about"}>About Us</Link></li>
                    <li className="text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px] mb-1"><Link to={"/privacy-policy"}>Privacy Policy</Link></li>
                    <li className="text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px] mb-1"><Link to={"/returns"}>Returns & Refund</Link></li>
                    <li className="text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px] mb-1"><Link to={"/terms-condition"}>Terms & Condition</Link></li>
                    <li className="text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px] mb-1"><Link to={"/shipping-policy"}>Shipping Policy</Link></li>
                </ul>
            </div>
            <div className="links">
                <p className="mb-1 sm:mb-2 md:mb-3 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">Help</p>
                <ul>
                    <li className="text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px] mb-1"><Link to={"/track-order"}>Track your order</Link></li>
                    <li className="text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px] mb-1"><Link to={"/register"}>Sign Up</Link></li>
                    <li className="text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px] mb-1"><Link to={"/login"}>Log In</Link></li>
                    <li className="text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px] mb-1"><Link to={"/account"}>My Account</Link></li>
                </ul>
            </div>
            <div className="links">
                <p className="mb-1 sm:mb-2 md:mb-3 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">Available exclusively at</p>
                <ul>
                    <li className="text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px] mb-1"><Link to={"/contact"}>My Store</Link></li>
                </ul>
            </div>
        </div>
    </div>
    </footer>
  );
};

export default Footer;
