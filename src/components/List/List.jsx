import Task from "../Task/Task";
import './list.css'
const List = ({addTask, deleteTask}) => {
  return (
    <ul className="List">
      {addTask.map((task) => <Task deleteTask={deleteTask} task={task} key={task.id}/>  )}
    </ul>
    
  )
}

export default List;