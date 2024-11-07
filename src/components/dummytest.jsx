import React from "react";
import dummyMenu from "../database/dummy.json";

const Dummytest = () => {
  return (
    <div>
      <h1>{dummyMenu.menu.file_name}</h1>
    </div>
  );
};

export default Dummytest;
