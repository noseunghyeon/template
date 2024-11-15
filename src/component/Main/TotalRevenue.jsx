import React from "react";
import image from "../../image/TotalRevenue.png";

const TotalRevenue = () => {
  return (
    <div className="bolck-wrapper w-full">
      <h2 className="text-gray-700 text-[40px]">TotalRevenue</h2>
      <div className="items-center justify-between mt-4">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default TotalRevenue;
