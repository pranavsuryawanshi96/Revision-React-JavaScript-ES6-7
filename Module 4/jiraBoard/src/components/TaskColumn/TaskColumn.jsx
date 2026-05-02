import React from "react";
import "./TaskColumn.css";
import TaskCard from "../TaksCard/TaskCard";
const TaskColumn = ({ title, icon }) => {
  return (
    <div>
      <section className="task_column">
        <h2 className="task_column_heading">
          <img src={icon} alt="" className="task_column_icon" />
          {title}
        </h2>
        <TaskCard />
      </section>
    </div>
  );
};

export default TaskColumn;
