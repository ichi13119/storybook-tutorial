import React from "react";

import { useAppSelector } from "../lib/hooks";
import { getTasks, taskIsLoading } from "../lib/task";

import TaskList from "./TaskList";

type Error = {
  error?: string;
};

export const PureInboxScreen: React.FC<Error> = ({ error }) => {
  const storedTasks = useAppSelector(getTasks);
  const isLoading = useAppSelector(taskIsLoading);

  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList tasks={storedTasks} loading={isLoading} />
    </div>
  );
};

export default PureInboxScreen;
