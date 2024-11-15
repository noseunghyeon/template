import React from "react";
import Profile from "./Profile";
import Appication from "./Appication";
import MuiComponent from "./MuiComponent";
import LIBS from "./LIBS";

const DashboardScreen = () => {
  return (
    <div className="dashboard bg-gray-950 py-5 px-4 w-[20%] h-full flex flex-col rounded-sm fixed left-0">
      <div className="">
        <Profile />
        <Appication />
        <MuiComponent />
        <LIBS />
      </div>
    </div>
  );
};

export default DashboardScreen;
