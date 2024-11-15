import React from "react";
import Logo from "./logo";
import Search from "./Search";
import Country from "./Country";
import Mail from "./Mail";
import Bell from "./Bell";

const Header = () => {
  return (
    <div className="header lg:ml-[calc(20%+14px)] lg:w-[calc(80%-28px)] w-full py-3 px-6 bg-gray-950 rounded-sm dark:shadow-[0_0_0.25rem_rgba(255,255,255,0.3)] shadow-[0_0_0.25rem_rgba(165,163,174,0.3)] ">
      <div className="header-content flex justify-between items-center">
        <Logo />
        <div className="header-left flex items-center gap-x-3">
          <Country />
          <Bell />
          <Mail />
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Header;
