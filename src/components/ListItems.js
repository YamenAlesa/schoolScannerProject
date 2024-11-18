import React from "react";
import { FaCrown } from "react-icons/fa";

const ListItem = ({ item }) => {
  const { namn, isPersonal, creator } = item;

  const color = creator ? "#ffc93c" : isPersonal ? "purple" : "inherit";
  const fontFamily = creator ? "cursive" : "inherit";
  const fontSize = "20px";

  return (
    <li
      style={{ color, fontSize, fontFamily }}
      className="flex items-center"
    >
      {creator && <FaCrown className="mr-1" style={{ color: "black" }} />}
      {namn}
      {creator && <FaCrown className="ml-1" style={{ color: "black" }} />}
    </li>
  );
};

export default ListItem;
