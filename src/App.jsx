import React from "react";
import Daymenu from "./components/daymenu";
import Layout from "./components/layout";
import Weekmenu from "./components/weekmenu";
import Banner from "./components/banner";
import DataFetcher from "./components/DataFetcher"; // Updated import for the renamed component
import Weatherapi from "./components/weatherapi";
import AnimatedBackground from "./components/animatedBackground";

const App = () => {
  return (
    <div>
      <AnimatedBackground />
      <Layout>
        {/* DataFetcher (Airtable functionality) */}
        <DataFetcher />
        {/* Main content */}
        <div className="flex flex-col justify-center items-center gap-4">
          <Daymenu />
          <Banner text="Öppettider: 11:00 - 13:00" />
        </div>
        <div className="flex flex-col justify-evenly h-full">
          <Weekmenu />
        </div>
      </Layout>
    </div>
  );
};

export default App;
