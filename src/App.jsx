import BarcodeScanner from "./components/scanning";
import Layout from "./components/layout";
import { useState } from "react";
import Airtable from "airtable";
import UserList from "./components/userlist";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [scannedCache, setScannedCache] = useState({});
  const [error, setError] = useState(null);
  const [processingIds, setProcessingIds] = useState(new Set());

  // Initialize Airtable with API key and base ID
  const apiKey = process.env.REACT_APP_AIRTABLE_API_KEY;
  const baseId = process.env.REACT_APP_AIRTABLE_BASE;
  const base = new Airtable({ apiKey }).base(baseId);

  // Function to update the cache and the list of scanned items
  const updateCacheAndList = (id, newItem) => {
    setScannedCache((prevCache) => ({
      ...prevCache,
      [id]: newItem,
    }));

    setListItems((prevList) =>
      prevList.some((item) => item.scanId === newItem.scanId)
        ? prevList
        : [newItem, ...prevList]
    );
  };

  // Function to fetch data from the external API
  const fetchDataFromApi = async (scanId) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://ntifoodpeople.vercel.app/api/users/${scanId}`
      );
      if (!res.ok) throw new Error("Failed to fetch data from API");

      const data = await res.json();
      console.log("Data from API:", data);

      const newItem = {
        scanId: data.scanId,
        username: data.username,
        teacher: data.teacher,
        creator: false,
      };

      // Create the new record in Airtable
      await base("Sheet1").create({
        scanId: data.scanId,
        username: data.username,
        teacher: data.teacher,
        creator: false,
      });

      return newItem;
    } catch (error) {
      console.error("Error fetching from API:", error);
      setError(error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Function to get data from Airtable
  const getDataFromAirtable = async (scanId) => {
    try {
      const records = await base("Sheet1")
        .select({
          fields: ["scanId", "username", "teacher", "creator"],
          filterByFormula: `{scanId} = '${scanId}'`,
        })
        .firstPage();

      if (records.length === 0) return null;

      const record = records[0];
      return {
        scanId: record.get("scanId"),
        username: record.get("username"),
        teacher: record.get("teacher"),
        creator: record.get("creator"),
      };
    } catch (error) {
      console.error("Error fetching from Airtable:", error);
      setError(error);
      return null;
    }
  };

  // Handler function for barcode scans
  const handleScan = async (scanResult) => {
    const id = scanResult.toLowerCase().trim();
    if (processingIds.has(id)) return; // Skip if already being processed

    setProcessingIds((prev) => new Set(prev).add(id));

    try {
      const cachedItem = scannedCache[id];
      if (cachedItem) {
        // If item is in cache, update the list
        updateCacheAndList(id, cachedItem);
      } else {
        // Try to get the item from Airtable
        const airtableItem = await getDataFromAirtable(id);
        if (airtableItem) {
          updateCacheAndList(id, airtableItem);
        } else {
          // If not in Airtable, fetch from API and create in Airtable
          const apiItem = await fetchDataFromApi(id);
          if (apiItem) {
            updateCacheAndList(id, apiItem);
          }
        }
      }
    } catch (error) {
      console.error("Error in handleScan:", error);
      setError(error);
    } finally {
      setProcessingIds((prev) => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }
  };

  console.log("List items:", listItems);

  return (
    <div>
      <Layout>
        <div className="grid">
          <UserList users={listItems} />
          <BarcodeScanner onScan={handleScan} />
        </div>
      </Layout>
    </div>
  );
};

export default App;
