import React, { useEffect, useState } from "react";
import qrcode from "../images/feedBackQRcode.png";
import { BiBorderRadius } from "react-icons/bi";

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
    <div className="bg-gray_light/80 shadow-lg p-4 rounded-lg w-full h-fit">
      <h2 className="font-bold text-2xl text-center text-gray_dark mb-4">
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
                day === index + 1 ? "mb-2 p-4 bg-meteorite text-white rounded-3xl shadow-2xl"  :  "mb-2 text-gray_dark"
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
    <>
      <img src={qrcode} alt="qr code" className="flex w-40 h-40 items-end " />
    </>
    </div>
    );
};

export default Weekmenu;
