import React from "react";
import Clock from "./clock";
const Header = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-10 h-fit flex flex-nowrap justify-between gap-4 items-center">
      <h3>Welcome to Lunch - Hope you enjoy! 😊</h3>
      <Clock />
    </div>
  );
};

export default Header;
