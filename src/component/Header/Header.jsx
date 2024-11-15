import React from "react";
import Logo from "./logo";
import Search from "./Search";
import Country from "./Country";
import Mail from "./Mail";
import Bell from "./Bell";

const Header = () => {
  return (
    <div className="header ml-[calc(20%+5px)] w-[calc(80%-20px)] h-[60px] py-3 px-6 bg-gray-950 rounded-sm shadow-[0_0_0.25rem_rgba(255,255,255,0.3)] ">
      <div className="header-content flex justify-between items-center">
        <Logo />
        <div className="header-left flex items-center gap-x-8">
          <Country />
          <Bell />
          <Mail />
          <input
            type="text"
            placeholder="Search here ..."
            className="border-none outline-0 text-[15px] bg-gray-700 text-white px-6 placeholder-white w-[150px] "
          />
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Header;
