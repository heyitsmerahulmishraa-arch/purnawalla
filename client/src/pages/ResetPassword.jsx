import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FaLock, FaEye, FaEyeSlash, FaCheckCircle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { token } = useParams(); // Get reset token from URL
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  const checkPasswordStrength = (password) => {
    if (password.length === 0) {
      setPasswordStrength("");
      return;
    }
    if (password.length < 6) {
      setPasswordStrength("weak");
    } else if (password.length < 10) {
      setPasswordStrength("medium");
    } else {
      setPasswordStrength("strong");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword } = e.target.elements;

    if (password.value !== confirmPassword.value) {
      toast.error("Passwords do not match!");
      return;
    }

    if (password.value.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }

    setIsLoading(true);

    try {
      // Replace with your actual API endpoint
      await axios.post(
        `http://localhost:3000/api/auth/reset-password/${token}`,
        {
          password: password.value,
        }
      );
      toast.success("Password reset successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      console.error("Reset Password Error:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to reset password. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case "weak":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "strong":
        return "bg-green-500";
      default:
        return "bg-gray-200";
    }
  };

  const getStrengthWidth = () => {
    switch (passwordStrength) {
      case "weak":
        return "w-1/3";
      case "medium":
        return "w-2/3";
      case "strong":
        return "w-full";
      default:
        return "w-0";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaLock className="text-4xl text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Reset Password
            </h2>
            <p className="text-gray-600">Enter your new password below</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* New Password Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                New Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  name="password"
                  required
                  minLength="6"
                  onChange={(e) => checkPasswordStrength(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all text-gray-900"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Password Strength Indicator */}
              {passwordStrength && (
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-gray-600">
                      Password Strength:
                    </span>
                    <span
                      className={`text-xs font-semibold capitalize ${
                        passwordStrength === "weak"
                          ? "text-red-600"
                          : passwordStrength === "medium"
                          ? "text-yellow-600"
                          : "text-green-600"
                      }`}
                    >
                      {passwordStrength}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full ${getStrengthColor()} ${getStrengthWidth()} transition-all duration-300`}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                  name="confirmPassword"
                  required
                  minLength="6"
                  className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-all text-gray-900"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Password Requirements */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-xs font-semibold text-blue-900 mb-2">
                Password Requirements:
              </p>
              <ul className="space-y-1">
                <li className="text-xs text-blue-800 flex items-center gap-2">
                  <FaCheckCircle className="text-blue-600 text-xs" />
                  At least 6 characters long
                </li>
                <li className="text-xs text-blue-800 flex items-center gap-2">
                  <FaCheckCircle className="text-blue-600 text-xs" />
                  Mix of letters and numbers recommended
                </li>
                <li className="text-xs text-blue-800 flex items-center gap-2">
                  <FaCheckCircle className="text-blue-600 text-xs" />
                  Avoid common passwords
                </li>
              </ul>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  Resetting Password...
                </span>
              ) : (
                "Reset Password"
              )}
            </button>
          </form>

          {/* Back to Login */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              Remember your password?{" "}
              <Link
                to="/login"
                className="text-purple-600 hover:text-purple-700 font-semibold"
              >
                Back to Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
