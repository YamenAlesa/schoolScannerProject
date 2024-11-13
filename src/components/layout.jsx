import React from "react";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center">{children}</main>
    </>
  );
};

export default Layout;
