import React, { useState, useEffect } from "react";
import Airtable from "airtable";
import BarcodeScanner from "./scanning";
import { FaCrown } from "react-icons/fa";

const apiKey = process.env.REACT_APP_AIRTABLE_API_KEY;
const base = new Airtable({ apiKey }).base(process.env.REACT_APP_AIRTABLE_BASE);

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

        if (records.length > 0) {
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
        } else {
          console.log("ID not found in Airtable. Checking external API...");
          const response = await fetch(
            "https://ntifoodpeople.vercel.app/api/users"
          );
          const users = await response.json();

          // Find user with the matching scanId
          const user = users.find((u) => u.scanId === scannedId);
          if (user) {
            const newItem = {
              namn: user.username,
              isPersonal: user.teacher,
              creator: false,
            };

            await base("Sheet1").create({
              Id: scannedId,
              Namn: user.username,
              isPersonal: user.teacher,
              Creator: false,
            });

            setScannedCache((prevCache) => ({
              ...prevCache,
              [scannedId]: newItem,
            }));
            setListItems((prevList) =>
              prevList.some((item) => item.namn === newItem.namn)
                ? prevList
                : [newItem, ...prevList]
            );
          } else {
            console.log("ID not found in external API either.");
          }
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
        setScannedId("");
      }
    };

    const list = document.getElementById("list");
    if (listItems.length) {
      list.scroll({
        top: 0,
        behavior: "smooth",
      });
    }

    fetchRecord();
  }, [scannedId, scannedCache]);

  return (
    <div className="flex flex-col items-center bg-gray_light bg-opacity-60 shadow-lg p-6 rounded-lg w-full h-96 overflow-x-hidden overflow-y-scroll">
      <BarcodeScanner onScan={handleScan} />

      <h2 className="mb-4 font-bold text-center text-xl">Namn</h2>
      {loading && <p>Loading...</p>}
      <ul className="space-y-4" id="list">
        {listItems.map((item, index) => {
          let color = "";
          let fontFamily = "";
          let icons = null;
          if (item.creator) {
            icons = <FaCrown style={{ color: "black" }} />;
            fontFamily = "cursive";
            color = "gold";
          } else if (item.isPersonal) {
            color = "purple";
          }

          const fontSize = "20px";

          return (
            <li
              key={index}
              style={{ color, fontSize, fontFamily }}
              className="flex items-center"
            >
              {icons && <span className="mr-1">{icons}</span>} {item.namn}{" "}
              {icons && <span className="ml-1">{icons}</span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DataFetcher;
