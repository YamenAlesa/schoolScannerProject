import React from "react";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="layout">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
