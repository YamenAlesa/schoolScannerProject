import React, { useState } from "react";
import Scanner from "./components/scanning";
import AirtableComponent from "./components/airtableAPI";

const App = () => {
  const [scannedBarcode, setScannedBarcode] = useState("");

  const handleBarcodeScan = (barcode) => {
    setScannedBarcode(barcode);
  };

  return <div></div>;
};

export default App;
