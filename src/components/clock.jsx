import React, { useEffect, useState } from "react";

const Clock = () => {
  const date = new Date();
  const today = date.toLocaleDateString();
  const [actualTime, setActualTime] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setActualTime(date.toLocaleTimeString());
    }, 1000);
  });

  return (
    <div>
      <h1>{actualTime}</h1>
      <br />
      <h2>{today}</h2>
    </div>
  );
};

export default Clock;
