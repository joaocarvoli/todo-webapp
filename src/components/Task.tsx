import { TaskItem, TaskText} from '../styles.ts'
import { DeleteOutlined } from "@ant-design/icons";
import React from "react";

interface AddTaskProps {
	task: string,
	index: number,
	setTaskIdToRemove: React.Dispatch<React.SetStateAction<number>>
}

function Task({task, index, setTaskIdToRemove}: AddTaskProps) {
	const deleteTask = () => {
		setTaskIdToRemove(index)
	}

	return (
		<div>
			<TaskItem>
				<TaskText>{task}</TaskText>
				<DeleteOutlined onClick={deleteTask}/>
			</TaskItem>
		</div>
	)
}

export default Task
