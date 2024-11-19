import React from "react";
import QuickStastics from "./QuickStastics";
import TotalRevenue from "./TotalRevenue";
import Stastics from "./Stastics";
import Earning from "./Earning";
import SocialMedia from "./SocialMedia";
import TodayTasks from "./TodayTasks";
import GoogleMap from "./libses/GoogleMap";
import Charts from "./libses/Charts";

const Main = () => {
  return (
    <div className="main ml-[calc(20%+5px)] w-[calc(80%-20px)] mt-[14px] ">
      <div className="mui bg-gray-400 mx-1 my-1">
        <div className="mt-[14px] grid grid-cols-[4fr_3fr] flex-wrap gap-[10px]">
          <QuickStastics />
          <TotalRevenue />
        </div>
        <div className="mt-[14px] grid grid-cols-[4fr_3fr] w-full flex-wrap gap-[14px]">
          <Stastics />
          <Earning />
          <SocialMedia />
          <TodayTasks />
        </div>
      </div>
      <div className="libs bg-gray-400 mx-1 my-1">
        <div className="mt-[14px] grid grid-cols-[4fr_3fr] flex-wrap gap-[10px]">
          <GoogleMap />
          <Charts />
        </div>
      </div>
    </div>
  );
};

export default Main;
