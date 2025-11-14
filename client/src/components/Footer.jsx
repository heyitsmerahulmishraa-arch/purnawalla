import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[var(--primary-color)] text-white">
        <div className="container flex justify-between py-10 px-4">
      <div className="brandDetails flex flex-col gap-6">
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
        <div className="footerLinksContainer flex gap-[80px]">
            <div className="links">
                <p className="mb-3">Links</p>
                <ul>
                    <li><Link to={"/about"}>About Us</Link></li>
                    <li><Link to={"/privacy-policy"}>Privacy Policy</Link></li>
                    <li><Link to={"/returns"}>Returns & Refund</Link></li>
                    <li><Link to={"/terms-condition"}>Terms & Condition</Link></li>
                    <li><Link to={"/shipping-policy"}>Shipping Policy</Link></li>
                </ul>
            </div>
            <div className="links">
                <p className="mb-3">Help</p>
                <ul>
                    <li><Link to={"/track-order"}>Track your order</Link></li>
                    <li><Link to={"/sign-up"}>Sign Up</Link></li>
                    <li><Link to={"/log-in"}>Log In</Link></li>
                    <li><Link to={"/account"}>My Account</Link></li>
                </ul>
            </div>
            <div className="links">
                <p className="mb-3">Available exclusively at</p>
                <ul>
                    <li><Link to={"/contact"}>My Store</Link></li>
                </ul>
            </div>
        </div>
    </div>
    </footer>
  );
};

export default Footer;
