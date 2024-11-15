import React from "react";
import Profile from "./Profile";

const DashboardScreen = () => {
  return (
    <div className="dashboard bg-gray-950 py-5 px-4 w-[20%] h-full flex flex-col rounded-sm fixed left-0">
      <Profile />
    </div>
  );
};

export default DashboardScreen;
