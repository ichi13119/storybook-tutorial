import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskStatus } from "../class/Task";
import { RootState } from "./store";

export interface TaskState {
  tasks: {
    id: string;
    title: string;
    status: TaskStatus;
  }[];
  loading: boolean;
}

// The initial state of our store when the app loads.
// Usually you would fetch this from a server
const initialState: TaskState = {
  tasks: [
    { id: "1", title: "Something", status: TaskStatus.TASK_INBOX },
    { id: "2", title: "Something more", status: TaskStatus.TASK_INBOX },
    { id: "3", title: "Something else", status: TaskStatus.TASK_INBOX },
    { id: "4", title: "Something again", status: TaskStatus.TASK_PINNED },
  ],
  loading: false,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    archiveTask: (state, action: PayloadAction<string>) => {
      const target = state.tasks.find((task) => task.id === action.payload);
      if (target) {
        if (target.status === TaskStatus.TASK_ARCHIVED) {
          target.status = TaskStatus.TASK_INBOX;
        } else {
          target.status = TaskStatus.TASK_ARCHIVED;
        }
      }
    },
    pinTask: (state, action: PayloadAction<string>) => {
      const target = state.tasks.find((task) => task.id === action.payload);
      if (target) {
        if (target.status === TaskStatus.TASK_PINNED) {
          target.status = TaskStatus.TASK_INBOX;
        } else {
          target.status = TaskStatus.TASK_PINNED;
        }
      }
    },
  },
});

export const { archiveTask, pinTask } = taskSlice.actions;

export default taskSlice.reducer;

export const taskIsLoading = (state: RootState) => state.task.loading;
export const getTasks = (state: RootState) => state.task.tasks;
