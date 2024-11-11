import React, { useState } from "react";
import Scanner from "./components/scanning";
import AirtableComponent from "./components/airtableAPI";

const App = () => {
  const [scannedBarcode, setScannedBarcode] = useState("");

  const handleBarcodeScan = (barcode) => {
    setScannedBarcode(barcode);
  };

  return (
    <div>
      <h1>Välkomna! This is the food app for NTI</h1>
      <hr />
      <Daymenu />
      <Clock />
      <Scanner onScan={handleBarcodeScan} />
      <AirtableComponent barcode={scannedBarcode} />
    </div>
  );
};

export default App;
