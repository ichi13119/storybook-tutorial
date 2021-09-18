import React, { useState, useEffect } from "react";

import { TaskData, TaskStatus } from "../class/Task";

import Task from "./Task";
import TaskEmpty from "./TaskEmpty";
import TaskLoading from "./TaskLoading";

type TaskListProps = {
  tasks: TaskData[];
  loading: boolean;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, loading }) => {
  const [taskState, setTaskState] = useState<TaskData[]>([]);

  useEffect(() => {
    const tasksInOrder = [
      ...tasks.filter((t) => t.status === TaskStatus.TASK_PINNED),
      ...tasks.filter((t) => t.status !== TaskStatus.TASK_PINNED),
    ];
    setTaskState(tasksInOrder);
  }, [tasks]);

  if (loading === true) {
    return <TaskLoading />;
  }
  if (tasks === undefined || tasks.length === 0) {
    return <TaskEmpty />;
  }

  return (
    <div className="list-items">
      {taskState.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
