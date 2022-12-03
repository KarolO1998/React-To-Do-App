import React from "react";
import List from "./List";

const  Lists = ({lists}) => {

  
  return(
    <>
      {lists.map((list) => (
        < List key={list.id} list ={list}/>
      ))}
    </>
  )
}

export default Lists;