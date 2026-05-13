import React from "react";
import "./TaskColumn.css";
import TaskCard from "../TaskCard/TaskCard";
import DropArea from "../DropArea/DropArea";
const TaskColumn = ({
  title,
  icon,
  tasks,
  status,
  handleDelete,
  setActiveCard,
  onDrop,
}) => {
  return (
    <div>
      <section className="task_column">
        <h2 className="task_column_heading">
          <img src={icon} alt="" className="task_column_icon" />
          {title}
        </h2>
        <DropArea onDrop={() => onDrop(status, 0)} />
        {tasks.map(
          (task, index) =>
            task.status === status && (
              <>
                <TaskCard
                  key={index}
                  title={task.task}
                  tags={task.tags}
                  handleDelete={handleDelete}
                  index={index}
                  setActiveCard={setActiveCard}
                />
                <DropArea onDrop={() => onDrop(status, index + 1)} />
              </>
            ),
        )}
      </section>
    </div>
  );
};

export default TaskColumn;
