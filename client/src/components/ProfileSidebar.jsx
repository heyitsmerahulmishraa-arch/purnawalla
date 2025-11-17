import React, { useState } from 'react'

const ProfileSidebar = () => {

    const [activeOption, setActiveOption] = useState('accountDetails');

    const options = [
        {id: '1', name: 'accountDetails'},
        {id: '2', name: 'profile'},
        {id: '3', name: 'userDetails'},
        {id: '4', name: 'productDetails'},
    ];

  return (
    <div>
        <aside className="sidebar w-64 border-r min-h-[500px]">
            <ul className="menu-list p-4">
                {options.map((opt) => (
                    <li key={opt.id}
                        className={`p-2 mb-2 cursor-pointer hover:bg-gray-200 ${
                            activeOption === opt.name ? "bg-gray-300 font-bold" : ""
                        }`}
                        onClick={() => setActiveOption(opt.name)}
                    >
                        {opt.name}
                    </li>
                ))}
            </ul>
        </aside>
    </div>
  )
}

export default ProfileSidebar