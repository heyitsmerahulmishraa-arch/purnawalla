import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminContent from "../components/AdminContent";

const AdminPanel = () => {
  const [active, setActive] = useState("orderManagement");
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col lg:flex-row">
        <AdminSidebar active={active} setActive={setActive} />
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          <AdminContent active={active} />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
