import React from "react";
import { FaCrown } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";

const ListItem = ({ item }) => {
  const { namn, isPersonal, creator } = item;

  const color = creator ? "#f9ff21" : isPersonal ? "#00d1ff" : "inherit";
  const fontFamily = creator ? "cursive" : "inherit";
  const fontSize = "30px";

  return (
    <li
      style={{ color, fontSize, fontFamily }}
      className="flex text-center items-center"
    >
      {creator ? (
        <FaCrown className="mr-1 " style={{ color: "gold" }} />
      ) : isPersonal ? (
        <GiTeacher className="mr-1 " style={{ color: "#00d1ff" }} />
      ) : null}
      {namn}
      {creator && <FaCrown className="ml-1 " style={{ color: "gold" }} />}
    </li>
  );
};

export default ListItem;
