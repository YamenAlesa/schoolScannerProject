import React, { useEffect, useState } from "react";
import { PiForkKnifeBold } from "react-icons/pi";
import Banner from "./banner";
import Weatherapi from "./weatherapi";

const Header = () => {
  return (
    <header className=" flex gap-4 p-4">
      <Weatherapi />
      <div className="flex flex-col items-center justify-center pl-16 mr-96 h-[20VH] w-full mx-auto">
        <h3 className="flex text-5xl h-fit text-white w-fit p-2">
          Välkommen! {<PiForkKnifeBold />}
        </h3>
        <Banner text="Öppettider: 11:00 - 13:00" />
      </div>
    </header>
  );
};

export default Header;
