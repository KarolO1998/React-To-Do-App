import React from "react";
import List from "./List"

const Lists = ({lists, onDelete}) => {

  return (
    <>
      {lists.map((list) => (
        <List key={list.id} list={list} onDelete={onDelete} />
      ))}
    </>
  );
};
export default Lists;
