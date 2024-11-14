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
    <>
      <div className="absolute top-0 right-0 p-2 flex gap-2">
        <div className="bg-darkpurple/50 p-2 rounded-md border border-darkpurple">
          <time className="text-xl text-white">{actualTime}</time>
        </div>
        <div className="bg-darkpurple/50 p-2 rounded-md border border-darkpurple">
          <time className="text-xl text-white">{today}</time>
        </div>
      </div>
    </>
  );
};

export default Clock;
