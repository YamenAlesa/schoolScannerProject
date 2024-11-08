import React, { useEffect, useState } from "react";

const Daymenu = () => {
  const [foodWeek, setFoodWeek] = useState([]);
  const [foodDay, setFoodDay] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  console.log(foodDay);
  console.log(foodWeek);

  async function fetchDataVecka() {
    try {
      setLoading(true);
      const response = await fetch("http://192.168.198.178:1337/mat/weeks");
      const data = await response.json();
      setFoodWeek(data.items);
    } catch (error) {
      console.error("Error: ", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  async function fetchDataDagen() {
    try {
      setLoading(true);
      const response = await fetch("http://192.168.198.178:1337/mat");
      const data = await response.json();
      setFoodDay(data.items);
    } catch (error) {
      console.error("Error: ", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button onClick={fetchDataVecka}>Click</button>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : foodWeek ? (
        "Loop data"
      ) : (
        <p>Unable to fetch data</p>
      )}
    </div>
  );
};

export default Daymenu;
