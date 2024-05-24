import React from "react";
import "./TaskContents.css";

function TaskContents({ titles }) {
  const itemsPerTitle = {
    "Personal Projects": { count: 4, angles: [0, 30, 60, 90] },
    Development: { count: 4, angles: [0, 30, 60, 90] },
    Maintenance: { count: 7, angles: [0, 30, 60, 90, 120, 150, 180] },
  };

  const radius = 225; // 22.5rem

  return (
    <ul className="task_wrap">
      {titles.map((title, index) => {
        const angles = itemsPerTitle[title].angles;

        return (
          <li key={index} className="task_item">
            <div className="task_in">{title}</div>
            <div className="task_out">
              <ol className="task_cont">
                {angles.map((angle, itemIndex) => {
                  const angleRad = (angle * Math.PI) / 180;
                  const x = Math.cos(angleRad) * radius - 25;
                  const y = Math.sin(angleRad) * radius - 25;

                  return (
                    <li
                      key={itemIndex}
                      style={{
                        position: "absolute",
                        transform: `translate(${x}px, ${y}px) rotate(90deg)`,
                        transformOrigin: "center center",
                        left: "50%",
                        top: "50%",
                      }}
                    >
                      <a href="#" className="modal">
                        {itemIndex + 1}
                      </a>
                    </li>
                  );
                })}
              </ol>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default TaskContents;
