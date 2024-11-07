import React, { useState, useEffect } from "react";

const Scanner = () => {
  const [barcode, setBarcode] = useState(""); // Current barcode being scanned
  const [scannedBarcodes, setScannedBarcodes] = useState([]); // List of all scanned barcodes
  let timeout;

  useEffect(() => {
    const handleKeydown = (evt) => {
      console.log("Key pressed:", evt.key); // Debugging line to log key presses

      // Check for Enter key or newline character to submit barcode
      if (evt.code === "Enter" || evt.key === "\n") {
        if (barcode) {
          setScannedBarcodes((prevBarcodes) => [barcode, ...prevBarcodes]); // Add new barcode at the top
          setBarcode(""); // Reset barcode after submission
        }
        return;
      }

      // Ignore Shift key or other non-character keys
      if (evt.key !== "Shift") {
        setBarcode((prevBarcode) => prevBarcode + evt.key);
      }

      // Clear the barcode if idle for 5 seconds after the last key press
      clearTimeout(timeout);
      timeout = setTimeout(() => setBarcode(""), 5000); // Clears barcode after 5 seconds of inactivity
    };

    // Attach the event listener
    document.addEventListener("keydown", handleKeydown);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeydown);
      clearTimeout(timeout); // Clear any remaining timeout on unmount
    };
  }, [barcode]); // Effect depends on barcode state

  return (
    <div>
      <h1>Simple Barcode Scanner</h1>
      <strong>Scanned barcodes:</strong>
      <div id="scanned-barcodes">
        {scannedBarcodes.map((code, index) => (
          <p key={index}>{code}</p> // Display each scanned barcode on a new line
        ))}
      </div>
    </div>
  );
};

export default Scanner;
