import React from "react";
import Map from "./Map";

const GoogleMap = () => {
  return (
    <div className="bolck-wrapper w-full">
      <h2 className="text-gray-700 text-[40px]">Google map</h2>
      <div className="items-center justify-between mt-4">
        <Map />
      </div>
    </div>
  );
};

export default GoogleMap;
