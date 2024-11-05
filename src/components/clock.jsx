import React from "react";

const Clock = () => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  return (
    <div>
      <h1>
        {hour}:{min}:{sec}
      </h1>
    </div>
  );
};

export default Clock;
