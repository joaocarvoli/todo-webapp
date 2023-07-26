import Task from "./Task.tsx";
import { AddTasksProps } from "./AddTasksProps.ts";
import { useState, useEffect } from "react";

function Tasks({tasks, setTasks}: AddTasksProps) {
	const [taskIdToRemove, setTaskIdToRemove] = useState(-1)

	useEffect(() => {
		if(taskIdToRemove != -1){
			console.log("task selected: " + taskIdToRemove)
			console.log(tasks[taskIdToRemove])
			console.log(tasks.splice(taskIdToRemove, taskIdToRemove))
			setTasks(tasks)
		}
	}, [taskIdToRemove]);

	return (
		<div>
			{
				tasks.map((task, index) => {
					return (
							<div key={index}>
								<Task task={task} index={index} setTaskIdToRemove={setTaskIdToRemove}/>
							</div>
					)
				})
			}
		</div>
	)
}

export default Tasks