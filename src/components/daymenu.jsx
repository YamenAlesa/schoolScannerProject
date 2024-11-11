import React, { useState } from "react";

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
      console.log(foodWeek);
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
      console.log(data.items);
    } catch (error) {
      console.error("Error: ", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
      <button onClick={fetchDataDagen} className="bg-black text-white">
        Dagens Mat
      </button>
      <button onClick={fetchDataVecka} className="bg-zinc-500 text-white">
        Veckans Mat
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : foodDay ? (
        " <- Click to Loop data"
      ) : (
        <p>Unable to fetch data</p>
      )}
      <div className="food-day">
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
        <div className="food-week">
          {foodWeek ? (
            <>
              <h1>Veckans mat</h1>
              {/* something going in here */}
            </>
          ) : (
            error
          )}
        </div>
      </div>
    </div>
  );
};

export default Daymenu;
