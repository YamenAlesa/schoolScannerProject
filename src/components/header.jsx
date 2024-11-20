import React from "react";
import { PiForkKnifeBold } from "react-icons/pi";
import Banner from "./banner";

import Weatherapi from "./weatherapi";

const Header = () => {
  return (
    <div className="flex justify-around gap-3 p-4">
      <div className=" bg-gray_light/80 rounded-md">
        <Weatherapi />
      </div>
      <div className="flex flex-col items-center px-4 mr-96 h-[20VH] w-full mx-auto">
        <h3 className="text-center flex text-5xl h-fit text-white w-fit p-2">
          Välkommen! <PiForkKnifeBold />
        </h3>
        <Banner text="Öppettider: 11:00 - 13:00" />
      </div>
      <div className=""></div>
    </div>
  );
};

export default Header;
