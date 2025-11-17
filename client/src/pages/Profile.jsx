import React, { useState } from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import ProfileContent from "../components/ProfileContent";

const Profile = ({activeValue}) => {


  
  return (
    <div className="mainContainer flex">
      <ProfileSidebar />
      <ProfileContent/>
    </div>
  );
};

export default Profile;
