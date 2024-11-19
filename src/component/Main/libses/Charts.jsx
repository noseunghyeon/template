import React from "react";
import ChartList from "./ChartList";

const Charts = () => {
  return (
    <div className="bolck-wrapper w-full">
      <h2 className="text-gray-700 text-[40px]">Chart</h2>
      <div className="items-center justify-between mt-4">
        <ChartList />
      </div>
    </div>
  );
};

export default Charts;
