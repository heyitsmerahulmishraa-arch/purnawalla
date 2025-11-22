import React, { useState } from "react";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your submit logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"></div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Location Card */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <FaLocationDot className="text-2xl text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Our Location
            </h3>
            <p className="text-gray-600 text-sm">
              Gandhi Nagar, Next to Bank of India, Delhi - 112233
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <FaPhone className="text-2xl text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Phone Number
            </h3>
            <p className="text-gray-600 text-sm">+91 1234567890</p>
          </div>

          {/* Email Card */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <FaEnvelope className="text-2xl text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Email Address
            </h3>
            <p className="text-gray-600 text-sm break-all">
              foodmasalasupport@gmail.com
            </p>
          </div>

          {/* Working Hours Card */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <FaClock className="text-2xl text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Working Hours
            </h3>
            <p className="text-gray-600 text-sm">
              Mon - Sat: 10:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        {/* Main Content: Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all text-gray-900"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all text-gray-900"
                  required
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all text-gray-900 resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                <span>Send Message</span>
              </button>
            </form>

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                We typically respond within 24 hours during business days
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-white p-4 rounded-2xl shadow-xl overflow-hidden">
            <div className="h-full min-h-[500px] lg:min-h-full rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d915571.8526960415!2d80.34387596406249!3d26.311841712179927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1763129143624!5m2!1sen!2sin"
                loading="lazy"
                title="Food Masala Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white p-8 md:p-12 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                What are your delivery areas?
              </h3>
              <p className="text-gray-600">
                We deliver across India. Delivery times may vary based on your
                location.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                How can I track my order?
              </h3>
              <p className="text-gray-600">
                You can track your order from the "My Orders" section in your
                account.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit/debit cards, UPI, and cash on
                delivery.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Do you offer bulk orders?
              </h3>
              <p className="text-gray-600">
                Yes! Contact us for special pricing on bulk orders and wholesale
                inquiries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
