import React from "react";
import Profile from "./Profile";

const DashboardScreen = () => {
  return (
    <div className="contents-area lg:ml-[calc(20%+14px)] lg:w-[calc(80%-28px)] w-full mt-[14px]">
      <div className="area-row are-one mt-[14px] lg:grid lg:grid-cols-[4fr_3fr] flex flex-wrap gap-[14px]">
        <div className="area-row ar-two lg:grid lg:grid-cols-[3fr_2fr_2fr] flex flex-wrap">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
