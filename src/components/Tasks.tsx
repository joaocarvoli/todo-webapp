import Task from "./Task.tsx";
import { AddTasksProps } from "./AddTasksProps.ts";
import { useState, useEffect } from "react";

function Tasks({tasks, setTasks}: AddTasksProps) {
	const [taskIdToRemove, setTaskIdToRemove] = useState(-1)

	useEffect(() => {
		console.log("task id: " + taskIdToRemove)
		if(taskIdToRemove != -1){
			setTasks(tasks.filter((_, index) => index != taskIdToRemove))
		}
	}, [taskIdToRemove]);

	return (
		<div>
			{
				tasks.map((task, index) =>
					{
						return (
							<div key={index}>
								<Task task={task} index={index} setTaskIdToRemove={setTaskIdToRemove}/>
							</div>
						)
					}
				)
			}
		</div>
	)
}

export default Tasks