import React from "react";

import Task from "./Task";
import { TaskStatus } from "../class/Task";
import { Provider } from "react-redux";
import { store } from "../lib/store";

export default {
  component: Task,
  title: 'Task',
  decorators: [(story: any) => <Provider store={store}>{story()}</Provider>],
  excludeStories: /.*Data$/,
};

export const taskData: {
  id: string
  title: string
  status: TaskStatus
} = {
  id: '1',
  title: 'Test Task',
  status: TaskStatus.TASK_INBOX,
}

export const Default = () => <Task task={{ ...taskData }} />

export const Pinned = () => (
  <Task task={{ ...taskData, status: TaskStatus.TASK_PINNED}} />
)

export const Archived = () => (
  <Task task={{ ...taskData, status: TaskStatus.TASK_ARCHIVED }} />
)