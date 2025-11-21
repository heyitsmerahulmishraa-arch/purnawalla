import React, { useState } from "react";

const ProfileSidebar = ({ setActive }) => {
  const [activeOption, setActiveOption] = useState("accountDetails");

  const options = [
    { id: "1", name: "accountDetails" },
    { id: "2", name: "orderHistory" },
    { id: "3", name: "logOut" },
  ];

  return (
    <div>
      <aside className="sidebar sm:border-b md:border-r md:border-b-0 w-full h-full border-(--border-color)">
        <ul className="menu-list p-4 flex md:flex-col text-[14px] md:text-[16px] gap-2">
          {options.map((opt) => (
            <li
              key={opt.id}
              className={`w-fit p-2 mb-2 cursor-pointer hover:bg-gray-200 capitalize ${
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
