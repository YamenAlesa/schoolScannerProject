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
    <div
      id="scanned-name-box"
      className="flex flex-col items-center bg-gray_dark/60 shadow-lg p-6 rounded-lg w-full h-full min-h-[500px] max-h-[500px] overflow-x-hidden overflow-y-scroll"
    >
      <BarcodeScanner onScan={handleScan} />

      <h2 className="mb-4 font-bold text-center text-xl text-white">Namn</h2>

      {feedback && <p className="text-white text-sm mb-2">{feedback}</p>}

      {loading && <p className="text-white">Loading...</p>}

      <ul className="text-white space-y-4" id="list">
        {listItems.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
