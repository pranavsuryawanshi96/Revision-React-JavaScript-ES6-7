import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "../Tag/Tag";
const TaskForm = ({ setTasks }) => {
  // instead of using two state we are using one state handling form by adding extra attribute name extracting the value
  const [taskData, setTaskData] = useState({
    task: "",
    status: "Ready For Development",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // we can set the data this will return new obj
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  whatever data is coming show in ui it will return array of objects
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "Ready For Development",
      tags: [],
    });
  };

  const selectedTag = (tag) => {
    setTaskData((prev) => {
      const isSelected = prev.tags.includes(tag);
      //  is tag is selected includes in tag then
      const tags = isSelected
        ? prev.tags.filter((item) => item !== tag)
        : // if it is not their means value is fresh
          [...prev.tags, tag];
      return { ...prev, tags };
    });

    //  here getting selected tag (some is array method) if tag is present is taskData so it will give  u true or false means user by selecedttag method we are checking by props
    // if (taskData.tags.some((item) => item === tag)) {
    //   // here it will get the new tags which is not matching it will give you
    //   const filterTags = taskData.tags.filter((item) => item !== tag);
    //   setTaskData((prev) => {
    //     return { ...prev, tags: filterTags };
    //   });
    // } else {
    //   setTaskData((prev) => {
    //     // copy the old tags also
    //     return { ...prev, tags: [...prev.tags, tag] };
    //   });
    // }
  };

  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("");

  // const handleTask = (e) => {
  //   setTask(e.target.value);
  // };

  // const handleStatusChange = (e) => {
  //   setStatus(e.target.value);
  // };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Enter Task Details"
          onChange={handleChange}
        />
        <div className="task_form_bottom">
          <div>
            <Tag
              tagName="DEV"
              selectedTag={selectedTag}
              selected={checkTag("DEV")}
            />
            <Tag
              tagName="QA"
              selectedTag={selectedTag}
              selected={checkTag("QA")}
            />
            <Tag
              tagName="Product Owner"
              selectedTag={selectedTag}
              selected={checkTag("Product Owner")}
            />
          </div>
          <div>
            <select
              className="task_status"
              name="status"
              value={taskData.status}
              onChange={handleChange}
            >
              <option value="Ready For Development">
                Ready For Development
              </option>
              <option value="In Progress">In Progress</option>
              <option value="Ready for Test">Ready for Test</option>
              <option value="Closed">Closed</option>
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
