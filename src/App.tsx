import AddTask from "./components/AddTask.tsx";
import Tasks from "./components/Tasks.tsx";
import {useState} from "react";
import { TodoBox } from "./styles.ts";
import { Card } from "antd";

function App() {
  const [tasks, setTasks] = useState<string[]>([])

  return (
    <TodoBox>
      <Card title="Todo list">
        <AddTask tasks={tasks} setTasks={setTasks}/>
        <Tasks tasks={tasks} setTasks={setTasks}/>
      </Card>
    </TodoBox>
  )
}

export default App
