import React, { useEffect, useState } from "react";

const Clock = () => {
  const date = new Date();
  const today = date.toLocaleDateString();
  const [actualTime, setActualTime] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setActualTime(date.toLocaleTimeString([], { hour12: false }));
    }, 1000);
  });

  return (
    <div className="flex flex-col">
      <div className="p-2 font-bold">
        <time className="text-xl text-gray_dark">{actualTime}</time>
      </div>
      <div className="p-2 font-bold text-nowrap">
        <time className="text-xl text-gray_dark">{today}</time>
      </div>
    </div>
  );
};

export default Clock;
