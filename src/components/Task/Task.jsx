const Task = ({ task, deleteTask }) => {
 
  return (
    <li>
      <p>{task.todo}</p>
      <button onClick={() => deleteTask(task.id)}></button>
    </li>
  );
};

export default Task;
