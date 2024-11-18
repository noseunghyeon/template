import React from "react";

const MuiComponent = () => {
  return (
    <div className="muicomponent my-4 bg-gray-800 px-2 rounded-sm">
      <h2 className="text-[24px]">muicomponent</h2>
      <div className="ml-4 text-gray-400">
        <div className="QuickStastics hover:text-gray-100">quick stastics</div>
        <div className="TotalRevenue hover:text-gray-100">total revenue</div>
        <div className="Statics hover:text-gray-100">stastics</div>
        <div className="Earning hover:text-gray-100">earning</div>
        <div className="SocialMedia hover:text-gray-100">social media</div>
        <div className="TodayTasks hover:text-gray-100">today tasks</div>
      </div>
    </div>
  );
};

export default MuiComponent;
