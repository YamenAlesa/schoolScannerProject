import React, { useEffect, useState } from "react";

const Daymenu = () => {
  const [foodDay, setFoodDay] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
  }, []);

  return (
    <div className="flex justify-center gap-8 p-6 w-full">
      <div className="flex shadow-lg rounded-lg">
        <img
          src="/imgs/foodimg.png"
          alt="Food of the Day"
          className="w-1/2 h-full object-cover"
        />

        <div className="flex flex-col justify-evenly bg-gray_light shadow-md p-4 rounded-lg w-1/2">
          {/**/}
          <h2 className="font-bold text-center text-lg">Dagens Lunch</h2>
          <p className="text-center text-sm">
            <strong>Mat:</strong> {foodDay[0]?.description.split("<br/>")[0]}
          </p>
          <p className="text-center text-sm">
            <strong>Vegan:</strong> {foodDay[0]?.description.split("<br/>")[1]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Daymenu;
