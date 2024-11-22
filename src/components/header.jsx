import React, { useState, useEffect } from "react";
import { PiForkKnifeBold } from "react-icons/pi";
import Weatherapi from "./weatherapi";
import Banner from "./banner";

const Header = () => {
  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBouncing(true);
      setTimeout(() => {
        setIsBouncing(false);
      }, 3000); // Bounce duration
    }, 300000); // cooldown or delay

    return () => clearInterval(interval);
  }, []);

  return (
    <header className=" flex gap-4 p-4">
      <Weatherapi />
      <div className="flex flex-col items-center justify-center pl-16 mr-96 h-[20VH] w-full mx-auto">
        <h3 className=" text-center flex text-5xl h-fit text-white w-fit p-2">
          Välkommen!
          <span className={isBouncing ? "bounce" : ""}>
            <PiForkKnifeBold />
          </span>
        </h3>
        <Banner text="Öppettider: 11:00 - 13:00" />
      </div>
    </header>
  );
};

export default Header;
