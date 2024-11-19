import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper ml-[calc(20%+5px)] w-[calc(80%-20px)] h-[60px] py-3 px-6 bg-gray-950 rounded-sm mt-4 justify-between flex">
      <div className="text-gray-200 flex gap-4 items-center">
        <div>Home</div>
        <div>Menu</div>
      </div>
      <div className="flex gap-4 items-center">
        <div>qwer</div>
        <div className="flex items-center gap-2 ">
          Add Item
          <FaShoppingCart className="text-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
