import React, { useEffect, useState } from "react";

const Daymenu = () => {
  const [foodDay, setFoodDay] = useState([]);
  const [foodWeek, setFoodWeek] = useState([]);
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
    fetchDataDagen();
    fetchDataVecka();
  }, []);

  return (
    <div className="flex justify-center gap-8 p-6">
      <div className=" w-96 rounded-lg shadow-lg flex">
        <img
          src="/imgs/foodimg.png"
          alt="Food of the Day"
          className="w-1/2 h-full object-cover"
        />

        <div className="w-1/2  bg-gray_light  rounded-lg p-4 shadow-md flex flex-col justify-evenly">
          {/**/}
          <h2 className="text-lg font-bold text-center">Dagens Lunch</h2>
          <p className="text-sm text-center">
            <strong>Mat:</strong> {foodDay[0]?.description.split("<br/>")[0]}
          </p>
          <p className="text-sm text-center">
            <strong>Vegan:</strong> {foodDay[0]?.description.split("<br/>")[1]}
          </p>
        </div>
      </div>

      <div className="w-64 p-4 bg-gray_light bg-opacity-90 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold">Veckans Lunch</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {foodWeek.map((food, index) => (
              <li key={index} className="mb-2">
                <strong>{food.title}:</strong>{" "}
                {food.description.split("<br/>")[0]}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Daymenu;
