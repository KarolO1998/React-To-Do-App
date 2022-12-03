import React from "react";

const List = ({list}) => {
    return (
    <div className="list">
        <h3>{list.text}</h3>
        <p>{list.day}</p>
    </div>
    )
};
export default List;