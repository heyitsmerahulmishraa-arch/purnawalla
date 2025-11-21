import React, { useState } from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import ProfileContent from "../components/ProfileContent";

const Profile = () => {
  const [active, setActive] = useState("accountDetails");
  return (
    <div className="mainContainer flex flex-col gap-2 flex-1 p-5 pb-80 md:flex-row">
      <ProfileSidebar setActive={setActive} />
      <ProfileContent active={active} />
    </div>
  );
};

export default Profile;
