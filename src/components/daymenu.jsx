import React, { useEffect, useState } from "react";

const Daymenu = () => {
  const [foodWeek, setFoodWeek] = useState([]);
  const [foodDay, setFoodDay] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchDataVecka() {
    try {
      setLoading(true);
      const response = await fetch(
        "https://ntifoodpeople.vercel.app/api/food/week"
      );
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
      const response = await fetch(
        "https://ntifoodpeople.vercel.app/api/food/day"
      );
      const data = await response.json();
      setFoodDay(data.items);
    } catch (error) {
      console.error("Error: ", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    setTimeout(() => {
      fetchDataDagen();
      fetchDataVecka();
    }, 3000);
  }, []);
  return (
    <div>
      <div className="food-day">
        {loading ? (
          <>
            <p>Loading...</p>
          </>
        ) : (
          error
        )}

        {foodDay ? (
          <>
            <h1>Food of the Day: </h1>
            <p>
              <b>Mat:</b> {foodDay[0]?.description.split("<br/>")[0]}
            </p>
            <p>
              <b>Vegan mat:</b> {foodDay[0]?.description.split("<br/>")[1]}
            </p>
          </>
        ) : (
          error
        )}
        <h1>Veckans mat</h1>
        {loading ? (
          <>
            <p>Loading...</p>
          </>
        ) : (
          error
        )}
        {foodWeek.map((food) => {
          return (
            <div>
              <h2> {food.title}: </h2>
              <ul>
                <li>{food.description.split("<br/>")[0]}</li>
                <li>{food.description.split("<br/>")[1]}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Daymenu;
