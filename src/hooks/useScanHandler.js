import { useState, useEffect } from "react";
import { fetchFromAirtable } from "../services/airtableService";
import { fetchFromExternalAPI } from "../services/externalAPIService";

export const useScanHandler = () => {
  const [listItems, setListItems] = useState([]);
  const [scannedId, setScannedId] = useState("");
  const [loading, setLoading] = useState(false);
  const [scannedCache, setScannedCache] = useState({});

  const updateList = (item) => {
    setListItems((prevList) =>
      prevList.some((existingItem) => existingItem.namn === item.namn)
        ? prevList
        : [item, ...prevList]
    );
  };

  useEffect(() => {
    if (!scannedId) return;

    const processScan = async () => {
      if (scannedCache[scannedId]) {
        updateList(scannedCache[scannedId]);
        return;
      }

      setLoading(true);

      try {
        let newItem = await fetchFromAirtable(scannedId);
        if (!newItem) {
          console.log("ID not found in Airtable. Checking external API...");
          newItem = await fetchFromExternalAPI(scannedId);
        }

        if (newItem) {
          setScannedCache((prevCache) => ({
            ...prevCache,
            [scannedId]: newItem,
          }));
          updateList(newItem);
        } else {
          console.log("ID not found in external API either.");
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
        setScannedId("");
      }
    };

    processScan();
  }, [scannedId, scannedCache]);

  return { listItems, setScannedId, loading };
};
