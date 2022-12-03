import "./App.css";
import { useState } from "react";
import Header from "./components/Header"
import Lists from "./components/Lists";
import AddList from "./components/AddList";

const App = () => {

  const[showAddList, setShowAddList] = useState(false)

  
  const [lists, setLists] = useState (
    [
      {id: 1, text: 'HTML Class' , day: "Nov 5th at 9am"},
      {id: 2, text: 'CSS Class', day: "Nov 5th at 9am"},
      {id: 3, text: 'JS Class', day: "Nov 5th at 9am"},
      
    ]
  );

  const addList = (list) =>{
    const id = Math.floor(Math.random() * 100) + 1;
    const newList = {id, ...list};
    setLists({...lists, newList}); 



    
  }
  
  return (
    <div className="App">
      <div className="container">
        <Header onAdd={() => setShowAddList(!showAddList)} />
        {showAddList &&<AddList onAdd ={addList}/>}
        <Lists lists ={lists} />
      </div>
    </div>
  );
}

export default App;
