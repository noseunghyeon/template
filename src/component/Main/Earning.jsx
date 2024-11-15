import React from "react";
import image from "../../image/Earning.png";

const Earning = () => {
  return (
    <div className="bolck-wrapper w-full flex flex-wrap">
      <div className="w-auto h-full">
        <h2 className="text-gray-700 text-[40px]">Earning</h2>
        <div className="items-center justify-between mt-4 w-[50vh] h-[50vh] ">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Earning;
