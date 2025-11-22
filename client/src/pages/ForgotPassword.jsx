import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email } = e.target.elements;
    setIsLoading(true);

    try {
      // Replace with your actual API endpoint
      await axios.post("http://localhost:3000/api/auth/forgot-password", {
        email: email.value,
      });
      setEmailSent(true);
      toast.success("Password reset link sent to your email!");
    } catch (error) {
      console.error("Forgot Password Error:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to send reset link. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="max-w-md w-full">
        {/* Back to Login Link */}
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors"
        >
          <FaArrowLeft />
          <span>Back to Login</span>
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
          {!emailSent ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaEnvelope className="text-4xl text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Forgot Password?
                </h2>
                <p className="text-gray-600">
                  No worries! Enter your email and we'll send you reset
                  instructions.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all text-gray-900"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending Link...
                    </span>
                  ) : (
                    "Send Reset Link"
                  )}
                </button>
              </form>
            </>
          ) : (
            <>
              {/* Success Message */}
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Check Your Email
                </h2>
                <p className="text-gray-600 mb-6">
                  We've sent a password reset link to your email address. Please
                  check your inbox and follow the instructions.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                  <p className="text-sm text-blue-800">
                    <strong>Didn't receive the email?</strong> Check your spam
                    folder or try again in a few minutes.
                  </p>
                </div>
                <button
                  onClick={() => setEmailSent(false)}
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Try another email
                </button>
              </div>
            </>
          )}

          {/* Additional Help */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              Need help?{" "}
              <Link
                to="/contact"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Contact Support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
