import React, { useState } from "react";

const ProfileSidebar = ({ setActive }) => {
  const [activeOption, setActiveOption] = useState("accountDetails");
  const options = [
    { id: "1", name: "accountDetails" },
    { id: "2", name: "profile" },
    { id: "3", name: "userDetails" },
    { id: "4", name: "productDetails" },
    { id: "5", name: "register" },
    { id: "6", name: "logOut" },
  ];

  return (
    <div>
      <aside className="sidebar w-64 border-r h-full border-(--border-color)">
        <ul className="menu-list p-4">
          {options.map((opt) => (
            <li
              key={opt.id}
              className={`p-2 mb-2 cursor-pointer hover:bg-gray-200 capitalize ${
                activeOption === opt.name ? "bg-gray-300 font-bold" : ""
              }`}
              onClick={() => {
                setActiveOption(opt.name);
                setActive(opt.name);
              }}
            >
              {opt.name}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default ProfileSidebar;
