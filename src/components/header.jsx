import React, { useEffect, useState } from "react";
import { PiForkKnifeBold } from "react-icons/pi";
import Banner from "./banner";
import Weatherapi from "./weatherapi";

const Header = () => {
  return (
    <header className="flex justify-around gap-3 p-4">
      <Weatherapi />
      <div className="flex flex-col items-center justify-center px-4 mr-96 h-[20VH] w-full mx-auto">
        <h3 className="text-center flex text-5xl h-fit text-white w-fit p-2">
          Välkommen! {<PiForkKnifeBold />}
        </h3>
        <Banner text="Öppettider: 11:00 - 13:00" />
      </div>
    </header>
  );
};

export default Header;
