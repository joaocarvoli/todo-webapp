import React from "react";

export interface AddTasksProps {
  tasks: string[],
  setTasks: React.Dispatch<React.SetStateAction<string[]>>
}