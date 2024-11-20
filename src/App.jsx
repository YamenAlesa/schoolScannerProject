import React from "react";
import Daymenu from "./components/daymenu";
import Layout from "./components/layout";
import Weekmenu from "./components/weekmenu";
import DataFetcher from "./components/DataFetcher"; // Updated import for the renamed component
import Weatherapi from "./components/weatherapi";
import AnimatedBackground from "./components/animatedBackground";

const App = () => {
  return (
    <div>
      <AnimatedBackground />
      <Layout>
        <div className="names h-fit">
          <DataFetcher />
        </div>
        <div className="week h-fit">
          <Weekmenu />
        </div>
      </Layout>
    </div>
  );
};

export default App;
