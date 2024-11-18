import React from "react";
import Clock from "./clock";
import { PiForkKnifeBold } from "react-icons/pi";
import Weatherapi from "./weatherapi";

const Header = () => {
  return (
    <div className="flex justify-between mr-96">
      <Weatherapi />
      <div>
        {/* className="bg-gray_light max-w-[600px] h-fit flex justify-center" */}
        <h3 className="text-center flex text-5xl h-fit text-white w-fit p-2">
          Välkommen! <PiForkKnifeBold />
        </h3>
      </div>
      <div className="flex justify-center items-center">
        <Clock />
      </div>
    </div>
  );
};

export default Header;
