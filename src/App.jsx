import Input from "./components/Input/Input";
import List from "./components/List/List";
import { useState,useEffect } from "react";
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
    <div>
      <h1> TO DO LIST </h1>

      <Input setAddTask={setAddTask}/>
      <List addTask={addTask} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
