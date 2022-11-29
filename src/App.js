import "./App.css";
import Html from "./components/Html";
import Header from "./components/Header"
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Html />
        <List />
      </div>
    </div>
  );
}

export default App;
