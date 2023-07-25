import './App.css'
import AddTask from "./components/AddTask.tsx";
import Tasks from "./components/Tasks.tsx";
import {useState} from "react";

function App() {
  const [tasks, setTasks] = useState<string[]>([])

  return (
    <div className='centered-div'>
      <AddTask tasks={tasks} setTasks={setTasks}/>
      <Tasks tasks={tasks}/>
    </div>
  )
}

export default App
