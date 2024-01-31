import { MdDelete } from "react-icons/md";
import './task.css'
const Task = ({ task, deleteTask }) => {
  return (
    <li className="Task">
      <p className="paragraph">{task.todo}</p>

      <button className="btn" onClick={() => deleteTask(task.id)}>
        <MdDelete className="icon-delete"/>
      </button>
    </li>
  );
};

export default Task;
