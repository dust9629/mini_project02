import React from "react";
import "./TaskContents.css";

function TaskContents({ titles, addClass, removeClass, urlLinks }) {
  const itemsPerTitle = {
    "Personal Projects": { count: 4, angles: [0, 30, 60, 90] },
    Development: { count: 4, angles: [0, 30, 60, 90] },
    Maintenance: { count: 6, angles: [0, 30, 60, 90, 120, 150] },
  };

  const radius = 225;

  return (
    <ul className="task_wrap">
      {titles.map((title, index) => {
        const angles = itemsPerTitle[title].angles;
        const links = urlLinks[title];
        const hoverClass = `n${index + 1}`;

        return (
          <li
            key={index}
            className="task_item"
            onMouseEnter={() => addClass(hoverClass)}
            onMouseLeave={() => removeClass(hoverClass)}
          >
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
                      <a href={links[itemIndex]} className="modal">
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
