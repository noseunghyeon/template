import React from "react";
import QuickStastics from "./QuickStastics";
import TotalRevenue from "./TotalRevenue";
import Stastics from "./Stastics";

const Main = () => {
  return (
    <div className="main ml-[calc(20%+14px)] w-[calc(80%-28px)] mt-[14px]">
      <div className="mt-[14px] grid grid-cols-[4fr_3fr] flex-wrap gap-[14px]">
        <QuickStastics />
        <TotalRevenue />
      </div>
      <div className="mt-[14px] grid grid-cols-[4fr_3fr] flex-wrap gap-[14px]">
        <Stastics />
      </div>
    </div>
  );
};

export default Main;
