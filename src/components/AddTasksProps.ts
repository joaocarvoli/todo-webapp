import React from "react";
import { TaskModel } from "../models/TaskModel.ts"

export interface AddTasksProps {
  tasks: TaskModel[],
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>
}