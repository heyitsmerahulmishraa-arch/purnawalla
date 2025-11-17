import React, { useState } from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import ProfileContent from "../components/ProfileContent";

const Profile = () => {
  const [active, setActive] = useState("accountDetails");
  return (
    <div className="mainContainer flex">
      <ProfileSidebar setActive={setActive} />
      <ProfileContent active={active} />
    </div>
  );
};

export default Profile;
