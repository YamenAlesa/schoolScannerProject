import React, { useState } from "react";

import Scanner from "./components/scanning";
import AirtableComponent from "./components/airtableAPI";
import Clock from "./components/clock";
import Daymenu from "./components/daymenu";

const App = () => {
  const [scannedBarcode, setScannedBarcode] = useState("");

  const handleBarcodeScan = (barcode) => {
    setScannedBarcode(barcode);
  };

  return (
    <div className="min-h-screen bg-gray">
      <h1>Välkomna!</h1>
      <hr />
      <Daymenu />
      <Clock />
      <Scanner onScan={handleBarcodeScan} />
      <AirtableComponent barcode={scannedBarcode} />
    </div>
  );
};

export default App;
