import "./App.css";
import {useState} from 'react'
import Header from "./components/Header";
import Lists from "./components/Lists";
import AddList from "./components/AddList"

const App = () => {

  const [showAddList, setShowAddList] = useState(false)

  const [lists, setLists] = useState([
    { id: 1, text: "HTML Class", day: "Nov 5th at 9am" },
    { id: 2, text: "CSS Class", day: "Nov 5th at 9am" },
    { id: 3, text: "Clean Room", day: "Nov 6th at 12pm" },
  ]);

  const addList = (list) => {
    const id = Math.floor(Math.random() * 100) + 1;
    const newList = { id, ...list };
    setLists([...lists, newList]);
  }

  const deleteList = (id) => {
    setLists(lists.filter((list) => list.id !== id))
  }

  return (
    <div className="App">
      <div className="container">
        <Header onAdd={() => setShowAddList(!showAddList)} />
        {showAddList && <AddList onAdd={addList} />}
        {lists.length > 0 ? <Lists lists={lists} onDelete={deleteList} /> : "We have completed all our To Dos!"}
      </div>
    </div>
  );
}

export default App;
