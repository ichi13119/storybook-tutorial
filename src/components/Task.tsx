import React from "react";
import { TaskData, TaskStatus } from "../class/Task";
import { useAppDispatch } from "../lib/hooks";
import { archiveTask, pinTask } from "../lib/task";

export type TaskProps = {
  task: TaskData;
};

const Task: React.FC<TaskProps> = ({ task: { id, title, status } }) => {
  const dispatch = useAppDispatch();

  const onArchiveTask = (id: string) => {
    dispatch(archiveTask(id));
  };

  const onPinTask = (id: string) => {
    dispatch(pinTask(id));
  };

  return (
    <div className={`list-item ${status}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          checked={status === TaskStatus.TASK_ARCHIVED}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {status !== TaskStatus.TASK_ARCHIVED && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Task;
