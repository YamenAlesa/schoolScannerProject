import React from "react";

const Banner = ({ text }) => {
  return (
    <div className="flex bg-gray_light px-8 gap-7 w-96 items-center justify-center h-8 rounded-lg">
      <p>{text}</p>
    </div>
  );
};

export default Banner;