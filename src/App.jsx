import Input from "./components/Input/Input";
import List from "./components/List/List";
import { useState,useEffect } from "react";
import './App.css'

function App() {
  
  const [addTask, setAddTask] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos?limit=4")
      .then((res) => res.json())
      .then((data) => setAddTask(data.todos));
  }, []);

  const deleteTask = (id) => {
    const filteredList = addTask.filter((el) => el.id !== id);
    setAddTask(filteredList);
  };

  return (
    <div className="App">
      <div className="to-do-list-container">
      <h1 className="title"> TO DO LIST </h1>

      <Input setAddTask={setAddTask}/>
      <List addTask={addTask} deleteTask={deleteTask}/>
      </div>
    </div>
  );
}

export default App;
