import React, { useState } from "react";
import AirtableComponent from "./components/airtableAPI";
import Clock from "./components/clock";
import Daymenu from "./components/daymenu";

const App = () => {
  return (
    <div>
      <h1>Välkomna! This is the food app for NTI</h1>
      <hr />
      <Daymenu />
      <Clock />
      <AirtableComponent />
    </div>
  );
};

export default App;
