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
    <div className="flex gap-2">
      <div className="bg-darkpurple/50 p-2 rounded-md border border-darkpurple/50 text-nowrap">
        <time className="text-xl text-white">{actualTime}</time>
      </div>
      <div className="bg-darkpurple/50 p-2 rounded-md border border-darkpurple/50">
        <time className="text-xl text-white">{today}</time>
      </div>
    </div>
  );
};

export default Clock;
