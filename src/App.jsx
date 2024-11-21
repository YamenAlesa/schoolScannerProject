import React from "react";
import Daymenu from "./components/daymenu";
import Layout from "./components/layout";
import Weekmenu from "./components/weekmenu";
import DataFetcher from "./components/DataFetcher"; // Updated import for the renamed component
import Weatherapi from "./components/weatherapi";
import AnimatedBackground from "./components/animatedBackground";
import qrcode from "./images/feedBackQRcode.png";

const App = () => {
  return (
    <div>
      <AnimatedBackground />
      <Layout>
        <div className="names h-full">
          <DataFetcher />
        </div>
        <div className="week h-fit">
          <Weekmenu />
        </div>
        <div className="fixed flex items-center bottom-0 left-0">
          <img
            src={qrcode}
            alt="qr code"
            className="flex w-40 h-40 items-end "
          />
          <p className="text-white p-6">
            Är du inte nöjd med maten?
            <br />
            Skanna QR-koden och ge oss din åsikt!
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default App;
