import React from 'react'

import TaskList from './TaskList'
import { taskData } from './Task.stories'
import { TaskStatus } from '../class/Task'
import { Provider } from 'react-redux'
import { store } from '../lib/store'

export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [(story: any) => <Provider store={store}><div style={{ padding: '3rem' }}>{story()}</div></Provider>],
  excludeStories: /.*Data$/,
}

export const defaultTasksData = [
  { ...taskData, id: '1', title: 'Task 1' },
  { ...taskData, id: '2', title: 'Task 2' },
  { ...taskData, id: '3', title: 'Task 3' },
  { ...taskData, id: '4', title: 'Task 4' },
  { ...taskData, id: '5', title: 'Task 5' },
  { ...taskData, id: '6', title: 'Task 6' },
]

export const withPinnedTasksData: {
  id: string
  title: string
  status: TaskStatus
}[] = [
  { id: '6', title: 'Task 6 (pinned)', status: TaskStatus.TASK_PINNED },
  ...defaultTasksData.slice(0, 5),
]

export const withArchivedTasksData: {
  id: string
  title: string
  status: TaskStatus
}[] = [
  ...defaultTasksData.slice(0, 5),
  { id: '6', title: 'Task 6 (archived)', status: TaskStatus.TASK_ARCHIVED },
]

export const Default = () => (
  <TaskList tasks={defaultTasksData} loading={false}/>
)

export const WithPinnedTasks = () => (
  <TaskList tasks={withPinnedTasksData} loading={false}/>
)

export const WithArchivedTasks = () => (
  <TaskList tasks={withArchivedTasksData} loading={false}/>
)

export const Empty = () => <TaskList tasks={[]} loading={false} />

export const Loading = () => <TaskList tasks={[]} loading={true} />