import React, { useState } from "react";
import ProductCard from "./ProductCard";


const Profile = () => {
  const [activeOption, setActiveOption] = useState['acount details']
  const option = [
    { id: "account dailts" },

    { id: " profiel" },

    { id: "user detailss" },

    { id: "account dailts" },
  ];
  return (
    <div>
      <div className="profileMaincontainer flex ">
        <div className="sidebar w-[300px] flex flex-col  border min-h-[500px]">
          <div className="border-b px-[10px] py-[18px]">
            <h3 className="font-bold text-2xl uppercase tracking-wide">
              account dailts
            </h3>
          </div>
          <div className="border-b px-[10px] py-[18px]">
            <h3 className="font-bold text-2xl uppercase tracking-wide">
              profiel
            </h3>
          </div>
          <div className="border-b px-[10px] py-[18px]">
            <h3 className="font-bold text-2xl uppercase tracking-wide">
              user details
            </h3>
          </div>
          <div className="border-b px-[10px] py-[18px]">
            <h3 className="font-bold text-2xl uppercase tracking-wide">
              product details
            </h3>
          </div>
          <div className="border-b px-[10px] py-[18px]">
            <h3 className="font-bold text-2xl uppercase tracking-wide">
              pa
            </h3>
          </div>
        </div>
        <div className="maincontainer min-h-[500px] border">
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
