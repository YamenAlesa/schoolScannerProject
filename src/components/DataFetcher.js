import React from "react";
import BarcodeScanner from "./scanning";
import ListItem from "./ListItems";
import { useScanHandler } from "../hooks/useScanHandler";

const DataFetcher = () => {
  const { listItems, setScannedId, loading } = useScanHandler();

  const handleScan = (scanResult) => {
    setScannedId(scanResult.toLowerCase().trim());
  };

  return (
    <div className="flex flex-col items-center bg-gray_light bg-opacity-60 shadow-xl p-6 rounded-lg w-full h-96 overflow-x-hidden overflow-y-scroll">
      <BarcodeScanner onScan={handleScan} />

      <h2 className="mb-4 font-bold text-center text-2xl text-gray_dark">
        Namn
      </h2>
      {loading && <p>Loading...</p>}
      <ul className="space-y-4" id="list">
        <li className="text-lg">
          {listItems.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </li>
      </ul>
    </div>
  );
};

export default DataFetcher;
