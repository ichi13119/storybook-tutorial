export enum TaskStatus {
  TASK_INBOX = 'TASK_INBOX',
  TASK_ARCHIVED = 'TASK_ARCHIVED',
  TASK_PINNED = 'TASK_PINNED',
}

export type TaskData = {
  id: string
  title: string
  status: TaskStatus
}