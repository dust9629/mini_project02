import React from "react";
import "./TaskContents.css";

function TaskContents({ titles }) {
  return (
    <ul className="task_wrap">
      {titles.map((title, index) => (
        <li key={index}>
          <div className="task_in">{title}</div>
          <div className="task_out">
            <ol className="task_cont">
              <li></li>
            </ol>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskContents;
