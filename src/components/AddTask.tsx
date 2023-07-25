import {Button, Input} from "antd";
import React, {useState} from "react";

interface AddTaskProps {
	tasks: string[],
	setTasks: React.Dispatch<React.SetStateAction<string[]>>
}

function AddTask({tasks, setTasks}: AddTaskProps) {
	const containerStyle = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	};

	const [taskInput, setTaskInput] = useState('')

	const addTask = () => {
		if(tasks) setTasks([...tasks, taskInput])
		setTaskInput('')
	}

	return (
		<div style={containerStyle}>
			<Input
					type="text"
					placeholder="Write your task"
					value={taskInput}
					onChange={(e) => setTaskInput(e.target.value)}
			/>
			<Button onClick={addTask}>Add</Button>
		</div>
	)
}

export default AddTask