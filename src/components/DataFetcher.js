import React, { useState } from "react";
import BarcodeScanner from "../components/scanning";
import ListItem from "../components/ListItems";
import useDataFetcher from "../hooks/useScanHandler";

const DataFetcher = () => {
  const [scannedId, setScannedId] = useState("");
  const { listItems, loading, feedback } = useDataFetcher(scannedId);

  const handleScan = (scanResult) => {
    setScannedId(scanResult.toLowerCase().trim());
  };

  return (
    <div className="flex flex-col items-center bg-gray_light bg-opacity-60 shadow-lg p-6 rounded-lg w-full h-96 overflow-x-hidden overflow-y-scroll">
      <BarcodeScanner onScan={handleScan} />

      <h2 className="mb-4 font-bold text-center text-xl">Namn</h2>

      {feedback && <p className="text-red-500 text-sm mb-2">{feedback}</p>}

      {loading && <p>Loading...</p>}

      <ul className="space-y-4" id="list">
        {listItems.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
