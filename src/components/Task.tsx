import {DeleteOutlined} from "@ant-design/icons";
import React, {useState} from "react";
import {Card, Input} from 'antd';
import { TaskModel } from "../models/TaskModel.ts";

interface AddTaskProps {
	task: TaskModel,
	index: number,
	setTaskIdToRemove: React.Dispatch<React.SetStateAction<number>>
}

function Task({task, index, setTaskIdToRemove}: AddTaskProps) {
	const [taskDescription, setTaskDescription] = useState(task.description)

	const deleteTask = () => {
		setTaskIdToRemove(index)
	}
		return (
			<>
				<Card
					title={task.title}
					style={{ width: 300, marginTop: 16 }}
					actions={[
						<DeleteOutlined onClick={deleteTask}/>
					]}
				>
					<Input placeholder={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}></Input>
				</Card>
			</>
		);
}

export default Task