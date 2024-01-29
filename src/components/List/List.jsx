import Task from "../Task/Task";

const List = ({addTask, deleteTask}) => {
  return (
    <ul>
      {addTask.map((task) => <Task deleteTask={deleteTask} task={task} key={task.id}/>  )}
    </ul>
    
  )
}

export default List;