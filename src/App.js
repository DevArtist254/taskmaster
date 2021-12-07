import {useState} from "react"
import AddTask from "./components/AddTask.comp"
import {Header} from "./components/Header.comp"
import Tasks from "./components/Tasks.comp"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
  ])

  const addTask = ({...newTask}) => {
    setTasks([...tasks, newTask])
  }

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const reminderUpdater = (id) => {
    //on a btn click map and compare
    setTasks(
      tasks.map((task) => {
        return task.id === id ? {...task, reminder: !task.reminder} : task
      })
    )
  }

  return (
    <div className="container">
      <Header />
      <AddTask addTask={addTask} />
      <Tasks tasks={tasks} removeTask={removeTask} onToggle={reminderUpdater} />
    </div>
  )
}

export default App
