import { Button, Input, message } from "antd";
import { useState } from "react";
import { TaskAdd } from "../styles.ts";
import { AddTasksProps } from "./AddTasksProps.ts";
import { TaskModel } from "../models/TaskModel.ts";

function AddTask({ tasks, setTasks }: AddTasksProps) {
	const style = {
		marginLeft: '5px'
	};

	const [taskInput, setTaskInput] = useState('');

	const addTask = () => {
		if (taskInput.trim() === "") {
			message.error("Task title cannot be empty.");
			return;
		}

		const newTask: TaskModel = {
			title: taskInput,
			description: "Set description"
		};

		setTasks([...tasks, newTask]);
		setTaskInput('');
		message.success("Task added successfully.");
	};

	return (
		<TaskAdd>
			<Input
				type="text"
				placeholder="Write your task"
				value={taskInput}
				onChange={(e) => setTaskInput(e.target.value)}
			/>
			<Button style={style} onClick={addTask}>
				Add
			</Button>
		</TaskAdd>
	);
}

export default AddTask;
