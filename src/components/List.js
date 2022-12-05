import React from "react";
import { FaTimes } from "react-icons/fa";

const List = ({ list, onDelete }) => {
  return (
    <div className="list">
      <h3 className="wizbox">
        {list.text}
        <FaTimes style={{ color: "red", cursor:"pointer" }} onClick={() => onDelete(list.id)} />
      </h3>
      <p>{list.day}</p>
    </div>
  );
};

export default List;
