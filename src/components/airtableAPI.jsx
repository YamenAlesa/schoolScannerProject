import React, { useState, useEffect } from "react";
import Airtable from "airtable";
import BarcodeScanner from "./scanning";

const apiKey = process.env.REACT_APP_AIRTABLE_API_KEY;
const base = new Airtable({ apiKey }).base("appQe2hcI1lRCovLG");

const DataFetcher = () => {
  const [listItems, setListItems] = useState([]);
  const [scannedId, setScannedId] = useState("");
  const [loading, setLoading] = useState(false);
  const [scannedCache, setScannedCache] = useState({});

  const handleScan = (scanResult) => {
    setScannedId(scanResult.toLowerCase().trim());
  };

  useEffect(() => {
    if (!scannedId) return;

    if (scannedCache[scannedId]) {
      setListItems((prevList) => [scannedCache[scannedId], ...prevList]);
      return;
    }

    setLoading(true);

    const fetchRecord = async () => {
      try {
        const records = await base("Sheet1")
          .select({
            fields: ["Id", "Namn", "isPersonal", "Creator"],
            filterByFormula: `{Id} = '${scannedId}'`,
          })
          .firstPage();

        if (records.length === 0) {
          console.log("No matching record found for ID:", scannedId);
          return;
        }

        const record = records[0];
        const newItem = {
          namn: record.get("Namn"),
          isPersonal: record.get("isPersonal"),
          creator: record.get("Creator"),
        };

        setScannedCache((prevCache) => ({
          ...prevCache,
          [scannedId]: newItem,
        }));

        setListItems((prevList) =>
          prevList.some((item) => item.namn === newItem.namn)
            ? prevList
            : [newItem, ...prevList]
        );
      } catch (error) {
        console.error("Airtable fetch error:", error);
      } finally {
        setLoading(false);
        setScannedId("");
      }
    };

    fetchRecord();
  }, [scannedId, scannedCache]);

  return (
    <div>
      <BarcodeScanner onScan={handleScan} />
      

      {loading && <p>Loading...</p>}
      <ul>
        {listItems.map((item, index) => {
          let color = "";
          if (item.creator) {
            color = "red";
          } else if (item.isPersonal) {
            color = "purple";
          }

          const fontSize = "20px";

          return (
            <li key={index} style={{ color, fontSize }}>
              {item.namn}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DataFetcher;
