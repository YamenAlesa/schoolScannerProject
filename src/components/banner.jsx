import React from "react";

const Banner = ({ text }) => {
  return (
    <div className="flex bg-gray_dark/50 px-8 gap-7 w-96 items-center justify-center h-12 rounded-lg text-white text-xl">
      <p>
        <b>{text}</b>
      </p>
    </div>
  );
};

export default Banner;
