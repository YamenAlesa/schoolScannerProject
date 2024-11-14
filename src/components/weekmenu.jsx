import React, { useEffect, useState } from "react";

const Weekmenu = () => {
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

  useEffect(() => {
    fetchDataVecka();
  }, []);
  return (
    <div className="bg-gray_light bg-opacity-90 shadow-lg p-4 rounded-lg w-full">
      <h2 className="font-bold text-2xl text-center mb-4">Veckans Lunch</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {foodWeek.map((food, index) => (
            <li key={index} className="mb-2">
              <strong>{food.title.split(" ")[0]}: </strong>{" "}
              {food.description.split("<br/>")[0]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Weekmenu;
