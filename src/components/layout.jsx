import React from "react";
import Scanner from "./scanning";

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      {/* <Scanner /> */}
    </>
  );
};

export default Layout;
