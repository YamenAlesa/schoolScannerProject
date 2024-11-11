import React from "react";
import Scanner from "./scanning";
import Clock from "./clock";

const Layout = ({ children }) => {
  return (
    <>
        <Clock />
      <main>{children}</main>
      <Scanner />
    </>
  );
};

export default Layout;
