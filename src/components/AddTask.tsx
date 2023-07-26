import { Button, Input } from "antd";
import { useState } from "react";
import { TaskAdd } from "../styles.ts";
import {AddTasksProps} from "./AddTasksProps.ts";

function AddTask({tasks, setTasks}: AddTasksProps) {
	const [taskInput, setTaskInput] = useState('')

	const addTask = () => {
		setTasks([...tasks, taskInput])
		setTaskInput('')
	}

	return (
		<TaskAdd>
			<Input
					type="text"
					placeholder="Write your task"
					value={taskInput}
					onChange={(e) => setTaskInput(e.target.value)}
			/>
			<Button onClick={addTask}>Add</Button>
		</TaskAdd>
	)
}

export default AddTask