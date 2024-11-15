import React from "react";
import Clock from "./clock";
import { PiForkKnifeBold } from "react-icons/pi";
import Weatherapi from "./weatherapi";

const Header = () => {
  return (
    <>
      <Weatherapi />
      <div className="flex justify-center items-center">
        <Clock />
      </div>
      <div className="max-w-[1200px] mx-auto mt-20 h-fit flex flex-col items-center gap-4">
        <h3 className="flex text-5xl h-fit text-white w-fit p-2 -ml-[80px]">
          Välkommen! <PiForkKnifeBold />
        </h3>
      </div>
    </>
  );
};

export default Header;
