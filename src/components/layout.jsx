import React from "react";
import Scanner from "./scanning";
import Clock from "./clock";
import Daymenu from "./daymenu";

const Layout = ({ children }) => {
  return (
    <>
        <Clock />
        <Daymenu />
      <main>{children}</main>
      <Scanner />
    </>
  );
};

export default Layout;
