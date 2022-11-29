import React from "react";

const  List = () => {
  // const todoLists = ['understand React', 'practice React', 'Practice more react', 'react' ];
  const todoLists = [
    {id: 1, course: 'HTML'},
    {id: 2, course: 'CSS'},
    {id: 3, course: 'JS'},
    {id: 4, course: 'React'},
    {id: 5, course: 'React Native'}
  ]

  return(
    <div>
      {todoLists.map((todoList) => (
        <h2 key={todoList.id}>{todoList.course}</h2>
      ))}
    </div>
  )
}
export default List;