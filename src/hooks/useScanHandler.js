import { useState, useEffect } from "react";
import { fetchFromAirtable, saveToAirtable } from "../services/airtableService";
import { fetchFromExternalAPI } from "../services/externalAPIService";

const useDataFetcher = (scannedId) => {
  const [listItems, setListItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scannedCache, setScannedCache] = useState({});
  const [feedback, setFeedback] = useState(null);
  const [scannedIds, setScannedIds] = useState(new Set());

  const showFeedback = (message) => {
    setFeedback(message);
    setTimeout(() => setFeedback(null), 3000);
  };

  const countUniqueScans = () => {
    return scannedIds.size;
  };

  useEffect(() => {
    if (!scannedId) return;

    const fetchRecord = async () => {
      setLoading(true);

      try {
        let newItem = await fetchFromAirtable(scannedId);

        if (!newItem) {
          console.log("ID not found in Airtable. Checking external API...");

          newItem = await fetchFromExternalAPI(scannedId);
          if (
            listItems.some(
              (item) => item.namn === scannedCache[scannedId]?.namn
            )
          )
            if (newItem) {
              await saveToAirtable(scannedId, newItem.namn, newItem.isPersonal);
              console.log("New item added to Airtable:", newItem);
            } else {
              showFeedback("Unknown.");
            }
        }

        if (newItem) {
          setScannedCache((prevCache) => ({
            ...prevCache,
            [scannedId]: newItem,
          }));
          setListItems((prevList) =>
            prevList.some((item) => item.namn === newItem.namn)
              ? prevList
              : [newItem, ...prevList]
          );

          setScannedIds((prevScannedIds) => {
            const newScannedIds = new Set(prevScannedIds);
            newScannedIds.add(scannedId);
            return newScannedIds;
          });
        }
      } catch (error) {
        console.error("Error processing scan:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecord();
  }, [scannedId, scannedCache, listItems, scannedIds]);

  return { listItems, loading, feedback, countUniqueScans };
};

export default useDataFetcher;
