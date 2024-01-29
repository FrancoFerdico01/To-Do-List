import { useState } from "react";

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
    <form type="submit" onSubmit={handleClick}>
      <div>
        <input type="text" value={inputValue} onChange={handleInput} />
        <button onClick={handleClick}> Add Task </button>
      </div>
    </form>
  );
};

export default Input;
