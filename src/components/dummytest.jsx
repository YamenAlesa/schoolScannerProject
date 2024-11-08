import React from "react";
import veckaMeny from "../database/dummydata.json";

const Dummytest = () => {
  const weekMenu = veckaMeny.menu;

  return (
    <div>
      <h1>{veckaMeny.file_name}</h1>
      {weekMenu.map((day, i) => {
        console.log(day);
        return (
          <div key={i}>
            <h1>{day.day}:</h1>
            <p>Breakfast: {day.breakfast.join(", ")}</p>
            <p>Lunch: {day.lunch.join(", ")}</p>
            <p>Dinner: {day.dinner.join(", ")}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Dummytest;
