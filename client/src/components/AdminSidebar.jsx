import React, { useState } from 'react'

const AdminSidebar = ({ setActive }) => {
    const [activeOption, setActiveOption] = useState("orderManagement");

    const options = [
        { id: "1", name: "orderManagement" },
      ];

    const handleOptionClick = (optionName) => {
        setActiveOption(optionName);
        // Additional logic for handling option click can be added here
    }

  return (
    <div>
      <aside className="sidebar h-full border-b border-(--border-color) w-full">
        <ul className="menu-list p-4">
            {options.map((opt) => (
            <li
              key={opt.id}
              className={`py-2 px-4 mb-2 w-fit cursor-pointer hover:bg-gray-200 capitalize ${activeOption === opt.name ? "bg-gray-300" : ""}`}
              onClick={() => {
                handleOptionClick(opt.name);
                setActive(opt.name);
              }}
            >
              {opt.name}
            </li>
            ))}
        </ul>
      </aside>
    </div>
  )
}

export default AdminSidebar