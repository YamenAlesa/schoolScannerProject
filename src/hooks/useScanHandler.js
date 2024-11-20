import { useState, useEffect } from "react";
import { fetchFromAirtable, saveToAirtable } from "../services/airtableService";
import { fetchFromExternalAPI } from "../services/externalAPIService";

const useDataFetcher = (scannedId) => {
  const [listItems, setListItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scannedCache, setScannedCache] = useState({});
  const [feedback, setFeedback] = useState(null);

  const showFeedback = (message) => {
    setFeedback(message);
    setTimeout(() => setFeedback(null), 3000);
  };

  useEffect(() => {
    if (!scannedId) return;

    const fetchRecord = async () => {
      setLoading(true);

      try {

        if (scannedCache[scannedId]) {
          showFeedback("This code has already been scanned.");
          return;
        }


        let newItem = await fetchFromAirtable(scannedId);

        if (!newItem) {
          console.log("ID not found in Airtable. Checking external API...");

          newItem = await fetchFromExternalAPI(scannedId);

          if (newItem) {
            await saveToAirtable(scannedId, newItem.namn, newItem.isPersonal);
            console.log("New item added to Airtable:", newItem);
          } else {
            showFeedback("Unknown ID scanned.");
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
        }
      } catch (error) {
        console.error("Error processing scan:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecord();
  }, [scannedId, scannedCache]);

  return { listItems, loading, feedback };
};

export default useDataFetcher;
