import { useState } from "react";
import './input.css'
const Input = ({ setAddTask }) => {
  const [inputValue, setInputValue] = useState("");
  function handleInput(event) {
    setInputValue(event.target.value);
  }

  const handleClick = (event) => {
    event.preventDefault();

    const newList = {
      id: Math.floor(Math.random() * 100000),
      todo: inputValue,
    };

    setAddTask((prev) => [...prev, newList]);
    setInputValue("");
  };

  return (
    <form className="Input" type="submit" onSubmit={handleClick}>
      <input className="text-input"  placeholder ='Write a task...'type="text" value={inputValue} onChange={handleInput} />
      <button className="btn-add" onClick={handleClick}> Add Task </button>
    </form>
  );
};

export default Input;
