import { Button, Input } from "antd";
import { useState } from "react";
import { TaskAdd } from "../styles.ts";
import {AddTasksProps} from "./AddTasksProps.ts";
import { TaskModel } from "../models/TaskModel.ts"

function AddTask({tasks, setTasks}: AddTasksProps) {
	const [taskInput, setTaskInput] = useState('')

	const addTask = () => {
		const newTask: TaskModel = {
			title: taskInput,
			description: "Set description"
		}

		setTasks([...tasks, newTask])
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