import React from "react";
import "./TaskForm.css";
import Tag from "../Tag/Tag";
const TaskForm = () => {
  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          className="task_input"
          placeholder="Enter Task Details"
        />
        <div className="task_form_bottom">
          <div>
            <Tag tagName="DEV" />
            <Tag tagName="QA" />
            <Tag tagName="Product Owner" />
          </div>
          <div>
            <select className="task_status">
              <option value="Ready For Development">
                Ready For Development
              </option>
              <option value="In-Progress">In-Progress</option>
              <option value="Ready for Test">Ready for Test</option>
              <option value="Close">Close</option>
            </select>
            <button type="submit" className="task_submit">
              + Add
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
