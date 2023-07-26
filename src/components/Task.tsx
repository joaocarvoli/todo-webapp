import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import React from "react";
import { Card } from 'antd';
import { TaskModel } from "../models/TaskModel.ts";

interface AddTaskProps {
	task: TaskModel,
	index: number,
	setTaskIdToRemove: React.Dispatch<React.SetStateAction<number>>
}

function Task({task, index, setTaskIdToRemove}: AddTaskProps) {
	const style = {
		//color: isHovered ? '#ff6666' : '#000000'
	}

	const deleteTask = () => {
		setTaskIdToRemove(index)
	}

		return (
			<>
				<Card
					title={task.title}
					style={{ width: 300, marginTop: 16 }}
					actions={[
						<EditOutlined/>,
						<DeleteOutlined style={style} onClick={deleteTask}/>
					]}
				>
					{task.description}
				</Card>
			</>
		);
}

export default Task