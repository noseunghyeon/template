import React from "react";
import image from "../../image/SocialMedia.webp";

const SocialMedia = () => {
  return (
    <div className="bolck-wrapper w-full flex flex-wrap">
      <div className="w-auto h-full">
        <h2 className="text-gray-700 text-[40px]">Social Media</h2>
        <div className="items-center justify-between mt-4">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
