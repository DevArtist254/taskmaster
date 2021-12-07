import {FaTimes} from "react-icons/fa"

const Task = ({task, removeTask, onToggle}) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h1 key={task.id}>
        {task.text}
        <FaTimes
          onClick={() => removeTask(task.id)}
          style={{color: "red", cursor: "pointer"}}
        />
      </h1>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
