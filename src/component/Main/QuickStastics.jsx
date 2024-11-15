import React from "react";

import image from "../../image/QuickStastics.png";

const QuickStastics = () => {
  return (
    <div className="bolck-wrapper w-full">
      <h2 className="text-gray-700 text-[40px]">QuickStastics</h2>
      <div className="items-center justify-between mt-4">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default QuickStastics;
