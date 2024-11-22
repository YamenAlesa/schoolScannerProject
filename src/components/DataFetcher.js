import React, { useState } from "react";
import BarcodeScanner from "../components/scanning";
import ListItem from "../components/ListItems";
import useDataFetcher from "../hooks/useScanHandler";
import { IoPerson } from "react-icons/io5";

const DataFetcher = () => {
  const [scannedId, setScannedId] = useState("");
  const { listItems, loading, feedback, countUniqueScans } =
    useDataFetcher(scannedId);

  const handleScan = (scanResult) => {
    setScannedId(scanResult.toLowerCase().trim());
  };

  return (
    <div
      id="scanned-name-box"
      className="flex flex-col items-center bg-gray_dark/75 shadow-lg p-6 rounded-lg w-full h-full min-h-[500px] max-h-[500px] overflow-x-hidden overflow-y-scroll"
    >
      <BarcodeScanner onScan={handleScan} />
      <div className="flex  w-full  justify-center ">
        <p className="flex relative  right-56 text-white text-xl items-start gap-1 mb-4">
         <IoPerson className="mt-0.5 " /> {countUniqueScans()} 
        </p>
        <h2 className=" mb-4  font-bold text-center text-xl text-white">
          Namn
        </h2>
      </div>

      {feedback && <p className="text-white text-xl mb-2">{feedback}</p>}

      <ul className="text-white space-y-4" id="list">
        {listItems.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
