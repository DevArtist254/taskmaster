import React from "react"
import Task from "./Task.comp"

const Tasks = ({tasks, removeTask, onToggle}) => {
  return (
    <div>
      {tasks.map((task) => {
        return <Task task={task} removeTask={removeTask} onToggle={onToggle} />
      })}
    </div>
  )
}

export default Tasks
