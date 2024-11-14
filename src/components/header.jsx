import React from "react";
import Clock from "./clock";
const Header = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-10 h-fit flex flex-nowrap justify-between gap-4 items-center">
      <h3 className="bg-darkpurple/50 text-xl h-fit text-white border border-darkpurple rounded-md w-fit p-2">
        Välkommen och smaklig måltid!🍽️
      </h3>
      <Clock />
    </div>
  );
};

export default Header;
