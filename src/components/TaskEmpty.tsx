import React from "react"

const TaskEmpty: React.FC = () => (
  <div className="list-items">
    <div className="wrapper-message">
      <span className="icon-check" />
      <div className="title-message">You have no tasks</div>
      <div className="subtitle-message">Sit back and relax</div>
    </div>
  </div>
);

export default TaskEmpty;