import React, { useState } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminContent from '../components/AdminContent';

const AdminPanel = () => {
  const [active, setActive] = useState("dashboard");
  return (
    <div className="profileContainer flex flex-col gap-2 flex-1 p-5 pb-80">
      <AdminSidebar setActive={setActive} />
      <AdminContent active={active} />
    </div>
  )
}

export default AdminPanel