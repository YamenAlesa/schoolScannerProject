import React, { useEffect, useState } from "react";

const Clock = () => {
  const date = new Date();
  const today = date.toLocaleDateString();
  const [actualTime, setActualTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setActualTime(currentTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="p-2 font-bold">
        <time className="ml-2 text-4xl text-white">{actualTime}</time>
      </div>
      <div className="p-2 font-bold text-nowrap">
        <time className="ml-2 text-3xl text-white">{today}</time>
      </div>
    </div>
  );
};

export default Clock;
