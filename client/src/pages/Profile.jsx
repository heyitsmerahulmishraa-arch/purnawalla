import React, { useEffect, useState } from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import ProfileContent from "../components/ProfileContent";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const Profile = () => {
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);

  const [active, setActive] = useState("accountDetails");
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/auth/user/${decodedToken.userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Response Data:", response.data);
        setUser(response.data);
        console.log("User Data:", response.data.name);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            My Account
          </h1>
          <p className="text-gray-600">
            Manage your profile and view your order history
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          <ProfileSidebar active={active} setActive={setActive} user={user} />
          <ProfileContent active={active} user={user} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
