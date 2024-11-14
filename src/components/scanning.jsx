import React, { useState, useEffect } from "react";

const BarcodeScanner = ({ onScan }) => {
  const [currentScan, setCurrentScan] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScan = (event) => {
      setLoading(true);
      if (
        event.key === "Shift" ||
        event.key === "Control" ||
        event.key === "Alt"
      ) {
        return;
      }

      setCurrentScan((prev) => prev + event.key);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Set a timeout to trigger the scan completion after a small delay ( 100ms)
      const newTimeoutId = setTimeout(() => {
        if (currentScan) {
          onScan(currentScan);
          setCurrentScan("");
        }
      }, 500);

      setTimeoutId(newTimeoutId);
      setLoading(false);
    };

    window.addEventListener("keydown", handleScan);
    return () => {
      window.removeEventListener("keydown", handleScan);
    };
  }, [currentScan, onScan, timeoutId]);

  return <div>{loading && <p>Loading...</p>}</div>;
};

export default BarcodeScanner;
