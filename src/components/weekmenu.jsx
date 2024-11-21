import React, { useEffect, useState } from "react";
import { BiBorderRadius } from "react-icons/bi";
import "../borderanimation.css";

const Weekmenu = () => {
  const [foodWeek, setFoodWeek] = useState([]);
  const [day, setDay] = useState(new Date().getDay());
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
      console.log(data.items);
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
    <div
      id="week-menu"
      className="flex flex-col text-center bg-gray_dark/80 shadow-lg p-4 rounded-lg w-full max-h-[500px] h-fit overflow-scroll"
    >
      <h2 className="font-bold text-2xl text-center text-white mb-4">
        ❤ Veckans Lunch
      </h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {foodWeek.map((food, index) => (
            <li
              key={index}
              className={
                day === index + 1
                  ? "mb-2 p-4 bg-purplepink text-white rounded-3xl shadow-2xl border-animation"
                  : "mb-2 text-white"
              }
            >
              <strong>{food.title.split(" ")[0]} </strong>
              <br />
              {food.description.split("<br/>")[0]}
              <br />
              {food.description.split("<br/>")[1]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Weekmenu;
