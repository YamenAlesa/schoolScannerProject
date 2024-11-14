import React from "react";
import Clock from "./clock";
const Header = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <Clock />
      </div>
      <div className="max-w-[1200px] mx-auto mt-10 h-fit flex flex-col items-center gap-4">
        <h3
          className="flex text-5xl h-fit text-white w-fit p-2 -ml-[100px]">
          Välkommen! 🍽️
        </h3>
      </div>
    </>
  );
};

export default Header;
