interface ShowTasksProps {
	tasks: string[]
}

function Tasks({tasks}: ShowTasksProps) {
	return (
		<div>
			{
				tasks.map((task, index) => {
					return (
							<div key={index}>
								<p>{task}</p>
							</div>
					)
				})
			}
		</div>
	)
}

export default Tasks